import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const ticketSchema = new Schema({
  code: { type: String, default: () => uuidv4(), unique: true },
  purchase_datetime: { type: Date, default: Date.now, },
  amount: { type: Number },
  purchaser: { type: String },
});

const ticketModel = model("tickets", ticketSchema);

export { ticketModel };