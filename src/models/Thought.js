const { Schema, model } = require("mongoose");
const moment = require("moment");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    required: true,
    default: moment(),
  },
  userName: {
    type: String,
    required: true,
  },
};

const schema = new Schema(thoughtSchema);

const Thought = model("Thought", schema);

module.exports = Thought;
