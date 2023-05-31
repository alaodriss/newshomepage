import React from "react";

import pic1 from "../../assets/images/image-retro-pcs.jpg";
import pic2 from "../../assets/images/image-top-laptops.jpg";
import pic3 from "../../assets/images/image-gaming-growth.jpg";

const Article = () => {
  const DonneAc = [
    {
      id: 1,
      num: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades ?",
      photo: {pic1},
    },
    {
      id: 2,
      num: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budegts",
      photo: {pic2},
    },
    {
      id: 3,
      num: "03",
      title: "The Growth Of Gaming",
      description: "How the pandemic has sparked fresh opportuunites.",
      photo: { pic3 },
    },
  ];
  return (
    <>
      {DonneAc.map((item) => (
        <div className="card-ac">
          <div className="img">
            <img src={item.photo} alt="pic"/>
          </div>
          <div className="info-ac">
            <h1>{item.num}</h1>
            <p className="title-ac">{item.title}</p>
            <p className="description-ac">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Article;
