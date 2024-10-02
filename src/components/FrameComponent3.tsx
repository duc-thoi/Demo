import { FunctionComponent } from "react";
import BlogPostCard7 from "./BlogPostCard7";
import BlogPostCard4 from "./BlogPostCard4";
import BlogPostCard3 from "./BlogPostCard3";
import BlogPostCard5 from "./BlogPostCard5";
import Pagination from "./Pagination";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headingAndContentParent, className].join(" ")}>
      <div className={styles.headingAndContent}>
        <h2 className={styles.heading}>All blog posts</h2>
        <div className={styles.content}>
          <div className={styles.row}>
            <BlogPostCard7 image="/image-41@2x.png" />
            <BlogPostCard4
              image="/image-51@2x.png"
              heading="PM mental models"
              supportingText="Mental models are simple expressions of complex processes or relationships."
              text="Product"
              text1="Research"
              text2="Frameworks"
            />
            <BlogPostCard3
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="unset"
              image="/image-61@2x.png"
              propHeight="240px"
              heading="What is Wireframing?"
              propMinWidth1="198px"
              supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
              authorAlignSelf="stretch"
              headingFlex="1"
              headingDisplay="inline-block"
              iconWrapWidth="24px"
              categoriesPadding="0px 112px 0px 0px"
              badgeBaseFlex="1"
              textFlex="1"
              textDisplay="inline-block"
              textMinWidth="48px"
              badgeBaseFlex1="1"
              textFlex1="1"
              textDisplay1="inline-block"
              textMinWidth1="64px"
              badgeFlex="1"
              badgeMinWidth="69px"
              badgeBaseFlex2="1"
              textFlex2="1"
            />
          </div>
          <div className={styles.row}>
            <BlogPostCard3
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="unset"
              image="/image-71@2x.png"
              propHeight="240px"
              heading="How collaboration makes us better designers"
              propMinWidth1="224px"
              supportingText="Collaboration can make our teams stronger, and our individual designs better."
              authorAlignSelf="stretch"
              headingFlex="1"
              headingDisplay="inline-block"
              iconWrapWidth="24px"
              categoriesPadding="0px 112px 0px 0px"
              badgeBaseFlex="1"
              textFlex="1"
              textDisplay="inline-block"
              textMinWidth="48px"
              badgeBaseFlex1="1"
              textFlex1="1"
              textDisplay1="inline-block"
              textMinWidth1="64px"
              badgeFlex="1"
              badgeMinWidth="69px"
              badgeBaseFlex2="1"
              textFlex2="1"
            />
            <BlogPostCard4
              propAlignSelf="unset"
              image="/image-81@2x.png"
              heading="Our top 10 Javascript frameworks to use"
              propMinWidth="197px"
              supportingText="JavaScript frameworks make development easy with extensive features and functionalities."
              propFlex="1"
              propMinWidth1="113px"
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
              authorAlignSelf="stretch"
              headingFlex="1"
              headingDisplay="inline-block"
              iconWrapWidth="24px"
              categoriesPadding="0px 84px 0px 0px"
              badgeBaseFlex="1"
              textFlex="1"
              badgeBaseFlex1="1"
              textFlex1="1"
              badgeBaseFlex2="1"
              textFlex2="1"
            />
            <BlogPostCard5 image="/image-9@2x.png" />
          </div>
        </div>
      </div>
      <Pagination
        propBorderTop="1px solid rgba(234, 236, 240, 0.34)"
        arrowLeft="/arrowleft1.svg"
        propColor="#efefef"
        propColor1="#112211"
        propColor2="#efefef"
        propColor3="#efefef"
        propColor4="#efefef"
        propColor5="#efefef"
        propColor6="#efefef"
        propColor7="#efefef"
        propColor8="#efefef"
        arrowRight="/arrowright1.svg"
      />
    </div>
  );
};

export default FrameComponent3;
