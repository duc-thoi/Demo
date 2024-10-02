import { FunctionComponent } from "react";
import Content from "./Content";
import styles from "./Section2.module.css";

export type Section2Type = {
  className?: string;
};

const Section2: FunctionComponent<Section2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <Content
          propFlexWrap="wrap"
          propFlex="1"
          propWidth="unset"
          hintTextAlignSelf="stretch"
          buttonBaseHeight="48px"
          buttonBaseFlex="1"
          textDisplay="inline-block"
          textMinWidth="79px"
        />
      </div>
    </section>
  );
};

export default Section2;
