import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBlogContainerClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onNewsletterContainerClick = useCallback(() => {
    navigate("/newsletter");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <div className={[styles.main, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a className={styles.yourName}>Your Name</a>
          <div className={styles.menu}>
            <div className={styles.blog} onClick={onBlogContainerClick}>
              <a className={styles.blog1}>Blog</a>
            </div>
            <div className={styles.projects}>
              <div className={styles.projectsWrapper}>
                <a className={styles.projects1}>Projects</a>
              </div>
            </div>
            <div className={styles.about}>
              <a className={styles.blog1}>About</a>
            </div>
            <div className={styles.blog} onClick={onNewsletterContainerClick}>
              <a className={styles.newsletter1}>Newsletter</a>
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
    </div>
  );
};

export default Main;
