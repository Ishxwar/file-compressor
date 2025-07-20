const payload = {
  name: "Ishwar",
  tier: "Basic",
  issuedAt: "10-07-2025",
  expiresAt: "10-07-2026",
};

import crypto from "crypto";
import fs from "fs";
const payloadString = JSON.stringify(payload);
const hash = crypto.createHash("sha256").update(payloadString).digest("hex");

const privateKey = fs.readFileSync("./private.pem", "utf8");
const sign = crypto.createSign("RSA-SHA256");
sign.update(hash);
const signature = sign.sign(privateKey, "base64");

const license = { payload, signature };

// saves the payload as a .lic file
fs.writeFileSync("license.lic", JSON.stringify(license, null, 2), "utf8");
console.log("License file saved as license.lic");
