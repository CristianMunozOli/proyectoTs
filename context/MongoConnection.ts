import { MongoClient, Collection, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL || "mongodb://localhost:27017";
const dbName = process.env.MONGO_DB_NAME || "proyectoTsBD";
const collections: { [key: string]: Collection } = {};

async function createMongoConnection() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    addCollections(db);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

const addCollections = (db: Db) => {
  collections.proyecto = db.collection(
    process.env.MONGO_DB_COLLECTION_USERS || "proyecto"
  );
  collections.tarea = db.collection(
    process.env.MONGO_DB_COLLECTION_TAREA || "tarea"
  );
  
};

export default createMongoConnection;
export { collections };