import { connect, connection, disconnect } from "mongoose";

const MONGO_URI = 'mongodb+srv://mahsacb74:lIUzpt1T0nJZjQG4@cluster0.fnz5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async () => {
  if (connection.readyState === 1) return;
  try {
    await connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

const disconnectDB = async () => {
  try {
    await disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error("MongoDB disconnecting error:", error);
  }
};


export { connectDB, disconnectDB };