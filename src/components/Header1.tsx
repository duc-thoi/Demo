import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBlogContainerClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onProjectsContainerClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.navbar}>
        <a className={styles.yourName}>Your Name</a>
        <div className={styles.menu}>
          <div className={styles.blog} onClick={onBlogContainerClick}>
            <a className={styles.blog1}>Blog</a>
          </div>
          <div className={styles.projects} onClick={onProjectsContainerClick}>
            <div className={styles.projectsWrapper}>
              <a className={styles.blog1}>Projects</a>
            </div>
          </div>
          <div className={styles.about}>
            <a className={styles.blog1}>About</a>
          </div>
          <div className={styles.newsletter}>
            <div className={styles.newsletterWrapper}>
              <a className={styles.newsletter1}>Newsletter</a>
            </div>
          </div>
          <div className={styles.toggleMode}>
            <img
              className={styles.iconoutlinesun}
              loading="lazy"
              alt=""
              src="/iconoutlinesun.svg"
            />
            <div
              className={styles.iconoutlinemoon}
              onClick={onIconoutlinemoonContainerClick}
            >
              <img
                className={styles.moonIcon}
                loading="lazy"
                alt=""
                src="/moon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
