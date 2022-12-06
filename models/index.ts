import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts"
import { Sequelize } from "npm:sequelize-typescript";
import { User } from "./User.ts";
import "npm:pg-hstore";
import  "npm:pg";

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = config();

const sequelize = new Sequelize({
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  dialect: "postgres",
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
});

sequelize.addModels([User]);

export { User };

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
};
