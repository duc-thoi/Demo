import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;

  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  hintTextAlignSelf?: CSSProperties["alignSelf"];
  buttonBaseHeight?: CSSProperties["height"];
  buttonBaseFlex?: CSSProperties["flex"];
  textDisplay?: CSSProperties["display"];
  textMinWidth?: CSSProperties["minWidth"];
};

const Content: FunctionComponent<ContentType> = ({
  className = "",
  propFlexWrap,
  propFlex,
  propWidth,
  hintTextAlignSelf,
  buttonBaseHeight,
  buttonBaseFlex,
  textDisplay,
  textMinWidth,
}) => {
  const emailCaptureStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const hintTextStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: hintTextAlignSelf,
    };
  }, [hintTextAlignSelf]);

  const buttonBaseStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonBaseHeight,
      flex: buttonBaseFlex,
    };
  }, [buttonBaseHeight, buttonBaseFlex]);

  const buttonLabelStyle: CSSProperties = useMemo(() => {
    return {
      display: textDisplay,
      minWidth: textMinWidth,
    };
  }, [textDisplay, textMinWidth]);

  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.headingAndSupportingText}>
        <div className={styles.headingAndSubheading}>
          <div className={styles.subheading}>Newlatters</div>
          <h1 className={styles.heading}>Stories and interviews</h1>
        </div>
        <h3 className={styles.supportingText}>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </h3>
      </div>
      <div className={styles.emailCapture} style={emailCaptureStyle}>
        <div className={styles.inputField} style={inputFieldStyle}>
          <div className={styles.inputFieldBase}>
            <div className={styles.inputWithLabel}>
              <div className={styles.label}>Email</div>
              <div className={styles.input}>
                <input
                  className={styles.content1}
                  placeholder="Enter your email"
                  type="text"
                />
                <img className={styles.helpIcon} alt="" src="/help-icon.svg" />
              </div>
            </div>
            <div className={styles.hintText} style={hintTextStyle}>
              {`We care about your data in our `}
              <span className={styles.privacyPolicy}>privacy policy</span>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.buttonBase} style={buttonBaseStyle}>
            <div className={styles.buttonLabel} style={buttonLabelStyle}>
              Subscribe
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Content;
