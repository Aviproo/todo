import Link from "next/link";
import classes from "./TodayItem.module.css";
import { useRef, useState } from "react";
function TodayItem(props) {
  const [enteredData, setEnteredData] = useState(localStorage.getItem("work"));

  if (enteredData == undefined) {
    setEnteredData("");
  }
  function onchangeHandler(e) {
    setEnteredData(e.target.value);
  }
  const taskRef = useRef();
  function addTask() {
    props.taskName(enteredData);
  }
  return (
    <>
      <div className={classes.body}>
        <h1>Today Task</h1>
        <h2>
          <input
            placeholder="Add Task"
            ref={taskRef}
            value={enteredData}
            onChange={onchangeHandler}
          />
        </h2>
        <Link href="/">
          <button onClick={addTask}>Add</button>
        </Link>
      </div>
    </>
  );
}
export default TodayItem;
