import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard2.module.css";

export type BlogPostCard2Type = {
  className?: string;
  image?: string;
  heading?: string;
  supportingText?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const BlogPostCard2: FunctionComponent<BlogPostCard2Type> = ({
  className = "",
  image,
  heading,
  supportingText,
  propBackgroundColor,
  propColor,
}) => {
  const badgeBase8Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const text4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>Sunday , 1 Jan 2023</div>
          <div className={styles.headingAndText1}>
            <div className={styles.heading}>{heading}</div>
            <div className={styles.supportingText}>{supportingText}</div>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge}>
            <div className={styles.badgeBase} style={badgeBase8Style}>
              <div className={styles.text} style={text4Style}>
                Design
              </div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1}>
              <div className={styles.text1}>Research</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard2;
