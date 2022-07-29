require("dotenv").config();
const mongoose = require("mongoose");

const { User, Thoughts } = require("../models");
const users = require("./users.json");
const thoughts = require("./thoughts.json");

const init = async () => {
  try {
    const DB_NAME = process.env.DB_NAME;
    const MONGODB_URI =
      process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(MONGODB_URI, options);

    console.log("[INFO]: Successfully connected to DB");

    await User.deleteMany({});
    await Thoughts.deleteMany({});

    // seed users
    const userPromises = users.map((user) => {
      return User.create(user);
    });
    await Promise.all(userPromises);
    console.log("[INFO]: Successfully seeded users");

    // seed Thoughts
    const thoughtPromises = thoughts.map((thought) => {
      return Thoughts.create(thought);
    });
    await Promise.all(thoughtPromises);
    console.log("[INFO]: Successfully seeded thoughts");
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
