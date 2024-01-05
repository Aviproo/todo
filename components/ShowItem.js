import classes from "./ShowItem.module.css";
function ShowItem(props) {
  function deleteHandler(id) {
    console.log(id);
  }
  return (
    <>
      <div className={classes.body}>
        {props.addWork.map((item) => (
          <div>
            <div key={item.id} className={classes.item}>
              <h2>
                {item.work}{" "}
                <button onClick={() => deleteHandler(item.id)}>Delete</button>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShowItem;
