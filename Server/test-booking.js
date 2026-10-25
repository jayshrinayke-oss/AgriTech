
const http = require("http");

const loginData = JSON.stringify({
  email: "agritech.test.2026@example.com",
  password: "AgriTest@2026"
});

const loginReq = http.request({
  hostname: "localhost",
  port: 5000,
  path: "/api/auth/login",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(loginData)
  }
}, (loginRes) => {
  let body = "";

  loginRes.on("data", chunk => body += chunk);

  loginRes.on("end", () => {
    const result = JSON.parse(body);

    if (loginRes.statusCode !== 200 || !result.token) {
      console.log("Login failed:", result.message);
      return;
    }

    const bookingData = JSON.stringify({
      product: "6addfbb616c592674755a4c2",
      quantity: 2
    });

    const bookingReq = http.request({
      hostname: "localhost",
      port: 5000,
      path: "/api/bookings",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(bookingData),
        Authorization: `Bearer ${result.token}`
      }
    }, (res) => {
      let response = "";

      res.on("data", chunk => response += chunk);

      res.on("end", () => {
        console.log("Booking Status:", res.statusCode);
        console.log("Booking Response:", response);
      });
    });

    bookingReq.on("error", error => console.log("Error:", error.message));
    bookingReq.write(bookingData);
    bookingReq.end();
  });
});

loginReq.on("error", error => console.log("Login Error:", error.message));
loginReq.write(loginData);
loginReq.end();
