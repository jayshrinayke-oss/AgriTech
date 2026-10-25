
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

    const productData = JSON.stringify({
      name: "Test Wheat Seeds",
      description: "AgriTech test product",
      price: 100,
      category: "Seeds",
      stock: 20
    });

    const productReq = http.request({
      hostname: "localhost",
      port: 5000,
      path: "/api/products",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(productData),
        Authorization: `Bearer ${result.token}`
      }
    }, (res) => {
      let response = "";

      res.on("data", chunk => response += chunk);

      res.on("end", () => {
        console.log("Add Product Status:", res.statusCode);
        console.log("Response:", response);
      });
    });

    productReq.on("error", error => console.log("Error:", error.message));
    productReq.write(productData);
    productReq.end();
  });
});

loginReq.on("error", error => console.log("Login Error:", error.message));
loginReq.write(loginData);
loginReq.end();
