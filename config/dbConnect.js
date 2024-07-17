import mongoose from "mongoose";



const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;


//  username:  i-novotek          password:  y9roK94wOjKzKvTc       IP Address: 0.0.0.0/0

// Instructor specified code for  const connected, the value in .connect( " " ) will be belowmwntioned value
// mongodb+srv://i-novotek:y9roK94wOjKzKvTc@nodejs-ecommerce-api.6aj8pvi.mongodb.net/nodejs-ecommerce-api?retryWrites=true&w=majority