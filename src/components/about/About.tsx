import Link from "next/link";
import styles from "./about.module.css";
import mapSnapshot from "@/../public/locationSnapshot.svg";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.general}>
            <h2>Destock</h2>
            <p>
              Morbi cursus porttitor enim lobortis molestie. <br />
              Duis gravida turpis dui, eget bibendum magna <br /> congue nec.
            </p>
            <p className={styles.contact}>
              <span className={styles.phoneNumber}>(219) 555-0114</span>{" "}
              <span style={{ color: "#808080" }}>or</span>{" "}
              <span className={styles.email}>gmail@gmail.com</span>
            </p>
          </div>
          <div className={styles.categories}>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link href="/products/alimentation?page=1">Alimentation</Link>
              </li>
              <li>
                <Link href="/products/boissons?page=1">Boissons</Link>
              </li>
              <li>
                <Link href="/products/emballage?page=1">Emballage</Link>
              </li>
            </ul>
          </div>
        </div>
        <img className={styles.mapSnapshot} src={mapSnapshot.src} alt="map" />
      </div>
      <div className={styles.bottom}>
        <p>Destock © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default About;
