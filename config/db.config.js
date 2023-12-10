import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
    process.exit(1); // Optionally exit the application if the database connection fails
  }
};

export default dbConnection;
