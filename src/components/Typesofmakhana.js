import React from "react";

const Typesofmakhana = () => {
  return (
    <div className="Typesmakahana">
      <h1 id="allrow">Types of makhana</h1>

      {/* right side image */}
      <div className="right_sideimg_makahana" id="rside">
        <img
          src="images/makhana type.jpg"
          alt=""
          width="430"
          height="500"
          loading="lazy"
        />
      </div>

      {/* left side text */}
      <div className="left_sidetext_makana" id="leftcontent">
        <p className="big">
          {" "}
          We want to make a positive impact on the Makhana farming community in
          Mithala because of our strong connection to the area and the people.
          Our goal is to improve their lives and support them through meaningful
          change.
        </p>
      </div>
    </div>
  );
};

export default Typesofmakhana;
