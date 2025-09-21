import mongoose, { Schema, Document } from "mongoose";

export interface IJournal extends Document {
  title: string;
  location: string;
  description: string;
  date: Date;
}

const journalSchema = new Schema<IJournal>({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model<IJournal>("Journal", journalSchema);
