import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import amitroy2 from '/images/amitroy2.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillMessage, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';





function App() {

  return (
    <>
      {/* ------------------------ Navbar Start ------------------------ */}
      <section className='navbar'>
        <div className="container">
          <div className="box">
            <div className="logo">
              Amit Roy
            </div>
            <div className="menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Home</a></li>
                <button className='btn'>Download CV</button>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------ Navbar End ------------------------ */}

      {/* ------------------------ Banner Start ------------------------ */}

      <section className='banner'>
        <div className="container">
          <div className="banner_img">
            <div className="banner_title">
              <h2><TypeAnimation
                sequence={['MERN Full Stack Developer', 3000]}
              /></h2>
              <h1>Amit Roy</h1>
              <h3>React.js || MongoDB || Express.js || Node.js || React Native</h3>
              <button className='btn'>Explore Me</button><button className='btn'>Hire Me</button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------ Banner End ------------------------ */}
      {/* ------------------------ About Me Start ------------------------ */}

      <section className='about'>
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
              <a href="#" target='_blank'><AiFillMessage className='message icon' /></a>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------ About Me End ------------------------ */}
      {/* ------------------------ Banner Start ------------------------ */}
      {/* ------------------------ Banner End ------------------------ */}
      {/* ------------------------ Navbar Start ------------------------ */}
      {/* ------------------------ Navbar End ------------------------ */}
    </>
  )
}

export default App
