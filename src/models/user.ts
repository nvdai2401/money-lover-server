import mongoose from 'mongoose'
import { IUser } from '../interfaces/IUser'

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please enter a full name'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    password: String,
    salt: String,
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamp: true,
  },
)

export default mongoose.model<IUser & mongoose.Document>('user', User)
