import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRunner } from "../store/runnersSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const allRunnersDetails = useSelector((state) => state.runners);
  const [runnerDetails, setRunnerDetails] = useState({
    name: "",
    speed: "",
    startTime: "10:00",
  });
  //
  const handleChange = (name, value) => {
    setRunnerDetails({
      ...runnerDetails,
      [name]: value,
    });
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allRunnersDetails.no_of_runners < 10) {
      dispatch(addRunner(runnerDetails));
      setRunnerDetails({
        name: "",
        speed: "",
        startTime: "",
      });
    } else {
      setRunnerDetails({
        name: "",
        speed: "",
        startTime: "",
      });
    }
  };

  return (
    <div className="main-container">
      {/* section 1 */}
      <form onSubmit={handleSubmit} className="side-section-container">
        <h1 className="main-text">RUNNER DETAILS</h1>
        <p className="sub-text">*You can add max 10 participants</p>
        {/* name */}
        <div className="input-container">
          <label htmlFor="Name">Name</label>
          <input
            id="Name"
            placeholder="Usain Bolt"
            value={runnerDetails.name}
            onChange={(e) => {
              handleChange("name", e.target.value);
            }}
          />
        </div>
        {/* speed */}
        <div className="input-container">
          <label htmlFor="speed">Speed</label>
          <input
            id="speed"
            placeholder="30 km/h"
            value={runnerDetails.speed}
            onChange={(e) => {
              handleChange("speed", e.target.value);
            }}
          />
        </div>
        {/* start time */}
        <div className="input-container">
          <label htmlFor="time">Start Time</label>
          <input
            id="time"
            type="time"
            placeholder="10:00"
            value={runnerDetails.startTime}
            onChange={(e) => {
              handleChange("startTime", e.target.value);
            }}
          />
        </div>
        <div className="btn-container">
          <button className="btn add-runner-btn">+ ADD RUNNER</button>
        </div>
      </form>
      <section className="participates-container">
        <div>
          <h1 className="main-title">LIST OF PARTICIPATES</h1>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Speed</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
              {allRunnersDetails.runners.map((each) => (
                <tr key={each.name}>
                  <td>{each.name}</td>
                  <td>{each.speed || "-"}</td>
                  <td>{each.startTime || "-"}</td>
                  <td>{each.endTime || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="race-btn-container">
          <hr />
          <Link to="/race">
            <button className="btn start-race-btn">Start Race {"->"}</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
