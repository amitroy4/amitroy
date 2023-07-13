import './App.css'
import resumeAmit from '../public/pdf/resume_amit.pdf'
import amitroy2 from '/images/amitroy2.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillMessage, AiFillInstagram, AiOutlineMail, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFacebook, BsFillPinMapFill, BsFillTelephoneFill } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { TypeAnimation } from 'react-type-animation';
import firebaseConfig from '../firebaseconfig';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useEffect, useRef, useState } from 'react';
import MixItUp from 'mixitup';
import Slider from "react-slick";

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
    targetEducation: useRef(null),
    targetProject: useRef(null),
    targetActivity: useRef(null),
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

  var bannerSettings = {

    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    infinite: true,
    arrow: true,
  };
  var serviceSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

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
                  <li><a><button onClick={() => handleClick(targetRefs.targetEducation)}>Education</button></a></li>
                  <li><a><button onClick={() => handleClick(targetRefs.targetProject)}>Project</button></a></li>
                  <li><a><button onClick={() => handleClick(targetRefs.targetActivity)}>Activity</button></a></li>
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
              <li><a><button onClick={() => handleClick(targetRefs.targetEducation)}>Education</button></a></li>
              <li><a><button onClick={() => handleClick(targetRefs.targetProject)}>Project</button></a></li>
              <li><a><button onClick={() => handleClick(targetRefs.targetActivity)}>Activity</button></a></li>
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
              <button onClick={() => handleClick(targetRefs.targetProject)} className='btn'>Explore Me</button><button onClick={() => handleClick(targetRefs.targetFooter)} className='btn'>Hire Me</button>
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
              <p>I'm a tech enthusiast from Dhaka with a big vision. I love working with React JS, JavaScript, MongoDB, and more to create amazing web applications. What sets me apart is my unique perspective and attention to detail, which help me solve problems in creative ways. Outside of technology, I enjoy playing the guitar and have a passion for helping street children. </p>
              <p>I believe in the power of education, so I use my tech skills to provide them with learning opportunities. My goal is to make a positive impact on society by revolutionizing the tech industry and inspiring others to follow their passions.</p>
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
      {/* ------------------------ Education Start ------------------------ */}
      <section ref={targetRefs.targetEducation} className='education'>
        <div className="container">
          <div className="title_edu">
            <h2>Education</h2>
          </div>
          <div className="edu_box">
            <div className="edu_left">
              <div className="edu_design">
                <img src="/images/education/ewu.jpg" alt="" />
                <div className="text">
                  <h4>B.Sc. in CSE</h4>
                  <h6>(2017-2022) - Dhaka, Bangladesh</h6>
                  <h5>East West University</h5>
                  <p>A hub of academic excellence and diverse opportunities.</p>
                  <a href="https://www.ewubd.edu/" target='_blank'>To know more...</a>
                </div>
              </div>
              <div className="edu_design">
                <img src="/images/education/dcc.jpg" alt="" />
                <div className="text">
                  <h4>HSC in Science</h4>
                  <h6>(Batch - 2016) - Dhaka, Bangladesh</h6>
                  <h5>Dhaka City College</h5>
                  <p>It is a popular educational institution known for its quality teaching.</p>
                  <a href="https://www.dhakacitycollege.edu.bd/" target='_blank'>To know more...</a>
                </div>
              </div>
            </div>
            <div className="edu_middle"></div>
            <div className="edu_right">
              <div className="edu_design">
                <img src="/images/education/mgbhs.jpg" alt="" />
                <div className="text">
                  <h4>SSC in Science</h4>
                  <h6>(Batch - 2014) - Dhaka, Bangladesh</h6>
                  <h5>Motijheel Govt. Boys' High School</h5>
                  <p>An old and respected school, shaping young minds for years.</p>
                  <a href="http://www.mgbhs.edu.bd/" target='_blank'>To know more...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------ Education End ------------------------ */}
      {/* ------------------------ Project Start ------------------------ */}
      <section className='project'>
        <div className="container">
          <div className="bannerBox btncng">
            <h6 ref={targetRefs.targetProject}>My Projects</h6>
            <Slider className='banner3' {...bannerSettings}>
              <div className="imgBox">
                <img className="bannerImages" src="/images/profile/p1.png" alt="" />
                <h4>Alap Chatting Application</h4>
                <a href="https://aalap.netlify.app/" target='_blank'>Visit This Site..</a>
              </div>
              <div className="imgBox">
                <img className="bannerImages" src="/images/profile/p2.png" alt="" />
                <h4>Modern Calculator</h4>
                <a href="https://moder-calculator.netlify.app/" target='_blank'>Visit This Site..</a>
              </div>
              <div className="imgBox">
                <img className="bannerImages" src="/images/profile/p3.png" alt="" />
                <h4>BWFC Dynamic Page Design</h4>
                <a href="https://bwfc2202project.netlify.app/" target='_blank'>Visit This Site..</a>
              </div>
              <div className="imgBox">
                <img className="bannerImages" src="/images/profile/p1.png" alt="" />
                <h4>Alap Chatting Application</h4>
                <a href="https://aalap.netlify.app/" target='_blank'>Visit This Site..</a>
              </div>
              <div className="imgBox">
                <img className="bannerImages" src="/images/profile/p3.png" alt="" />
                <h4>BWFC Dynamic Page Design</h4>
                <a href="https://bwfc2202project.netlify.app/" target='_blank'>Visit This Site..</a>
              </div>
            </Slider>
          </div>
          <h6>EXPERT IN</h6>
          <div className="bannerBox btncng">
            <Slider className='banner4' {...serviceSettings}>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/3d.png" alt="" />
                <h6>Web Design</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/wd.png" alt="" />
                <h6>Web Development</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/robot.png" alt="" />
                <h6>UI/UX Figma Design</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/js.png" alt="" />
                <h6>Deep JavaScript</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/rj.png" alt="" />
                <h6>React js</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/aws.png" alt="" />
                <h6>Firebase</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/net.png" alt="" />
                <h6>MongoDB</h6>
              </div>
            </Slider>
            <div className="res900">
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/3d.png" alt="" />
                <h6>Web Design</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/wd.png" alt="" />
                <h6>Web Development</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/robot.png" alt="" />
                <h6>UI/UX Figma Design</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/js.png" alt="" />
                <h6>Deep JavaScript</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/rj.png" alt="" />
                <h6>React js</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/aws.png" alt="" />
                <h6>Firebase</h6>
              </div>
              <div className="imgBox">
                <img className="serviceImages" src="/images/service/net.png" alt="" />
                <h6>MongoDB</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------ Project End ------------------------ */}
      {/* ------------------------ Activity Start ------------------------ */}
      <section className='activity'>
        <div ref={targetRefs.targetActivity} className='education'>
          <div className="container">
            <div className="title_edu">
              <h2>Activity</h2>
            </div>
            <div className="edu_box">
              <div className="edu_left">
                <div className="edu_design">
                  <img src="/images/gallery/g1.png" alt="" />
                  <div className="text">
                    <h4>Guitar Playing</h4>
                    <h6>(2018-Continue) - Dhaka, Bangladesh</h6>
                    <h5>Jago Art Center</h5>
                    <p>I started playing the guitar in 2018 and have been learning from Jago Art Center. I'm currently in my third year of playing. This hobby helps me relax and brings me a lot of happiness. It allows me to express myself and be creative with music.</p>
                    <a href="https://www.facebook.com/Jagoartcentre/" target='_blank'>To know more...</a>
                  </div>
                </div>
              </div>
              <div className="edu_middle"></div>
              <div className="edu_right">
                <div className="edu_design">
                  <img src="/images/gallery/s2.jpg" alt="" />
                  <div className="text">
                    <h4>Social Work</h4>
                    <h6>(2015 - Continue) - Dhaka, Bangladesh</h6>
                    <h5>Bondhon Foundation</h5>
                    <p>As the president of Bondhon Foundation since its establishment in 2015, I have been leading efforts to support street children by providing them with food, clothing, shelter, education, and emotional assistance. Through our outreach programs and collaborations, we strive to break the cycle of poverty and create a brighter future for these vulnerable children.</p>
                    <a href="https://www.facebook.com/bondhonfoundationbd" target='_blank'>To know more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------ Activity End ------------------------ */}
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
