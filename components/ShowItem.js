import classes from "./ShowItem.module.css";
import { useRouter } from "next/router";

function ShowItem(props) {
  const router = useRouter();
  async function editHandler(work) {
    localStorage.setItem("work", work.work);
    const response = await fetch("api/hello", {
      method: "DELETE",
      body: JSON.stringify(work),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data.message);
    localStorage.setItem("work", work.work);
    console.log(work.work);
    router.push("/today");
  }

  async function deleteHandler(id) {
    const response = await fetch("api/hello", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    location.reload();
    alert(data.message);
  }
  return (
    <>
      <div className={classes.body}>
        {props.addWork.map((item) => (
          <div key={item.id}>
            <div className={classes.item}>
              <h2>
                {item.work}

                <button onClick={() => editHandler({ work: item.work })}>
                  Edit
                </button>

                <button onClick={() => deleteHandler({ work: item.work })}>
                  Delete
                </button>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShowItem;
