import React from "react";
import { Navbar } from "../components";
import CustomTitle from "../utils/customTitle";

function Companion() {
  return (
    <>
      <CustomTitle title={"Companion"} />
      <div className="companion_card">
        <div className="user_input">
          <input type="text" name="from" className="inputs"/>
          <input type="text" name="dest" className="inputs"/>
          <div className="search">search</div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Companion;
