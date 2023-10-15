import React from "react";
import styles from "./Content.module.css";
import { IFormState } from "../ClassForm/ClassForm";
import List from "../List/List";
import List2 from "../List2/List2";

interface IContentProps extends IFormState {}

class Content extends React.Component<IContentProps> {
  render() {
    const { inputValue, count } = this.props;
    return (
      <React.Fragment>
        <div className={styles.content}>
          <div>Count: {count}</div>
          <div>Message: {inputValue}</div>
          <div className={styles.lists}>
            <p>Key через index (плохая практика)</p>
            <ul className={styles.list}>
              <List />
            </ul>
            Key через id
            <ul className={styles.list}>
              <List2 />
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
