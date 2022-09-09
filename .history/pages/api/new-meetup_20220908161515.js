import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://lyvandat:<password>@cluster0.lsg2quf.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    await meetupsCollection.insertOne(data);

    res.status(201).json({ message: "inserted data sucessfully" });
  }
}

export default handler;
