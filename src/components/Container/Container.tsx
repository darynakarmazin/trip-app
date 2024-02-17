import { ContainerProps } from "../../types/containerType";
import styles from "./Container.module.css";

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
