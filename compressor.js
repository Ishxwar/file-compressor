const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const crypto = require("crypto");

// preventing debugging tools
const { execSync } = require("child_process");

function detectDebugTools() {
  try {
    const output = execSync("tasklist", { encoding: "utf-8" });
    const suspicious = [
      "ida64.exe",
      "ida.exe",
      "x64dbg.exe",
      "ollydbg.exe",
      "procmon.exe",
      "wireshark.exe",
    ];
    if (suspicious.some((p) => output.toLowerCase().includes(p))) {
      console.log("Debugger tool detected. Exiting...");
      process.exit(1);
    }
  } catch (_) {}
}
detectDebugTools();
//
//detect virtual machines
const os = require("os");
function detectVM() {
  const cpuInfo = os.cpus()[0].model.toLocaleLowerCase();
  if (
    cpuInfo.includes("virtual") ||
    cpuInfo.includes("vmware") ||
    cpuInfo.includes("qemu")
  ) {
    console.log("VM detected");
    process.exit(1);
  }
  const bios = execSync("wmic bios get manufacturer", {
    encoding: "utf-8",
  }).toLowerCase();
  if (
    bios.includes("virtualbox") ||
    bios.includes("vmware") ||
    bios.includes("qemu")
  ) {
    console.log("VM BIOS detected. Exiting...");
    process.exit(1);
  }
}
detectVM();

// get CLI arguments
const [, , inputFilePath, licensePath] = process.argv;

if (!inputFilePath || !licensePath) {
  console.error("Usage: node compressor.js <file-to-compress> <license-file>");
  process.exit(1);
}
// read and parse license file
//
console.log("Step: Reading license");
//
const licenseRaw = fs.readFileSync(licensePath, "utf-8");
const { payload, signature } = JSON.parse(licenseRaw);

// verify
//
console.log("Step: Verifying license");
//
const payloadString = JSON.stringify(payload);
const hash = crypto.createHash("sha256").update(payloadString).digest("hex");

const verify = crypto.createVerify("RSA-SHA256");
verify.update(hash);

//this helped in pointing the exe file to this directory to use public.pem file (basepath)
const basePath =
  typeof process.pkg !== "undefined"
    ? path.dirname(process.execPath)
    : __dirname;
const publicKey = fs.readFileSync(path.join(basePath, "public.pem"), "utf-8");
//
const isValid = verify.verify(publicKey, signature, "base64");
if (!isValid) {
  console.error("Invalid License");
  process.exit(1);
}

const ext = path.extname(inputFilePath).toLocaleLowerCase();
const tier = payload.tier;

const tierPermissions = {
  Basic: [".txt"],
  Intermediate: [".txt", ".json", ".csv"],
  Pro: [".txt", ".json", ".csv", ".xml", ".xlsx"],
};
//
console.log("Step: Checking permissions");
//

if (!tierPermissions[tier]?.includes(ext)) {
  console.error(`${tier} Tier does not allow compression of ${ext} files`);
  process.exit(1);
}
//
console.log("Step: Starting compression");
//
const input = fs.createReadStream(inputFilePath);
const outputPath = inputFilePath + ".gz";
const output = fs.createWriteStream(outputPath);

const gzip = zlib.createGzip();

input.pipe(gzip).pipe(output);
//
console.log("Step: Compression done");
//
input.on("error", (err) => console.error("Read error:", err));
output.on("error", (err) => console.error("Write error:", err));
gzip.on("error", (err) => console.error("Gzip error:", err));
//

output.on("finish", () => {
  console.log("File compressed");
});
