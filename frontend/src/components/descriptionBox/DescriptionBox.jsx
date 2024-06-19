import React from "react";
import "./descriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="desc-box">
      <div className="desc-box-nav">
        <div className="desc-box-nav-box">Description</div>
        <div className="desc-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="desc-box-desc">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet and serves as a
          virtual marketplace where businesses and individuals can showcase
          their products, interact with customers, and conduct various
          transactions without the need of any physical presence. E-commerce
          website have gained immense popularity due to their convenience,
          accessibility and gloabal they offer.
        </p>
        <p>
          E-commerce website typically displays products or services and their
          detailed descriptions, images, prices and any available vaiables (e.g.
          sizes, colors). Each product usually has its own dedicated page with
          relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
