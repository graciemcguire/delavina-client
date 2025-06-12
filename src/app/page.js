"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Pages from "../components/Pages";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        smartphone: {
          smooth: true,
          breakpoint: 768,
        },
        tablet: {
          smooth: true,
        },
      });
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Pages />
    </main>
  );
}
