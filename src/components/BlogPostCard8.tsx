import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard8.module.css";

export type BlogPostCard8Type = {
  className?: string;
  image?: string;
  heading?: string;
  supportingText?: string;
  text?: string;
  text1?: string;
  showBadge?: boolean;
  showBadgeBase?: boolean;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propFlex2?: CSSProperties["flex"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
};

const BlogPostCard8: FunctionComponent<BlogPostCard8Type> = ({
  className = "",
  image,
  heading,
  supportingText,
  text,
  text1,
  showBadge,
  showBadgeBase,
  propHeight,
  propMinWidth,
  propAlignSelf,
  propWidth,
  propFlex,
  propDisplay,
  propMinWidth1,
  propFlex1,
  propFlex2,
  propMinWidth2,
  propMinWidth3,
}) => {
  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const badgeBaseStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      flex: propFlex1,
    };
  }, [propDisplay, propMinWidth1, propFlex1]);

  const badge1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
      minWidth: propMinWidth2,
    };
  }, [propFlex2, propMinWidth2]);

  const badge2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>Olivia Rhye • 1 Jan 2023</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={headingStyle}>
              {heading}
            </h2>
            <input className={styles.iconWrap} type="checkbox" />
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.categories}>
          {showBadge && (
            <div className={styles.badge} style={badgeStyle}>
              {showBadgeBase && (
                <div className={styles.badgeBase} style={badgeBaseStyle}>
                  <div className={styles.text} style={textStyle}>
                    Design
                  </div>
                </div>
              )}
            </div>
          )}
          <div className={styles.badge1} style={badge1Style}>
            <div className={styles.badgeBase1}>
              <div className={styles.text1}>{text}</div>
            </div>
          </div>
          <div className={styles.badge2} style={badge2Style}>
            <div className={styles.badgeBase2}>
              <div className={styles.text2}>{text1}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard8;
