import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "more",
    src: "rain1.jpg",
  },
  {
    title: "details",
    src: "thaidiner1.jpg",
  },
  {
    title: "coming",
    src: "thaidiner2.jpg",
  },
  {
    title: "soon",
    src: "skateboard2.jpg",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <>
      <div ref={container} className={styles.projects}>
        <div className={styles.projectDescription}>
          <div ref={imageContainer} className={styles.imageContainer}>
            <Image
              src={`/images/${projects[selectedProject].src}`}
              fill={true}
              alt="project image"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
