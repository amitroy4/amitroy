import './App.css'
import resumeAmit from '../public/pdf/resume_amit.pdf'
import amitroy2 from '/images/amitroy2.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillMessage, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsFillPinMapFill, BsFillTelephoneFill } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { TypeAnimation } from 'react-type-animation';
import firebaseConfig from '../firebaseconfig';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useEffect, useRef, useState } from 'react';
import MixItUp from 'mixitup';

function App() {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  var emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")
  let [submitMsg, setSubmitMsg] = useState("")
  let [toggle, setToggle] = useState("mobile_menu")
  let [toggleCondition, setToggleCondition] = useState(true)
  const [isFullSize, setIsFullSize] = useState(false);
  let [fullImage, setFullImage] = useState("")

  const handleImgClick = (e) => {
    if (!isFullSize) {
      setFullImage(e)
    }
    if (isFullSize) {
      setFullImage("")
      window.location.reload(false);
    }
    setIsFullSize(!isFullSize);
  };

  const targetRefs = {
    targetHome: useRef(null),
    targetAbout: useRef(null),
    targetGallery: useRef(null),
    targetFooter: useRef(null),
  };

  const handleClick = (targetRef) => {
    setToggleCondition(true)
    setToggle("mobile_menu")
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  let handleToggle = () => {
    if (toggle == "mobile_menu") {
      setToggle("visbletoggle")
    }
    if (toggle == "visbletoggle") {
      setToggle("mobile_menu")
    }

    if (toggleCondition) {
      setToggleCondition(false)
    }

    if (!toggleCondition) {
      setToggleCondition(true)
    }

  }

  let handleSubmit = () => {
    if (name == "") {
      setSubmitMsg("Name field is empty.")
      return
    }
    if (email == "") {
      setSubmitMsg("Email field is empty.")
      return
    }

    if (!email.match(emailValidRegex)) {
      setSubmitMsg("Email is not valid.")
      return
    }

    if (message == "") {
      setSubmitMsg("Message field is empty.")
      return
    }

    addDoc(collection(db, "messages"), {
      sendername: name,
      senderemail: email,
      sendermassege: message,
    }).then(() => {
      setName("");
      setEmail("");
      setMessage(""),
        setSubmitMsg("Message Sent.")
    });

  }


  useEffect(() => {
    const container = document.querySelector('.images');
    MixItUp(container);
  }, []);

  return (
    <>
      {/* ------------------------ Navbar Start ------------------------ */}
      <section className='navbar'>
        <div className="container">
          <div className="box">
            <div className="logo">
              Amit Roy
            </div >
            <div className='bar'>
              {
                toggleCondition
                  ?
                  <VscThreeBars className="toggle" onClick={handleToggle} />
                  :
                  <RxCross1 className="toggle" onClick={handleToggle} />
              }
              <div className='menu'>
                <ul>
                  <li><a><button onClick={() => handleClick(targetRefs.targetHome)}>Home</button></a></li>
                  <li><a><button onClick={() => handleClick(targetRefs.targetAbout)}>About</button></a></li>
                  <li><a><button>Education</button></a></li>
                  <li><a><button>Project</button></a></li>
                  <li><a><button>Activity</button></a></li>
                  <li><a><button onClick={() => handleClick(targetRefs.targetGallery)}>Gallery</button></a></li>
                  <a href={resumeAmit}><button className='btn'>Download CV</button></a>
                </ul>
              </div>
            </div>
          </div>
          <div className={toggle}>
            <ul>
              <li><a><button onClick={() => handleClick(targetRefs.targetHome)}>Home</button></a></li>
              <li><a><button onClick={() => handleClick(targetRefs.targetAbout)}>About</button></a></li>
              <li><a><button>Education</button></a></li>
              <li><a><button>Project</button></a></li>
              <li><a><button>Activity</button></a></li>
              <li><a><button onClick={() => handleClick(targetRefs.targetGallery)}>Gallery</button></a></li>
              <a href={resumeAmit}><button className='btn'>Download CV</button></a>
            </ul>
          </div>
        </div>
      </section>
      {/* ------------------------ Navbar End ------------------------ */}

      {/* ------------------------ Banner Start ------------------------ */}

      <section ref={targetRefs.targetHome} className='banner'>
        <div className="container">
          <div className="banner_img">
            <div className="banner_title">
              <h2><TypeAnimation
                sequence={['MERN Full Stack Developer', 3000]}
              /></h2>
              <h1>Amit Roy</h1>
              <h3>React.js || MongoDB || Express.js || Node.js || React Native</h3>
              <button className='btn'>Explore Me</button><button onClick={() => handleClick(targetRefs.targetFooter)} className='btn'>Hire Me</button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------ Banner End ------------------------ */}
      {/* ------------------------ About Me Start ------------------------ */}

      <section ref={targetRefs.targetAbout} className='about'>
        <div className="container">
          <div className="about_img">
            <img className='amitroy2' src={amitroy2} alt="amitroy2" />
          </div>
          <div className="about_text">
            <h5>About Me</h5>
            <div className="para">
              <p>I am a highly motivated fresher with a strong passion for MERN full-stack web development, possessing  a comprehensive understanding of the MERN full stack, including MongoDB, Express.js, React.js, and Node.js. My skilled areas are HTML5, CSS3, and JavaScript with experience in RESTful API development and integration. I am ready to share knowledge and contribute to the growth and success of aspiring developers as a software engineer.</p>
              <p>I’m now preparing myself for MERN full-stack web development. My future goal is to make web applications more powerful with strong security.</p>
            </div>
            <h5>Hire Me</h5>
            <div className="icons">
              <a href="https://www.linkedin.com/in/amitroy98" target='_blank'><AiFillLinkedin className='linkedin icon' /></a>
              <a href="https://github.com/amitroy4" target='_blank'><AiFillGithub className='github icon' /></a>
              <a href="https://www.facebook.com/amitroy.ewu" target='_blank'><BsFacebook className='facebook icon' /></a>
              <a href="https://www.instagram.com/amit_roy8449" target='_blank'><AiFillInstagram className='instagram icon' /></a>
              <a href="https://wa.me/1521428527" target='_blank'><AiFillMessage className='message icon' /></a>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------ About Me End ------------------------ */}
      {/* ------------------------ Banner Start ------------------------ */}
      {/* ------------------------ Banner End ------------------------ */}
      {/* ------------------------ Gallery Start ------------------------ */}

      {/* <!-- =================================================
                    Mixitup Part Start
    ================================================= --> */}
      <div ref={targetRefs.targetGallery} className="mixitup">
        <div className="container">
          <div className="gallerybox">
            <h5>Gallery</h5>
            {isFullSize
              ? <div onClick={() => handleImgClick("")} className="fullimage">
                <img src={fullImage} alt="" />
              </div>
              : <div className="main">
                <div className="button">
                  <button type="button" data-filter="all">All</button>
                  <button type="button" data-filter=".category-a">Social Work</button>
                  <button type="button" data-filter=".category-b">Tour</button>
                  <button type="button" data-filter=".category-c">Hobby</button>
                </div>

                <div className="images">
                  <div onClick={() => handleImgClick("/images/gallery/u1.jpg")} className='mix ' data-order="1">
                    <img src="/images/gallery/u1.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/u2.jpg")} className='mix ' data-order="3">
                    <img src="/images/gallery/u2.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/u3.jpg")} className='mix ' data-order="8">
                    <img src="/images/gallery/u3.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/g1.png")} className='mix category-c' data-order="4">
                    <img src="/images/gallery/g1.png" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/g2.jpg")} className='mix category-c' data-order="6">
                    <img src="/images/gallery/g2.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/s2.jpg")} className='mix category-a' data-order="2">
                    <img src="/images/gallery/s2.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/s1.jpg")} className='mix category-a' data-order="5">
                    <img src="/images/gallery/s1.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/s4.jpg")} className='mix category-a' data-order="7">
                    <img src="/images/gallery/s4.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/s7.jpg")} className='mix category-a' data-order="14">
                    <img src="/images/gallery/s7.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/t1.jpg")} className='mix category-b' data-order="9">
                    <img src="/images/gallery/t1.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/t2.jpg")} className='mix category-b' data-order="13">
                    <img src="/images/gallery/t2.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/t3.jpg")} className='mix category-b' data-order="11">
                    <img src="/images/gallery/t3.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/t4.jpg")} className='mix category-b' data-order="12">
                    <img src="/images/gallery/t4.jpg" alt="" />
                  </div>
                  <div onClick={() => handleImgClick("/images/gallery/t5.JPG")} className='mix category-b' data-order="10">
                    <img src="/images/gallery/t5.JPG" alt="" />
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {/* <!-- =================================================
                    Mixitup Part End
    ================================================= --> */}
      {/* ------------------------ Gallery End ------------------------ */}
      {/* ------------------------ Footer Start ------------------------ */}

      <section ref={targetRefs.targetFooter} className='footer'>
        <div className="container">
          <div className="info">
            <h6>Get in Touch</h6>
            <div className="item">
              <BsFillPinMapFill className='icon' />
              <p>15/A1, Gopibagh 2nd Lane, Dhaka - 1000</p>
            </div>
            <div className="item">
              <AiOutlineMail className='icon' />
              <a href="mailto: amitroy98.ewu@gmail.com">amitroy98.ewu@gmail.com</a>
            </div>
            <div className="item">
              <BsFillTelephoneFill className='icon' />
              <p>+88 01521428527</p>
            </div>
            <h6 className='follow_me'>Follow Me</h6>
            <div className="icons">
              <a href="https://www.linkedin.com/in/amitroy98" target='_blank'><AiFillLinkedin className='linkedin icon' /></a>
              <a href="https://github.com/amitroy4" target='_blank'><AiFillGithub className='github icon' /></a>
              <a href="https://www.facebook.com/amitroy.ewu" target='_blank'><BsFacebook className='facebook icon' /></a>
              <a href="https://www.instagram.com/amit_roy8449" target='_blank'><AiFillInstagram className='instagram icon' /></a>
              <a href="https://wa.me/1521428527" target='_blank'><AiFillMessage className='message icon' /></a>
            </div>

          </div>
          <div className="msg">
            <h6>Message Me</h6>
            <form>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' value={name} />
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' value={email} />
              <textarea onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Message...' value={message} />
            </form>
            <div className='submit_part'>
              <button onClick={handleSubmit}>Submit</button>{submitMsg.includes("is")
                ? <p style={{ color: "#fb6944" }} >{submitMsg}</p>
                : <p>{submitMsg}</p>
              }
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2023. All rights reserved by Amit Roy</p>
        </div>
      </section >
      {/* ------------------------ Footer End ------------------------ */}
    </>
  )
}

export default App
