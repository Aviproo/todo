// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://meetups:FmXGZut5QaWfizAc@cluster0.ufkejyx.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const toDoCollection = db.collection("todoWork");

  if (req.method === "POST") {
    const data = req.body;
    const result = await toDoCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: "to do inserted!" });
  }

  if (req.method === "DELETE") {
    const id = req.body;
    const data = await toDoCollection.deleteOne(id);
    client.close();
    res.status(200).json({ message: "work Deleted" });
  }
}
