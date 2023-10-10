import React from "react";
import styles from "./Content.module.css";
import { IFormState } from "../ClassForm/ClassForm";

interface IContentProps extends IFormState {}

class Content extends React.Component<IContentProps> {
  render() {
    const { inputValue, count } = this.props;
    return (
      <div className={styles.content}>
        <div>Count: {count}</div>
        <div>Message: {inputValue}</div>
      </div>
    );
  }
}

export default Content;
