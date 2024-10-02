import { FunctionComponent } from "react";
import BlogPostCard7 from "./BlogPostCard7";
import styles from "./Section3.module.css";

export type Section3Type = {
  className?: string;
};

const Section3: FunctionComponent<Section3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.headingAndContent}>
          <h2 className={styles.heading}>All blog posts</h2>
          <div className={styles.content}>
            <div className={styles.row}>
              <BlogPostCard7 image="/image-41@2x.png" />
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image-51@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>PM mental models</h2>
                      <input className={styles.iconWrap} type="checkbox" />
                    </div>
                    <div className={styles.supportingText}>
                      Mental models are simple expressions of complex processes
                      or relationships.
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text1}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.text}>Frameworks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image-61@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading2}>What is Wireframing?</h2>
                      <input className={styles.iconWrap} type="checkbox" />
                    </div>
                    <div className={styles.supportingText}>
                      Introduction to Wireframing and its Principles. Learn from
                      the best in the industry.
                    </div>
                  </div>
                  <div className={styles.categories1}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase3}>
                        <div className={styles.text3}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text1}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge5}>
                      <div className={styles.badgeBase5}>
                        <div className={styles.text}>Presentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
