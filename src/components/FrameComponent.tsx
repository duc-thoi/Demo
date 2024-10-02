import { FunctionComponent } from "react";
import HeadingAndContent from "./HeadingAndContent";
import Pagination from "./Pagination";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headingAndContentParent, className].join(" ")}>
      <HeadingAndContent />
      <Pagination arrowLeft="/arrowleft.svg" arrowRight="/arrowright.svg" />
    </div>
  );
};

export default FrameComponent;
