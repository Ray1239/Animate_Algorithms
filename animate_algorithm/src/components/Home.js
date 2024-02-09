import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "framer-motion";
import ReactTyped from "react-typed";
import './Home.css';

const images = [
  process.env.PUBLIC_URL + "assets/SlideShow/maze.png",
  process.env.PUBLIC_URL + "assets/SlideShow/rectangle.png"
];

const titles = [
  "Back-Tracking Algorithm",
  "Searching Algorithm"
];

// const variantsOfTitles = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       staggerChildren: 0.08,
//     },
//   },
// }

// const letter = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
// }

const variantsOfImages = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return{
      zIndex: 0,
      x: direction < 0 ? 1000 : -1,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Home = ({ theme }) => {
  const [bg, setBg] = useState("lightBg");
  const [[page, direction], setPage] = useState([0, 0]);
  const typedRef = useRef(null);
  
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (theme === 1) {
      setBg("darkBg");
    } else {
      setBg("lightBg");
    }
  }, [theme]);

  useEffect(() => {
    const paginate = (newDirection) => {
      setPage([page + newDirection, newDirection]);
    };

    const interval = setInterval(() => {
      paginate(1); // Automatically swipe to the next slide after 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount

  }, [page]); // Trigger the effect whenever the page changes

  // const handleTypingPaused = () => {
  //   typedRef.current.strings = [titles[imageIndex]]; // Change the strings to be typed based on the current slide title
  //   typedRef.current.start(); // Restart the typing animation
  // };

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: titles[imageIndex], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, [imageIndex]);

  return (
    <>
      <div className={bg + " intro-div"}>
        <div className="intro">
          <h1>Algomerse</h1>
          <p>            
            Dive into the world of algorithms with our interactive platform designed to educate and inspire.
            Start your journey today and unlock the secrets of computer science!
          </p>
        </div>
        <div className="slideShow">
          <div className="imagesCont">
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variantsOfImages}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 25 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
              {"‣"}
            </div>
          </div>
          <div className="typed-container">
            <AnimatePresence mode="wait">
              <motion.h4
                key={titles[imageIndex]} // Change the key to re-render the component when the title changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReactTyped
                  strings={[titles[imageIndex]]}
                  typeSpeed={40}
                  backSpeed={50}
                  ref={typedRef}
                />
              </motion.h4>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
