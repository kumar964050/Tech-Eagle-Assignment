import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Race = () => {
  const allRunnersDetails = useSelector((state) => state.runners);
  console.log(allRunnersDetails);
  return <div>Race</div>;
};

export default Race;
