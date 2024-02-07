import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      <img
        src="/logo.png"
        alt=""
        width={50}
        height={50}
        style={{ margin: "15px" }}
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            marginTop: "170px",
            marginRight: "30px",
            flexDirection: "column",
          }}
        >
          <div>
            <img src="/title.png" alt="" width={200} />
            <p className="p-Home">
             
              Let's learn the hadiths of the Prophet and know their
            </p>
            <p className="p-Home">
            
              interpretation and correct pronunciation along with{" "}
            </p>
            <p className="p-Home"> Sunnah</p>
          </div>

          <div style={{ margin: "40px auto" }}>
            <Link to={"/signup"}>
              <button className="btn2" style={{ backgroundColor: "#116746" }}>
                Sign up
              </button>
            </Link>

            <Link to={"/login"}>
              <button className="btn1"> Log in </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="img" />
      </div>
    </div>
  );
};

export default Home;
