import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard4.module.css";

export type BlogPostCard4Type = {
  className?: string;
  image?: string;
  heading?: string;
  supportingText?: string;
  text?: string;
  text1?: string;
  text2?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth3?: CSSProperties["minWidth"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor2?: CSSProperties["color"];
  authorAlignSelf?: CSSProperties["alignSelf"];
  headingFlex?: CSSProperties["flex"];
  headingDisplay?: CSSProperties["display"];
  iconWrapWidth?: CSSProperties["width"];
  categoriesPadding?: CSSProperties["padding"];
  badgeBaseFlex?: CSSProperties["flex"];
  textFlex?: CSSProperties["flex"];
  badgeBaseFlex1?: CSSProperties["flex"];
  textFlex1?: CSSProperties["flex"];
  badgeBaseFlex2?: CSSProperties["flex"];
  textFlex2?: CSSProperties["flex"];
};

const BlogPostCard4: FunctionComponent<BlogPostCard4Type> = ({
  className = "",
  propAlignSelf,
  image,
  heading,
  propMinWidth,
  supportingText,
  propFlex,
  propMinWidth1,
  propBackgroundColor,
  text,
  propColor,
  propBackgroundColor1,
  text1,
  propColor1,
  propDisplay,
  propMinWidth2,
  propFlex1,
  propMinWidth3,
  propBackgroundColor2,
  text2,
  propColor2,
  authorAlignSelf,
  headingFlex,
  headingDisplay,
  iconWrapWidth,
  categoriesPadding,
  badgeBaseFlex,
  textFlex,
  badgeBaseFlex1,
  textFlex1,
  badgeBaseFlex2,
  textFlex2,
}) => {
  const blogPostCard1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: headingFlex,
      display: headingDisplay,
    };
  }, [propMinWidth, headingFlex, headingDisplay]);

  const badge7Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propMinWidth1]);

  const badgeBase9Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      flex: badgeBaseFlex,
    };
  }, [propBackgroundColor, badgeBaseFlex]);

  const text5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      flex: textFlex,
    };
  }, [propColor, textFlex]);

  const badgeBase10Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      flex: badgeBaseFlex1,
    };
  }, [propBackgroundColor1, badgeBaseFlex1]);

  const text6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      display: propDisplay,
      minWidth: propMinWidth2,
      flex: textFlex1,
    };
  }, [propColor1, propDisplay, propMinWidth2, textFlex1]);

  const badge8Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth3,
    };
  }, [propFlex1, propMinWidth3]);

  const badgeBase11Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      flex: badgeBaseFlex2,
    };
  }, [propBackgroundColor2, badgeBaseFlex2]);

  const text7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
      flex: textFlex2,
    };
  }, [propColor2, textFlex2]);

  const author1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: authorAlignSelf,
    };
  }, [authorAlignSelf]);

  const iconWrap1Style: CSSProperties = useMemo(() => {
    return {
      width: iconWrapWidth,
    };
  }, [iconWrapWidth]);

  const categories1Style: CSSProperties = useMemo(() => {
    return {
      padding: categoriesPadding,
    };
  }, [categoriesPadding]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCard1Style}
    >
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author} style={author1Style}>
            Sunday , 1 Jan 2023
          </div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading4Style}>
              {heading}
            </h2>
            <input
              className={styles.iconWrap}
              type="checkbox"
              style={iconWrap1Style}
            />
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.categories} style={categories1Style}>
          <div className={styles.badge} style={badge7Style}>
            <div className={styles.badgeBase} style={badgeBase9Style}>
              <div className={styles.text} style={text5Style}>
                {text}
              </div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1} style={badgeBase10Style}>
              <div className={styles.text1} style={text6Style}>
                {text1}
              </div>
            </div>
          </div>
          <div className={styles.badge2} style={badge8Style}>
            <div className={styles.badgeBase2} style={badgeBase11Style}>
              <div className={styles.text} style={text7Style}>
                {text2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard4;
