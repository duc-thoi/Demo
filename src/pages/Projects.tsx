import { FunctionComponent } from "react";
import Main from "../components/Main";
import BlogPostCard8 from "../components/BlogPostCard8";
import styles from "./Projects.module.css";

const Projects: FunctionComponent = () => {
  return (
    <div className={styles.projects}>
      <Main />
      <main className={styles.frameParent}>
        <section className={styles.containerWrapper}>
          <div className={styles.container}>
            <h1 className={styles.projects1}>PROJECTS</h1>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container1}>
            <h2 className={styles.heading}>List Project</h2>
            <div className={styles.content}>
              <BlogPostCard8
                image="/image@2x.png"
                heading="User Experience Design Dashboard Hotel Management"
                supportingText="n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard."
                text="Research"
                text1="Presentation"
                showBadge
                showBadgeBase
              />
              <BlogPostCard8
                image="/image-1@2x.png"
                heading="Bring of User Experience Design to Policy Making, How to Impact Society"
                supportingText="User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec"
                text="Research"
                text1="Presentation"
                showBadge={false}
                showBadgeBase={false}
                propHeight="330px"
                propMinWidth="359px"
                propAlignSelf="stretch"
                propWidth="67px"
                propFlex="unset"
                propDisplay="unset"
                propMinWidth1="unset"
                propFlex1="unset"
                propFlex2="unset"
                propMinWidth2="unset"
                propMinWidth3="69px"
              />
            </div>
            <div className={styles.content1}>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.content2}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>
                      Olivia Rhye • 1 Jan 2023
                    </div>
                    <div className={styles.headingAndIcon}>
                      <h2
                        className={styles.heading1}
                      >{`UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons`}</h2>
                      <input className={styles.iconWrap} type="checkbox" />
                    </div>
                    <div className={styles.supportingText}>
                      There are many different design processes that can be
                      followed when creating a hotel management dashboard. Here
                      are some tips for bringing a design process to teams and
                      using data and inclusive collaboration to solve user
                      problems
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
                        <div className={styles.text1}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.text2}>Presentation</div>
                      </div>
                    </div>
                    <div className={styles.badge3}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text2}>Collaboration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <BlogPostCard8
                image="/image-3@2x.png"
                heading="Icon Package of Slin Icon"
                supportingText="An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design."
                text="Branding"
                text1="Identity"
                showBadge
                showBadgeBase
                propHeight="378px"
                propMinWidth="229px"
                propAlignSelf="unset"
                propWidth="unset"
                propFlex="1"
                propDisplay="inline-block"
                propMinWidth1="48px"
                propFlex1="1"
                propFlex2="1"
                propMinWidth2="53px"
                propMinWidth3="46px"
              />
              <BlogPostCard8
                image="/image-4@2x.png"
                heading="UX review presentations"
                supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
                text="Research"
                text1="Presentation"
                showBadge
                showBadgeBase
                propHeight="378px"
                propMinWidth="225px"
                propAlignSelf="unset"
                propWidth="unset"
                propFlex="1"
                propDisplay="inline-block"
                propMinWidth1="48px"
                propFlex1="1"
                propFlex2="unset"
                propMinWidth2="unset"
                propMinWidth3="69px"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container2}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu}>
            <h3 className={styles.twitter}>{`Twitter `}</h3>
            <h3 className={styles.linkedin}>LinkedIn</h3>
            <h3 className={styles.email}>Email</h3>
            <h3 className={styles.rssFeed}>RSS feed</h3>
            <h3 className={styles.addToFeedly}>Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
