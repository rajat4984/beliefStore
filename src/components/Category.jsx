import React from "react";
import topImage from "../assets/images/tops.jpg";

const CategoryGrid = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="category-container">
      <h2 className="heading">Our Products</h2>
      <section class="flex category">
        {arr.map((item) => {
          return (
            <div class="flex-item">
              <a href="top.html">
                <img src={topImage} />
              </a>
            </div>
          );
        })}
      </section>
      <hr className="divider"/>
    </div>
  );
};

export default CategoryGrid;
