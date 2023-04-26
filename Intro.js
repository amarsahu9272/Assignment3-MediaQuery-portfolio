import * as React from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import FloatinDiv from './FloatingDiv';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hey! I Am</span>
          <span>Amar Sahu</span>
          <span>
            Frontend Developer with basic of experience in web designing and
            development, producting the Quality work I'm typically use HTML,
            CSS, and JavaScript to build the UI, and may also work with
            frameworks such as React, also responsible for ensuring the website
            or application is optimized for speed, accessibility, and usability.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Get Started</button>
        </Link>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img
          src="http://localhost:3000/static/media/Vector2.28db5bfd58081dd1df1b.png"
          alt=""
        />
        <img
          src="http://localhost:3000/static/media/boy.5ca4b670a32b71681d2c1.png"
          alt=""
        />
        <img
          src="http://localhost:3000/static/media/boy.5ca4b670a32b71681d2c.png"
          alt=""
        />
        {/* animation */}
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src="http://localhost:3000/static/media/glassesimoji.a08bdab12e8eb56a6874.png"
          alt=""
        />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
            img="http://localhost:3000/static/media/crown.dbe416beae9b49b842ab.png"
            text1="Web"
            text2="Developer"
          />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
            img="http://localhost:3000/static/media/thumbup.e06790ba656f0397cbe5.png"
            text1="UI "
            text2="Design"
          />
        </motion.div>

        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
