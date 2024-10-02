import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard5.module.css";

export type BlogPostCard5Type = {
  className?: string;
  image?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
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
  badgeFlex?: CSSProperties["flex"];
  badgeMinWidth?: CSSProperties["minWidth"];
  badgeBaseFlex1?: CSSProperties["flex"];
  textFlex1?: CSSProperties["flex"];
  badgeBaseFlex2?: CSSProperties["flex"];
  textFlex2?: CSSProperties["flex"];
  textDisplay1?: CSSProperties["display"];
  textMinWidth1?: CSSProperties["minWidth"];
};

const BlogPostCard5: FunctionComponent<BlogPostCard5Type> = ({
  className = "",
  propAlignSelf,
  image,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  authorAlignSelf,
  headingFlex,
  headingDisplay,
  iconWrapWidth,
  categoriesPadding,
  badgeBaseFlex,
  textFlex,
  textDisplay,
  textMinWidth,
  badgeFlex,
  badgeMinWidth,
  badgeBaseFlex1,
  textFlex1,
  badgeBaseFlex2,
  textFlex2,
  textDisplay1,
  textMinWidth1,
}) => {
  const blogPostCard2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading5Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: headingFlex,
      display: headingDisplay,
    };
  }, [propMinWidth, headingFlex, headingDisplay]);

  const text8Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      flex: textFlex1,
    };
  }, [propDisplay, propMinWidth1, textFlex1]);

  const author2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: authorAlignSelf,
    };
  }, [authorAlignSelf]);

  const iconWrap2Style: CSSProperties = useMemo(() => {
    return {
      width: iconWrapWidth,
    };
  }, [iconWrapWidth]);

  const categories2Style: CSSProperties = useMemo(() => {
    return {
      padding: categoriesPadding,
    };
  }, [categoriesPadding]);

  const badgeBase12Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeBaseFlex,
    };
  }, [badgeBaseFlex]);

  const text9Style: CSSProperties = useMemo(() => {
    return {
      flex: textFlex,
      display: textDisplay,
      minWidth: textMinWidth,
    };
  }, [textFlex, textDisplay, textMinWidth]);

  const badge9Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeFlex,
      minWidth: badgeMinWidth,
    };
  }, [badgeFlex, badgeMinWidth]);

  const badgeBase13Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeBaseFlex1,
    };
  }, [badgeBaseFlex1]);

  const badgeBase14Style: CSSProperties = useMemo(() => {
    return {
      flex: badgeBaseFlex2,
    };
  }, [badgeBaseFlex2]);

  const text10Style: CSSProperties = useMemo(() => {
    return {
      flex: textFlex2,
      display: textDisplay1,
      minWidth: textMinWidth1,
    };
  }, [textFlex2, textDisplay1, textMinWidth1]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCard2Style}
    >
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author} style={author2Style}>
            Sunday , 1 Jan 2023
          </div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading5Style}>
              Podcast: Creating a better CX Community
            </h2>
            <input
              className={styles.iconWrap}
              type="checkbox"
              style={iconWrap2Style}
            />
          </div>
          <div className={styles.supportingText}>
            Starting a community doesn’t need to be complicated, but how do you
            get started?
          </div>
        </div>
        <div className={styles.categories} style={categories2Style}>
          <div className={styles.badge}>
            <div className={styles.badgeBase} style={badgeBase12Style}>
              <div className={styles.text} style={text9Style}>
                Podcasts
              </div>
            </div>
          </div>
          <div className={styles.badge1} style={badge9Style}>
            <div className={styles.badgeBase1} style={badgeBase13Style}>
              <div className={styles.text1} style={text8Style}>
                Customer Success
              </div>
            </div>
          </div>
          <div className={styles.badge2}>
            <div className={styles.badgeBase2} style={badgeBase14Style}>
              <div className={styles.text2} style={text10Style}>
                Presentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard5;
