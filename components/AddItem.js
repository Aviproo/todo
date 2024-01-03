import { Fragment, useRef, useState } from "react";
import classs from "./AddItem.module.css";

function AddItem(props) {
  const [workData, setWorkData] = useState([]);
  const workRef = useRef();
  function addWork() {
    // const work = workRef.current.value;
    setWorkData([...workData, workRef.current.value]);
  }
  return (
    <Fragment>
      <div className={classs.addItem}>
        <h1>Add item to Do {props.work}</h1>
        <div>
          <input placeholder="Gym" ref={workRef} />
          <button onClick={addWork}>Add Work</button>
        </div>
      </div>
      <div>
        {workData.map((item) => (
          <div className={classs.item} key={Math.random()}>
            {item} <button>Delete</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
export default AddItem;
