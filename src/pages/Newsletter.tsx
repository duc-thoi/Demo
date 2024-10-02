import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import styles from "./Newsletter.module.css";

const Newsletter: FunctionComponent = () => {
  return (
    <div className={styles.newsletter}>
      <Header1 />
      <Section2 />
      <Section3 />
      <section className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu}>
            <h3 className={styles.twitter}>{`Twitter `}</h3>
            <h3 className={styles.linkedin}>LinkedIn</h3>
            <h3 className={styles.email}>Email</h3>
            <h3 className={styles.rssFeed}>RSS feed</h3>
            <h3 className={styles.addToFeedly}>Add to Feedly</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
