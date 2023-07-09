import React from 'react';

const Farmingpage = () => {
  return (
    <div className="farming">
      <h1 id="allr">Our Mission</h1>

      {/* right side image */}
      <div className="right_sideimg" id="side">
        <img src="images/image(1).png" alt="" width="430" height="300" loading="lazy" />
      </div>
      
      {/* left side text */}
      <div className="left_sidetext" id="content">
        <p className="big"> We want to make a positive impact on the Makhana farming community in Mithala because of our strong connection to the area and the people. Our goal is to improve their lives and support them through meaningful change.</p>
      </div>
    </div>
  );
};

export default Farmingpage;
