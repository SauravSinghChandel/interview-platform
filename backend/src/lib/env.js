import dotenv from "dotenv";

dotenv.configDotenv();

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
}
