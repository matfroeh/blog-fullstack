import PostModel from "../models/Post.js";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI);

const Post = PostModel(sequelize);

try {
  await sequelize.sync();
  console.log("Database synchronized");
} catch (error) {
  console.log("An error occurred while synchronizing the database", error);
}

// Export the instance so we can use it in other files
export { sequelize, Post };
