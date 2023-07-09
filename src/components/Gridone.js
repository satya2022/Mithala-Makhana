import React from 'react';

const GridOne = () => {
  return (
    <div className="grid-one">
      <h1 id="full">Health Benefits</h1>
      {/* lower side image */}
      <div className="lowerimg">
        <div className="rich" id="rich1">
          <img src="images/Rich-in-protien-1.png" alt="pro" />
        </div>
        <div className="plant" id="plant1">
          <img src="images/PLANT-BASED-SUPER-SNACK.png" alt="pla" />
        </div>
        <div className="anti" id="anti1">
          <img src="images/ANTI-OXIDANT.png" alt="" />
        </div>
        <div className="glut" id="glut1">
          <img src="images/GLUTEN-FREE-1.png" alt="" />
        </div>
      </div>

      {/* text lowering */}
      <div className="text">
        <p className="para1">CALCIUM RICH</p>
        <p className="para1">PLANT BASED SNACK</p>
        <p className="para1">ANTI-OXIDANT</p>
        <p className="para1">GLUTEN FREE</p>
      </div>

      <div className="imagetext1">
        <div className="img" id="img_product">
          <img src="images/product_packaging.png" width="500" height="600" alt="product img" />
        </div>
        <div className="rightparen_text">
          <div className="right text" id="rightside_text">
            1).Rich in Protein: Foxnuts are a good source of plant-based protein. They contain about, 3.9 grams of protein per 1 ounce (28 grams) serving.
            <br />
            <br />
            2).Rich in Minerals: Foxnuts are a rich source of minerals such as magnesium, potassium, and phosphorus. These minerals play a vital role in maintaining healthy bones, muscles, and nerve function.
            <br />
            <br />
            3).Gluten-free: Foxnuts are gluten-free, making them a great snack option for people who are sensitive to gluten or have celiac disease.
            <br />
            <br />
            4).Low in Calories: Foxnuts are a low-calorie food, making them an excellent option for people who are trying to lose weight. One cup of foxnuts contains only 120-130 calories.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridOne;






