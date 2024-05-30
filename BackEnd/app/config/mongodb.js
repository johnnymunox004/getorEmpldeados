// config/database.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://lucas:lucas@sena.kgb2j8b.mongodb.net/?retryWrites=true&w=majority&appName=sena";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
}

export { client, connect };
