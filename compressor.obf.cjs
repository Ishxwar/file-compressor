const a0_0x23e81d = a0_0x3fbb;
(function (_0x590aa1, _0x5c5af9) {
  const _0x252596 = a0_0x3fbb,
    _0x3f56ed = _0x590aa1();
  while (!![]) {
    try {
      const _0x5274bd =
        -parseInt(_0x252596(0x96)) / 0x1 +
        (parseInt(_0x252596(0x89)) / 0x2) * (parseInt(_0x252596(0x9d)) / 0x3) +
        -parseInt(_0x252596(0xa3)) / 0x4 +
        (parseInt(_0x252596(0x82)) / 0x5) * (parseInt(_0x252596(0x9f)) / 0x6) +
        (parseInt(_0x252596(0xbe)) / 0x7) * (parseInt(_0x252596(0xa9)) / 0x8) +
        parseInt(_0x252596(0xb7)) / 0x9 +
        (-parseInt(_0x252596(0xb0)) / 0xa) * (parseInt(_0x252596(0xa0)) / 0xb);
      if (_0x5274bd === _0x5c5af9) break;
      else _0x3f56ed["push"](_0x3f56ed["shift"]());
    } catch (_0x4964f2) {
      _0x3f56ed["push"](_0x3f56ed["shift"]());
    }
  }
})(a0_0x100c, 0x7779c);
const fs = require("fs"),
  path = require("path"),
  zlib = require("zlib"),
  crypto = require("crypto"),
  { execSync } = require("child_process");
function detectDebugTools() {
  const _0x1dc474 = a0_0x23e81d;
  try {
    const _0x4836c4 = execSync(_0x1dc474(0x8b), { encoding: _0x1dc474(0x9b) }),
      _0x544fa7 = [
        _0x1dc474(0xc0),
        _0x1dc474(0xb1),
        _0x1dc474(0x95),
        "ollydbg.exe",
        _0x1dc474(0xa8),
        _0x1dc474(0xb5),
      ];
    _0x544fa7["some"]((_0x5cb411) =>
      _0x4836c4[_0x1dc474(0xab)]()[_0x1dc474(0xb9)](_0x5cb411)
    ) && (console["log"](_0x1dc474(0xa1)), process[_0x1dc474(0xbb)](0x1));
  } catch (_0x4d4b5d) {}
}
detectDebugTools();
const os = require("os");
function detectVM() {
  const _0x164be4 = a0_0x23e81d,
    _0x3997ef = os["cpus"]()[0x0][_0x164be4(0xad)]["toLocaleLowerCase"]();
  (_0x3997ef["includes"](_0x164be4(0x8e)) ||
    _0x3997ef[_0x164be4(0xb9)](_0x164be4(0xbf)) ||
    _0x3997ef[_0x164be4(0xb9)]("qemu")) &&
    (console[_0x164be4(0xa5)]("VM\x20detected"), process[_0x164be4(0xbb)](0x1));
  const _0x16861a = execSync("wmic\x20bios\x20get\x20manufacturer", {
    encoding: _0x164be4(0x9b),
  })[_0x164be4(0xab)]();
  (_0x16861a[_0x164be4(0xb9)](_0x164be4(0xc2)) ||
    _0x16861a[_0x164be4(0xb9)](_0x164be4(0xbf)) ||
    _0x16861a[_0x164be4(0xb9)](_0x164be4(0x91))) &&
    (console["log"](_0x164be4(0x9a)), process[_0x164be4(0xbb)](0x1));
}
detectVM();
const [, , inputFilePath, licensePath] = process["argv"];
(!inputFilePath || !licensePath) &&
  (console[a0_0x23e81d(0x98)](
    "Usage:\x20node\x20compressor.js\x20<file-to-compress>\x20<license-file>"
  ),
  process[a0_0x23e81d(0xbb)](0x1));
console[a0_0x23e81d(0xa5)]("Step:\x20Reading\x20license");
const licenseRaw = fs["readFileSync"](licensePath, a0_0x23e81d(0x9b)),
  { payload, signature } = JSON[a0_0x23e81d(0xa6)](licenseRaw);
console[a0_0x23e81d(0xa5)]("Step:\x20Verifying\x20license");
const payloadString = JSON[a0_0x23e81d(0x99)](payload),
  hash = crypto["createHash"](a0_0x23e81d(0xb6))
    ["update"](payloadString)
    [a0_0x23e81d(0x92)](a0_0x23e81d(0xac)),
  verify = crypto["createVerify"](a0_0x23e81d(0x84));
verify[a0_0x23e81d(0xb4)](hash);
function a0_0x100c() {
  const _0x3d4d7a = [
    "Read\x20error:",
    "toLowerCase",
    "hex",
    "model",
    "join",
    ".xlsx",
    "110lXfkGR",
    "ida.exe",
    "readFileSync",
    "Invalid\x20License",
    "update",
    "wireshark.exe",
    "sha256",
    "3723444OKBkHw",
    "zlib",
    "includes",
    ".txt",
    "exit",
    ".json",
    "pipe",
    "3997RTQbng",
    "vmware",
    "ida64.exe",
    "undefined",
    "virtualbox",
    "10nzIypE",
    "path",
    "RSA-SHA256",
    "createReadStream",
    "base64",
    ".csv",
    "tier",
    "80YnjSmq",
    "verify",
    "tasklist",
    "createGzip",
    "\x20Tier\x20does\x20not\x20allow\x20compression\x20of\x20",
    "virtual",
    "crypto",
    "createWriteStream",
    "qemu",
    "digest",
    "Gzip\x20error:",
    "Write\x20error:",
    "x64dbg.exe",
    "754949mxtuhK",
    "\x20files",
    "error",
    "stringify",
    "VM\x20BIOS\x20detected.\x20Exiting...",
    "utf-8",
    ".xml",
    "68631sOSYVZ",
    "Step:\x20Checking\x20permissions",
    "559284KAuHpC",
    "330286uGmCns",
    "Debugger\x20tool\x20detected.\x20Exiting...",
    ".gz",
    "689772HyZNaT",
    "extname",
    "log",
    "parse",
    "pkg",
    "procmon.exe",
    "3248IBJsge",
  ];
  a0_0x100c = function () {
    return _0x3d4d7a;
  };
  return a0_0x100c();
}
const basePath =
    typeof process[a0_0x23e81d(0xa7)] !== a0_0x23e81d(0xc1)
      ? path["dirname"](process["execPath"])
      : __dirname,
  publicKey = fs[a0_0x23e81d(0xb2)](
    path[a0_0x23e81d(0xae)](basePath, "public.pem"),
    a0_0x23e81d(0x9b)
  ),
  isValid = verify[a0_0x23e81d(0x8a)](publicKey, signature, a0_0x23e81d(0x86));
!isValid &&
  (console["error"](a0_0x23e81d(0xb3)), process[a0_0x23e81d(0xbb)](0x1));
function a0_0x3fbb(_0x1a7fa9, _0x1a1158) {
  const _0x100c7b = a0_0x100c();
  return (
    (a0_0x3fbb = function (_0x3fbbe2, _0x418d1f) {
      _0x3fbbe2 = _0x3fbbe2 - 0x82;
      let _0xd6b6ec = _0x100c7b[_0x3fbbe2];
      return _0xd6b6ec;
    }),
    a0_0x3fbb(_0x1a7fa9, _0x1a1158)
  );
}
const ext = path[a0_0x23e81d(0xa4)](inputFilePath)["toLocaleLowerCase"](),
  tier = payload[a0_0x23e81d(0x88)],
  tierPermissions = {
    Basic: [a0_0x23e81d(0xba)],
    Intermediate: [a0_0x23e81d(0xba), a0_0x23e81d(0xbc), a0_0x23e81d(0x87)],
    Pro: [
      ".txt",
      a0_0x23e81d(0xbc),
      ".csv",
      a0_0x23e81d(0x9c),
      a0_0x23e81d(0xaf),
    ],
  };
console[a0_0x23e81d(0xa5)](a0_0x23e81d(0x9e));
!tierPermissions[tier]?.["includes"](ext) &&
  (console[a0_0x23e81d(0x98)](
    tier + a0_0x23e81d(0x8d) + ext + a0_0x23e81d(0x97)
  ),
  process["exit"](0x1));
console[a0_0x23e81d(0xa5)]("Step:\x20Starting\x20compression");
const input = fs[a0_0x23e81d(0x85)](inputFilePath),
  outputPath = inputFilePath + a0_0x23e81d(0xa2),
  output = fs[a0_0x23e81d(0x90)](outputPath),
  gzip = zlib[a0_0x23e81d(0x8c)]();
input[a0_0x23e81d(0xbd)](gzip)[a0_0x23e81d(0xbd)](output),
  console[a0_0x23e81d(0xa5)]("Step:\x20Compression\x20done"),
  input["on"](a0_0x23e81d(0x98), (_0x5a074c) =>
    console["error"](a0_0x23e81d(0xaa), _0x5a074c)
  ),
  output["on"](a0_0x23e81d(0x98), (_0x33a9ba) =>
    console[a0_0x23e81d(0x98)](a0_0x23e81d(0x94), _0x33a9ba)
  ),
  gzip["on"](a0_0x23e81d(0x98), (_0x521b55) =>
    console[a0_0x23e81d(0x98)](a0_0x23e81d(0x93), _0x521b55)
  ),
  output["on"]("finish", () => {
    const _0x560b36 = a0_0x23e81d;
    console[_0x560b36(0xa5)]("File\x20compressed");
  });
