import React from "react";
import topImage from "../assets/images/tops.jpg";
import beachWear from "../assets/images/Beachwear.jpg";
import bodySuit from "../assets/images/Bodysuit.jpg";
import crochet from "../assets/images/Crochet.jpg";
import dresses from "../assets/images/Dresses.jpg";

const CategoryGrid = () => {
  const imageArr = [topImage, dresses, crochet, bodySuit, beachWear];
  return (
    <div className="category-container">
      <h2 className="heading">Our Products</h2>
      <section class="flex category">
        {imageArr.map((item) => {
          return (
            <div class="flex-item">
              <a href="top.html">
                <img src={item} />
              </a>
            </div>
          );
        })}
      </section>
      <hr className="divider" />
    </div>
  );
};

export default CategoryGrid;
