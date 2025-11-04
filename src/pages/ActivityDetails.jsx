
import { useParams } from "react-router-dom";

function ActivityDetails() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Activity Details</h1>
      <p>Showing details for activity ID: {id}</p>
    </div>
  );
}

export default ActivityDetails