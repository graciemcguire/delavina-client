import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function index() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
        // markers: true,
      },
    });

    timeline
      .from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          src={"/images/maxresdefault.jpg"}
          fill={true}
          alt="background image"
        />
      </div>

      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed=".3"
          className={styles.introImage}
        >
          <Image
            src={"/images/intro-image.jpg"}
            fill={true}
            alt="intro image"
          />
        </div>
        <h1 data-scroll data-scroll-speed=".7">
          Save the Date
        </h1>
      </div>
    </div>
  );
}
