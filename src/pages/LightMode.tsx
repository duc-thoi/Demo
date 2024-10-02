import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import Section from "../components/Section";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./LightMode.module.css";

const LigthMode: FunctionComponent = () => {
  const navigate = useNavigate();

  const onToggleModeContainerClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  return (
    <div className={styles.ligthMode}>
      <section className={styles.header}>
        <header className={styles.navbar}>
          <a className={styles.yourName}>Your Name</a>
          <div className={styles.menu}>
            <div className={styles.blog}>
              <a className={styles.blog1}>Blog</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.blog1}>Projects</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.blog1}>About</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.newsletter1}>Newsletter</a>
            </div>
            <div
              className={styles.toggleMode}
              onClick={onToggleModeContainerClick}
            >
              <img
                className={styles.iconoutlinesun}
                loading="lazy"
                alt=""
                src="/iconoutlinesun1.svg"
              />
              <div className={styles.iconoutlinemoon}>
                <img className={styles.iconoutlinesun} loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.container}>
          <b className={styles.theBlog}>THE BLOG</b>
        </div>
      </section>
      <HeaderSection />
      <Section />
      <FrameComponent1 />
      <section className={styles.ligthModeInner}>
        <FrameComponent />
      </section>
      <section className={styles.footer}>
        <div className={styles.container1}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu1}>
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

export default LigthMode;
