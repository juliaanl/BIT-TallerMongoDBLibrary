import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection MongoDB : ON ");
  } catch (failed) {
    console.log("Unable to connect MongoDB \n " + failed);
  }
};
export default { dbConnection };
