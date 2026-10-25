
const http = require("http");

const data = JSON.stringify({
  name: "Test User",
  email: "agritech.test.2026@example.com",
  password: "AgriTest@2026"
});

const req = http.request({
  hostname: "localhost",
  port: 5000,
  path: "/api/auth/register",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(data)
  }
}, (res) => {
  console.log("Status:", res.statusCode);
  res.on("data", (chunk) => console.log("Response:", chunk.toString()));
});

req.on("error", (error) => console.log("Error:", error.message));
req.write(data);
req.end();
