import styles from "./style.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Description from "../Description";

export default function MobileIntro() {
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(overlayRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top top",
        end: "bottom+=100 top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={styles.mobileIntro}>
      <div className={styles.background}>
        <Image
          src="/images/skateboard1.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className={styles.overlay} ref={overlayRef}>
        <Image src="/images/train1.jpg" alt="Train" width={300} height={400} />
        <div className={styles.logoWrapper}>
          <Image
            src="/images/name_graphic.svg"
            alt="Gracie & Antonia"
            width={500}
            height={300}
            priority
          />
        </div>
        {/* 			
        <Image
          src="/images/name_graphic.svg"
          alt="Gracie & Antonia"
          width={500}
          height={300}
        /> */}
      </div>

      <div className={styles.descriptionContainer}>
        <Description />
      </div>
    </div>
  );
}
