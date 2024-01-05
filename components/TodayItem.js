import Link from "next/link";
import classes from "./TodayItem.module.css";
import { useRef } from "react";
function TodayItem(props) {
  const taskRef = useRef();
  function addTask() {
    props.taskName(taskRef.current.value);
  }
  return (
    <>
      <div className={classes.body}>
        <h2>
          <input placeholder="Add Work" ref={taskRef} />
        </h2>
        <Link href="/">
          <button onClick={addTask}>Add</button>
        </Link>
      </div>
    </>
  );
}
export default TodayItem;
