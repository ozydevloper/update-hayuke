import crypto from "crypto";
import "dotenv/config";
const SECRET = process.env.SECRET_TOKEN;

// 🔐 Generate signature di client
export function generateSignature() {
  const timestamp = Date.now().toString();
  const hmac = crypto.createHmac("sha256", SECRET);
  hmac.update(timestamp);
  const signature = hmac.digest("hex");
  // Gabungin timestamp dan signature, terus encode base64
  return Buffer.from(`${timestamp}.${signature}`).toString("base64");
}

// 🔎 Verifikasi signature di server
export function verifySignature(encoded, maxAgeMs = 60_000) {
  try {
    const decoded = Buffer.from(encoded, "base64").toString("utf-8");
    const [timestamp, signature] = decoded.split(".");
    const now = Date.now();

    // ❌ Kalau token udah expired (lebih dari 10 detik)
    if (now - parseInt(timestamp) > maxAgeMs) return false;

    const hmac = crypto.createHmac("sha256", SECRET);
    hmac.update(timestamp);
    const expected = hmac.digest("hex");

    return signature === expected;
  } catch (err) {
    console.error("Signature verification failed:", err);
    return false;
  }
}
