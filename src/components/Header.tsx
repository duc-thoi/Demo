import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProjectsContainerClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onNewsletterContainerClick = useCallback(() => {
    navigate("/newsletter");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.navbar}>
        <a className={styles.yourName}>Your Name</a>
        <div className={styles.menu}>
          <div className={styles.blog}>
            <div className={styles.blogContainer}>
              <a className={styles.blog1}>Blog</a>
            </div>
          </div>
          <div className={styles.projects} onClick={onProjectsContainerClick}>
            <a className={styles.projects1}>Projects</a>
          </div>
          <div className={styles.about}>
            <a className={styles.projects1}>About</a>
          </div>
          <div className={styles.projects} onClick={onNewsletterContainerClick}>
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
  );
};

export default Header;
