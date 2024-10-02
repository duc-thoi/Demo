import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard3.module.css";

export type BlogPostCard3Type = {
  className?: string;
  image?: string;
  heading?: string;
  supportingText?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propMinWidth1?: CSSProperties["minWidth"];
  authorAlignSelf?: CSSProperties["alignSelf"];
  headingFlex?: CSSProperties["flex"];
  headingDisplay?: CSSProperties["display"];
  iconWrapWidth?: CSSProperties["width"];
  categoriesPadding?: CSSProperties["padding"];
  badgeBaseFlex?: CSSProperties["flex"];
  textFlex?: CSSProperties["flex"];
  textDisplay?: CSSProperties["display"];
  textMinWidth?: CSSProperties["minWidth"];
  badgeBaseFlex1?: CSSProperties["flex"];
  textFlex1?: CSSProperties["flex"];
  textDisplay1?: CSSProperties["display"];
  textMinWidth1?: CSSProperties["minWidth"];
  badgeFlex?: CSSProperties["flex"];
  badgeMinWidth?: CSSProperties["minWidth"];
  badgeBaseFlex2?: CSSProperties["flex"];
  textFlex2?: CSSProperties["flex"];
};

const BlogPostCard3: FunctionComponent<BlogPostCard3Type> = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
  image,
  propHeight,
  heading,
  propMinWidth1,
  supportingText,
  authorAlignSelf,
  headingFlex,
  headingDisplay,
  iconWrapWidth,
  categoriesPadding,
  badgeBaseFlex,
  textFlex,
  textDisplay,
  textMinWidth,
  badgeBaseFlex1,
  textFlex1,
  textDisplay1,
  textMinWidth1,
  badgeFlex,
  badgeMinWidth,
  badgeBaseFlex2,
  textFlex2,
}) => {
  const blogPostCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const imageIcon1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const heading3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      flex: headingFlex,
      display: headingDisplay,
    };
  }, [propMinWidth1, headingFlex, headingDisplay]);

  const authorStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: authorAlignSelf,
    };
  }, [authorAlignSelf]);

  const iconWrapStyle: CSSProperties = useMemo(() => {
    return {
      width: iconWrapWidth,
    };
  }, [iconWrapWidth]);

  const categoriesStyle: CSSProperties = useMemo(() => {
    return {
      padding: categoriesPadding,
    };
  }, [categoriesPadding]);

  const badgeBase5Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeBaseFlex,
    };
  }, [badgeBaseFlex]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      flex: textFlex,
      display: textDisplay,
      minWidth: textMinWidth,
    };
  }, [textFlex, textDisplay, textMinWidth]);

  const badgeBase6Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeBaseFlex1,
    };
  }, [badgeBaseFlex1]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      flex: textFlex1,
      display: textDisplay1,
      minWidth: textMinWidth1,
    };
  }, [textFlex1, textDisplay1, textMinWidth1]);

  const badge6Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeFlex,
      minWidth: badgeMinWidth,
    };
  }, [badgeFlex, badgeMinWidth]);

  const badgeBase7Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeBaseFlex2,
    };
  }, [badgeBaseFlex2]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      flex: textFlex2,
    };
  }, [textFlex2]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCardStyle}
    >
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src={image}
        style={imageIcon1Style}
      />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author} style={authorStyle}>
            Sunday , 1 Jan 2023
          </div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading3Style}>
              {heading}
            </h2>
            <input
              className={styles.iconWrap}
              type="checkbox"
              style={iconWrapStyle}
            />
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.categories} style={categoriesStyle}>
          <div className={styles.badge}>
            <div className={styles.badgeBase} style={badgeBase5Style}>
              <div className={styles.text} style={text1Style}>
                Design
              </div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1} style={badgeBase6Style}>
              <div className={styles.text1} style={text2Style}>
                Research
              </div>
            </div>
          </div>
          <div className={styles.badge2} style={badge6Style}>
            <div className={styles.badgeBase2} style={badgeBase7Style}>
              <div className={styles.text2} style={text3Style}>
                Presentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard3;
