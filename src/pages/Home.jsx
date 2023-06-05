import React from "react";
import picheader from "../assets/images/web3desktop.jpg";
import Article from "../components/article/Article";
const Home = () => {
  const news = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs ?",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation ?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up",
      description:
        "Private funding by VC firms is down 50% YOY, We tahe a look at what that means.",
    },
  ];

  return (
    <>
      <div className="sections">
        <div className="section-header">
        <div className="section-one">
          <div className="bg">
            <img src={picheader} alt="" />
          </div>
          <div className="infos">
            <div className="title">
              <h1>
                The Bright <br /> Future of
                <br /> Web 3.0 ?
              </h1>
            </div>
            <div className="more-info">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back ito the hads of the people. But
                is it really fulfilling its promise ?
              </p>
              <button> READ MORE</button>
            </div>
          </div>
        </div>
        <div className="section-tow">
          <div className="news">
            <h2>New</h2>
            {news.map((n) => (
              <div className="block-new">
                <h3>{n.title}</h3>
                <p>{n.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        <Article />
      </div>
   
    </>
  );
};

export default Home;
