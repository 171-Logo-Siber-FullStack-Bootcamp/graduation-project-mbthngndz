module.exports = {
    HOST: process.env.HOST || "localhost",
    USER: process.env.USER || "me",
    PASSWORD: process.env.PASSWORD || "password",
    DB: process.env.DB || "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  