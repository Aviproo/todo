import TodayItem from "../../components/TodayItem";

function TodayPage(props) {
  async function addTaskHandler(task) {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ work: task }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <TodayItem taskName={addTaskHandler} />
    </>
  );
}

export default TodayPage;
