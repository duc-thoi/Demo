import { FunctionComponent } from "react";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./DarkMode.module.css";

const DarkMode: FunctionComponent = () => {
  return (
    <div className={styles.darkMode}>
      <div className={styles.headerSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headingAndSupportingText}>
              <div className={styles.headingAndSubheading}>
                <div className={styles.subheading}>Our blog</div>
                <div className={styles.heading}>Stories and interviews</div>
              </div>
              <div className={styles.supportingText}>
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </div>
            </div>
            <div className={styles.emailCapture}>
              <div className={styles.inputField}>
                <div className={styles.inputFieldBase}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.label}>Email</div>
                    <div className={styles.input}>
                      <div className={styles.content1}>
                        <img
                          className={styles.mailIcon}
                          alt=""
                          src="/mail.svg"
                        />
                        <div className={styles.text}>Enter your email</div>
                      </div>
                      <img
                        className={styles.helpIcon}
                        alt=""
                        src="/help-icon.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.hintText}>
                    {`We care about your data in our `}
                    <span className={styles.privacyPolicy}>privacy policy</span>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <div className={styles.text1}>Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <main className={styles.frameParent}>
        <section className={styles.containerWrapper}>
          <div className={styles.container1}>
            <b className={styles.theBlog}>THE BLOG</b>
          </div>
        </section>
        <Section1 />
        <FrameComponent2 frameDivPosition="unset" frameDivAlignSelf="stretch" />
        <section className={styles.frameWrapper}>
          <FrameComponent3 />
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container2}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu}>
            <h3 className={styles.twitter}>{`Twitter `}</h3>
            <h3 className={styles.linkedin}>LinkedIn</h3>
            <h3 className={styles.email}>Email</h3>
            <h3 className={styles.rssFeed}>RSS feed</h3>
            <h3 className={styles.addToFeedly}>Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkMode;
