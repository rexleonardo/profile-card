import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";

import bgPatternCard from "../../public/images/bg-pattern-card.svg";
import profilePicture from "../../public/images/image-victor.jpg";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Image src={bgPatternCard} className={styles.coverPhoto} alt={""} />
      <div className={styles.contentContainer}>
        <Image
          src={profilePicture}
          className={styles.profilePicture}
          alt={""}
        />
        <div className={styles.nameAgeContainer}>
          <span className={styles.name}>Victor Crest</span>
          <span className={styles.age}>26</span>
        </div>
        <div className={styles.place}>London</div>
        <hr className={styles.divider} />
        <div className={styles.profileStatus}>
          <div className={styles.followers}>
            <span>80K</span>
            <span>Followers</span>
          </div>
          <div className={styles.likes}>
            <span>803K</span>
            <span>Likes</span>
          </div>
          <div className={styles.photos}>
            <span>1.4K</span>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
