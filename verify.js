import fs from "fs";
import crypto from "crypto";

// read public key
const publicKey = fs.readFileSync("./public.pem", "utf-8");

// load and parse the license file
const licenseData = fs.readFileSync("license.lic", "utf-8");
const { payload, signature } = JSON.parse(licenseData);

// recreate the SHA256 hash of the payload
const payloadString = JSON.stringify(payload);
const hash = crypto.createHash("sha256").update(payloadString).digest("hex");
// verify sign
const verify = crypto.createVerify("RSA-SHA256");
verify.update(hash);

const isValid = verify.verify(publicKey, signature, "base64");

// expiry check
const today = new Date();
const expiryDate = new Date(payload.expiryDate);
if (today > expiryDate) {
  console.error("License expired on", payload.expiryDate);
  process.exit(1);
}

console.log(isValid ? "Valid License" : "Invalid License");
