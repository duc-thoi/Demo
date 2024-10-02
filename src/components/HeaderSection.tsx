import { FunctionComponent } from "react";
import styles from "./HeaderSection.module.css";

export type HeaderSectionType = {
  className?: string;
};

const HeaderSection: FunctionComponent<HeaderSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headerSection, className].join(" ")}>
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
                      <img className={styles.mailIcon} alt="" src="/mail.svg" />
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
  );
};

export default HeaderSection;
