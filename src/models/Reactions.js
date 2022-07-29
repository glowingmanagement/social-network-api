const { Schema, Types } = require("mongoose");
const moment = require("moment");

const newId = () => {
  const id = new Types.ObjectId();

  return id.toString();
};

const reactionSchema = {
  reactionId: {
    type: String,
    required: true,
    default: newId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: moment(),
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
