import { Fragment, useRef, useState } from "react";
import classs from "./AddItem.module.css";

function AddItem(props) {
  const [workData, setWorkData] = useState([]);
  const workRef = useRef();
  async function addWork() {
    const work = workRef.current.value;
    setWorkData([...workData, work]);

    const todoWork = {
      work: workRef.current.value,
    };

    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(todoWork),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }
  return (
    <Fragment>
      <div className={classs.addItem}>
        <h1>Add item to Do </h1>
        <div>
          <input placeholder="Gym" ref={workRef} />
          <button onClick={addWork}>Add Work</button>
        </div>
      </div>
      <div>
        {workData.map((item) => (
          <div key={Math.random()} className={props.todoList}>
            {item} <button>Delete</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://meetups:FmXGZut5QaWfizAc@cluster0.ufkejyx.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const toDoCollection = db.collection("todoWork");

  const todoList = await toDoCollection.find().toArray();

  client.close();
  return {
    props: {
      todoList: todoList.map((doItem) => ({
        work: doItem.work,
        id: doItem._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default AddItem;
