import { FunctionComponent } from "react";
import BlogPostCard3 from "./BlogPostCard3";
import BlogPostCard2 from "./BlogPostCard2";
import styles from "./Section1.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Recent blog posts</h2>
        <div className={styles.content}>
          <BlogPostCard3
            image="/image12@2x.png"
            heading="UX review presentations"
            supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
          />
          <div className={styles.column}>
            <BlogPostCard2
              image="/image-111@2x.png"
              heading="Migrating to Linear 101"
              supportingText="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
            />
            <BlogPostCard2
              image="/image-22@2x.png"
              heading="Building your API Stack"
              supportingText="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
              propBackgroundColor="#ecfdf3"
              propColor="#037a48"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
