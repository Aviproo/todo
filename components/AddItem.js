import { Fragment } from "react";
import classs from "./AddItem.module.css";
import Link from "next/link";

function AddItem() {
  return (
    <Fragment>
      <div className={classs.addItem}>
        <h1>Add item to Do </h1>
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
