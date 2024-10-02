import { FunctionComponent } from "react";
import BlogPostCard3 from "./BlogPostCard3";
import BlogPostCard6 from "./BlogPostCard6";
import BlogPostCard4 from "./BlogPostCard4";
import BlogPostCard5 from "./BlogPostCard5";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
};

const Column: FunctionComponent<ColumnType> = ({ className = "" }) => {
  return (
    <div className={[styles.column, className].join(" ")}>
      <h2 className={styles.heading}>Recent blog posts</h2>
      <BlogPostCard3
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image1@2x.png"
        propHeight="204px"
        heading="UX review presentations"
        propMinWidth1="unset"
        supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
        authorAlignSelf="unset"
        headingFlex="unset"
        headingDisplay="unset"
        iconWrapWidth="24px"
        categoriesPadding="unset"
        badgeBaseFlex="unset"
        textFlex="unset"
        textDisplay="unset"
        textMinWidth="unset"
        badgeBaseFlex1="unset"
        textFlex1="unset"
        textDisplay1="unset"
        textMinWidth1="unset"
        badgeFlex="unset"
        badgeMinWidth="unset"
        badgeBaseFlex2="unset"
        textFlex2="unset"
      />
      <div className={styles.blogPostCard}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image-11@2x.png"
        />
        <div className={styles.blogPostCard}>
          <div className={styles.headingAndText}>
            <div className={styles.author}>Sunday , 1 Jan 2023</div>
            <div className={styles.headingAndText1}>
              <div className={styles.heading1}>Migrating to Linear 101</div>
              <div className={styles.supportingText}>
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get...
              </div>
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.badge}>
              <div className={styles.badgeBase}>
                <div className={styles.text}>Design</div>
              </div>
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeBase1}>
                <div className={styles.text}>Research</div>
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
          src="/image-21@2x.png"
        />
        <div className={styles.blogPostCard}>
          <div className={styles.headingAndText}>
            <div className={styles.author}>Sunday , 1 Jan 2023</div>
            <div className={styles.headingAndText1}>
              <div className={styles.heading1}>Building your API Stack</div>
              <div className={styles.supportingText}>
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </div>
            </div>
          </div>
          <div className={styles.categories1}>
            <div className={styles.badge}>
              <div className={styles.badgeBase2}>
                <div className={styles.text}>Design</div>
              </div>
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeBase1}>
                <div className={styles.text}>Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogPostCard6 image="/image11@2x.png" />
      <BlogPostCard4
        propAlignSelf="stretch"
        image="/image-42@2x.png"
        heading="PM mental models"
        propMinWidth="unset"
        supportingText="Mental models are simple expressions of complex processes or relationships."
        propFlex="unset"
        propMinWidth1="unset"
        propBackgroundColor="#f0f9ff"
        text="Product"
        propColor="#026aa2"
        propBackgroundColor1="#eef4ff"
        text1="Research"
        propColor1="#3538cd"
        propDisplay="unset"
        propMinWidth2="unset"
        propFlex1="unset"
        propMinWidth3="unset"
        propBackgroundColor2="#fff6ed"
        text2="Frameworks"
        propColor2="#c4320a"
        authorAlignSelf="unset"
        headingFlex="unset"
        headingDisplay="unset"
        iconWrapWidth="24px"
        categoriesPadding="unset"
        badgeBaseFlex="unset"
        textFlex="unset"
        badgeBaseFlex1="unset"
        textFlex1="unset"
        badgeBaseFlex2="unset"
        textFlex2="unset"
      />
      <BlogPostCard3
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image-5@2x.png"
        propHeight="240px"
        heading="What is Wireframing?"
        propMinWidth1="unset"
        supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
        authorAlignSelf="unset"
        headingFlex="unset"
        headingDisplay="unset"
        iconWrapWidth="24px"
        categoriesPadding="unset"
        badgeBaseFlex="unset"
        textFlex="unset"
        textDisplay="unset"
        textMinWidth="unset"
        badgeBaseFlex1="unset"
        textFlex1="unset"
        textDisplay1="unset"
        textMinWidth1="unset"
        badgeFlex="unset"
        badgeMinWidth="unset"
        badgeBaseFlex2="unset"
        textFlex2="unset"
      />
      <BlogPostCard3
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image-6@2x.png"
        propHeight="240px"
        heading="How collaboration makes us better designers"
        propMinWidth1="unset"
        supportingText="Collaboration can make our teams stronger, and our individual designs better."
        authorAlignSelf="unset"
        headingFlex="unset"
        headingDisplay="unset"
        iconWrapWidth="24px"
        categoriesPadding="unset"
        badgeBaseFlex="unset"
        textFlex="unset"
        textDisplay="unset"
        textMinWidth="unset"
        badgeBaseFlex1="unset"
        textFlex1="unset"
        textDisplay1="unset"
        textMinWidth1="unset"
        badgeFlex="unset"
        badgeMinWidth="unset"
        badgeBaseFlex2="unset"
        textFlex2="unset"
      />
      <BlogPostCard4
        propAlignSelf="stretch"
        image="/image-7@2x.png"
        heading="Our top 10 Javascript frameworks to use"
        propMinWidth="unset"
        supportingText="JavaScript frameworks make development easy with extensive features and functionalities."
        propFlex="unset"
        propMinWidth1="unset"
        propBackgroundColor="#ecfdf3"
        text="Software Development"
        propColor="#037a48"
        propBackgroundColor1="#fdf2fa"
        text1="Tools"
        propColor1="#c11574"
        propDisplay="unset"
        propMinWidth2="unset"
        propFlex1="unset"
        propMinWidth3="unset"
        propBackgroundColor2="#fff1f3"
        text2="SaaS"
        propColor2="#c11048"
        authorAlignSelf="unset"
        headingFlex="unset"
        headingDisplay="unset"
        iconWrapWidth="24px"
        categoriesPadding="unset"
        badgeBaseFlex="unset"
        textFlex="unset"
        badgeBaseFlex1="unset"
        textFlex1="unset"
        badgeBaseFlex2="unset"
        textFlex2="unset"
      />
      <BlogPostCard5
        propAlignSelf="stretch"
        image="/image-8@2x.png"
        propMinWidth="unset"
        propDisplay="inline-block"
        propMinWidth1="126px"
        authorAlignSelf="unset"
        headingFlex="unset"
        headingDisplay="unset"
        iconWrapWidth="24px"
        categoriesPadding="unset"
        badgeBaseFlex="unset"
        textFlex="unset"
        textDisplay="unset"
        textMinWidth="unset"
        badgeFlex="unset"
        badgeMinWidth="unset"
        badgeBaseFlex1="unset"
        textFlex1="unset"
        badgeBaseFlex2="unset"
        textFlex2="unset"
        textDisplay1="unset"
        textMinWidth1="unset"
      />
      <div className={styles.blogPostCard}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
        <div className={styles.blogPostCard}>
          <div className={styles.headingAndText}>
            <div className={styles.author}>Sunday , 1 Jan 2023</div>
            <div className={styles.headingAndText1}>
              <div className={styles.heading1}>Building your API Stack</div>
              <div className={styles.supportingText}>
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </div>
            </div>
          </div>
          <div className={styles.categories1}>
            <div className={styles.badge}>
              <div className={styles.badgeBase2}>
                <div className={styles.text}>Design</div>
              </div>
            </div>
            <div className={styles.badge1}>
              <div className={styles.badgeBase1}>
                <div className={styles.text}>Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogPostCard6 image="/image11@2x.png" />
      <BlogPostCard4
        propAlignSelf="stretch"
        image="/image-42@2x.png"
        heading="PM mental models"
        propMinWidth="unset"
        supportingText="Mental models are simple expressions of complex processes or relationships."
        propFlex="unset"
        propMinWidth1="unset"
        propBackgroundColor="#f0f9ff"
        text="Product"
        propColor="#026aa2"
        propBackgroundColor1="#eef4ff"
        text1="Research"
        propColor1="#3538cd"
        propDisplay="unset"
        propMinWidth2="unset"
        propFlex1="unset"
        propMinWidth3="unset"
        propBackgroundColor2="#fff6ed"
        text2="Frameworks"
        propColor2="#c4320a"
        authorAlignSelf="unset"
        headingFlex="unset"
        headingDisplay="unset"
        iconWrapWidth="24px"
        categoriesPadding="unset"
        badgeBaseFlex="unset"
        textFlex="unset"
        badgeBaseFlex1="unset"
        textFlex1="unset"
        badgeBaseFlex2="unset"
        textFlex2="unset"
      />
    </div>
  );
};

export default Column;
