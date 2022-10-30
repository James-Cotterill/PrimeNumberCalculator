const PROXY_CONFIG = [
  {
    context: [
      "/API/GetPrimeNumbers"
    ],
    target: "https://localhost:7229",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
