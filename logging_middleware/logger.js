const axios = require("axios");

async function Log(stack, level, packageName, message, token) {
  try {
    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Log created:", response.data);
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
}

module.exports = Log;