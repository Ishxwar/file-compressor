const a0_0x314c31 = a0_0x3dfa;
(function (_0x1cf184, _0x429169) {
  const _0x3578ca = a0_0x3dfa,
    _0x1b6928 = _0x1cf184();
  while (!![]) {
    try {
      const _0x6a9d39 =
        (-parseInt(_0x3578ca(0x1a0)) / 0x1) *
          (parseInt(_0x3578ca(0x1b6)) / 0x2) +
        parseInt(_0x3578ca(0x1bc)) / 0x3 +
        -parseInt(_0x3578ca(0x1a9)) / 0x4 +
        (-parseInt(_0x3578ca(0x1ad)) / 0x5) *
          (parseInt(_0x3578ca(0x1a5)) / 0x6) +
        (-parseInt(_0x3578ca(0x1aa)) / 0x7) *
          (-parseInt(_0x3578ca(0x1a3)) / 0x8) +
        -parseInt(_0x3578ca(0x1ae)) / 0x9 +
        parseInt(_0x3578ca(0x1b1)) / 0xa;
      if (_0x6a9d39 === _0x429169) break;
      else _0x1b6928["push"](_0x1b6928["shift"]());
    } catch (_0x345472) {
      _0x1b6928["push"](_0x1b6928["shift"]());
    }
  }
})(a0_0x2f42, 0x1fab5);
const payload = {
  name: "Ishwar",
  tier: a0_0x314c31(0x1a6),
  issuedAt: a0_0x314c31(0x1b3),
  expiresAt: a0_0x314c31(0x1ab),
};
import a0_0x33d4e2 from "crypto";
const payloadString = JSON[a0_0x314c31(0x1a7)](payload),
  hash = a0_0x33d4e2[a0_0x314c31(0x1b7)](a0_0x314c31(0x1b8))
    ["update"](payloadString)
    [a0_0x314c31(0x1a4)](a0_0x314c31(0x19f));
function a0_0x3dfa(_0x24fb32, _0x52544e) {
  const _0x2f4274 = a0_0x2f42();
  return (
    (a0_0x3dfa = function (_0x3dfa4e, _0x7d2682) {
      _0x3dfa4e = _0x3dfa4e - 0x19f;
      let _0xb78ff8 = _0x2f4274[_0x3dfa4e];
      return _0xb78ff8;
    }),
    a0_0x3dfa(_0x24fb32, _0x52544e)
  );
}
import a0_0x42f939 from "fs";
const privateKey = a0_0x42f939[a0_0x314c31(0x1ba)](
    a0_0x314c31(0x1b5),
    a0_0x314c31(0x1b4)
  ),
  sign = a0_0x33d4e2[a0_0x314c31(0x1b0)](a0_0x314c31(0x1b2));
sign[a0_0x314c31(0x1af)](hash);
const signature = sign[a0_0x314c31(0x1ac)](privateKey, a0_0x314c31(0x1a1)),
  license = { payload: payload, signature: signature };
function a0_0x2f42() {
  const _0x1a2786 = [
    "1622106xuFodT",
    "update",
    "createSign",
    "628450eRJyYD",
    "RSA-SHA256",
    "10-07-2025",
    "utf8",
    "./private.pem",
    "114WBwqbu",
    "createHash",
    "sha256",
    "writeFileSync",
    "readFileSync",
    "log",
    "416856hLOtXe",
    "hex",
    "332mRepRk",
    "base64",
    "license.lic",
    "8lVaTFM",
    "digest",
    "120obmrsr",
    "Pro",
    "stringify",
    "License\x20file\x20saved\x20as\x20license.lic",
    "93180WkmjQU",
    "1712571GyQKxD",
    "10-07-2026",
    "sign",
    "23570jZjjXU",
  ];
  a0_0x2f42 = function () {
    return _0x1a2786;
  };
  return a0_0x2f42();
}
a0_0x42f939[a0_0x314c31(0x1b9)](
  a0_0x314c31(0x1a2),
  JSON[a0_0x314c31(0x1a7)](license, null, 0x2),
  a0_0x314c31(0x1b4)
),
  console[a0_0x314c31(0x1bb)](a0_0x314c31(0x1a8));
