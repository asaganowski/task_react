import React from "react";
import {RotatingLines} from "react-loader-spinner"

function Loader() {;

    return (
    <div style={{ textAlign: "center", position: "relative", top: "50%"}}>
      <RotatingLines />
    </div>
  );
};

export default Loader;