import { Fragment } from "react";
import classs from "./AddItem.module.css";
import Link from "next/link";

function AddItem() {
  return (
    <Fragment>
      <div className={classs.addItem}>
        <h1>Add item to Do </h1>
        <button className={classs.completed}>
          <Link href="/completed">
            <h5>Completed Task</h5>
          </Link>
        </button>
        <div>
          <Link href="/today">
            <button>Add Work</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default AddItem;
