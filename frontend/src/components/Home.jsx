import Navbar from "../components/Navbar";
import men from "../components/images/men.jpg";
import woman from "../components/images/woman.jpg";
import kids from "../components/images/kids.jpg";
import dress1 from "./images/dress1.webp";
import dress2 from "./images/dress2.webp";
import dress3 from "./images/dress3.webp";
import dress4 from "./images/dress4.webp";
import dress5 from "./images/dress5.webp";
import dress6 from "./images/dress6.webp";
import firstMan from "./images/first man.jpeg";
import secondMan from "./images/secondman.jpeg";
import thirdMan from "./images/thirdMan.jpeg";
import fourthMan from "./images/fourthMan.jpeg";
import fifthMan from "./images/fifthMan.jpeg";
import ethnic from "./images/ethnic.jpg"
import activeWear from './images/activewear.jpg'
import casual from "./images/casual.jpg"
import top from "./images/top.jpg"
import sports from "./images/sports.jpg"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import poster from "./images/poster.jpeg"

import "../components/css/home.css";

const Home = () => {
  return (
    <>
      <div className="content">
        <Navbar />

        <div className="main-content">
          <div className="bottom-sec">
            <img
              className="first"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/Workwearaug/Topheader/PC.gif"
              alt=""
            />
            <img
              className="first"
              src="https://m.media-amazon.com/images/G/31/img23/Fashion/AF/EOSS/Unrec/topscroll/PC/pc-clearance._SX3000_QL85_.jpg"
              alt=""
            />
          </div>


          <div className="top-sec">
            <div className="image-row">
              <div className="image-container">
                <img className="img-1" src={woman} alt="" />
                <h3>WOMEN</h3>
              </div>
              <div className="image-container">
                <img className="img-2" src={men} alt="" />
                <h3>MEN</h3>
              </div>
              <div className="image-container">
                <img src={kids} alt="" className="img-3" />
                <h3>KIDS</h3>
              </div>
            </div>
          </div>

          <h1 className="heading-1">Best Sellers</h1>
          <div className="dresses">
            <div className="dress-img">
              <img src={dress1} alt="" />
              <p>Cropped Knit Pullover</p>
              <p>₹1,234</p>
            </div>
            <div className="dress-img">
              <img src={dress2} alt="" />
              <p>Long Knit Dress</p>
              <p>₹2,290</p>
            </div>
            <div className="dress-img">
              <img src={dress4} alt="" />
              <p>Slit Dress</p>
              <p>₹1,790</p>
            </div>
            <div className="dress-img">
              <img src={dress5} alt="" />
              <p>A-Line Dress</p>
              <p>₹1,790</p>
            </div>
            <div className="dress-img">
              <img src={dress3} alt="" />
              <p>Satin Blouse</p>
              <p>₹1,590</p>
            </div>
            <div className="dress-img">
              <img src={dress6} alt="" />
              <p>Zip Knitted Pullover</p>
              <p>₹1,990</p>
            </div>
          </div>


          <div className="men-dress">
            <div className="men">
              <img src={firstMan} alt="" />
            </div>
            <div className="men">
              <img src={secondMan} alt="" />
            </div>
            <div className="men">
              <img src={thirdMan} alt="" />
            </div>
            <div className="men">
              <img src={fourthMan} alt="" />
            </div>
            <div className="men">
              <img src={fifthMan} alt="" />
            </div>
          </div>


<div className="poster">
  <img src={poster} alt="" />
</div>

          <div className="shop-category">
            <div className="cards">
              <img className="ethnic" src={ethnic} alt="" />
              <p>Ethnic Wear</p>
            </div>
            <div className="cards">
              <img className="activewear" src={activeWear} alt="" />
              <p>Active wear</p>
            </div>
            <div className="cards" >
              <img className="casual" src={casual} alt="" />
              <p>Casual Wear</p>
            </div>
            <div className="cards">
              <img className = 'western'src={top} alt="" />
              <p>Western Wear</p>
            </div>
            <div className="cards">
              <img className="sports" src={sports} alt="" />
              <p>Sports Wear</p>
            </div>
            <div className="cards">
              <img src="https://images.bewakoof.com/uploads/grid/app/different-types-of-nightwear-for-women-bewakoof-blog-11-1615361640.png" alt="" className="sleepwear" />
              <p>Night Wear</p>
            </div>

            <div className="cards">
              <img className="blazer" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpgm3YktndSq_BPzmi5xkQIBmr8QEkQra1E1TI0-J3FnAkkbrCiW8pNbJKdougnUldknsoABfBiwld0k7dF0xq-R86dbff3dMYWSs7QGA&usqp=CAE" alt="" />
              <p>Work Wear</p>
            </div>

            <div className="cards">
              <img src="https://cdn.pixabay.com/photo/2017/08/02/12/44/accessories-2571416_1280.jpg" alt="" className="purse" />
              <p>Accessories</p>
            </div>
          </div>

          <div className="big-imgs">
            <img src={img1} alt="" /><img src={img2} alt="" />
          </div>



        </div>
      </div>
    </>
  );
};

export default Home;
