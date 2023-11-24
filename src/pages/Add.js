import React from "react";
import Addmovie from "../components/AddMovie/AddMovie"

const Add = (props) => {
  const { data, setData } = props
  return (
    <div>
      <Addmovie movie={data} setMovie={setData} />
    </div>
  );
};

export default Add;
