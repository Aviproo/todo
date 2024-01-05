import AddItem from "../components/AddItem";
import Head from "next/head";
import { Fragment } from "react";
import ShowItem from "../components/ShowItem";
import { MongoClient } from "mongodb";

function Home(props) {
  console.log(props.todoWork);
  return (
    <Fragment>
      <Head>
        <title>To Do app</title>
      </Head>
      <AddItem />
      <ShowItem addWork={props.todoWork} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://meetups:FmXGZut5QaWfizAc@cluster0.ufkejyx.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todoWorkCollection = db.collection("todoWork");

  const todoWork = await todoWorkCollection.find().toArray();

  client.close();
  return {
    props: {
      todoWork: todoWork.map((todo) => ({
        work: todo.work,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default Home;
