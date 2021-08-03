const configs = {
  development: {
    envDBConnectionString: "mongodb+srv://dbUser:" + process.env.DEV_DB_PASSWORD + "@cluster0.5jwce.mongodb.net/dev_db?retryWrites=true&w=majority",
    envPort: 3000
  },
  testing: {

  },
  staging: {

  },
  production: {
    envDBConnectionString: process.env.DB_CONNECTION_STRING,
    envPort: process.env.PORT
  }
}

const currentEnv = process.env.NODE_ENV || "development";
module.exports = configs[currentEnv];
