import React from "react";
import Content from "../Content/Content";
import styles from "./ClassFrom.module.css";
export interface IFormState {
  inputValue: string;
  count: number;
  isShown: boolean;
}

class ClassForm extends React.Component<object, IFormState> {
  constructor(props: IFormState) {
    console.log("constructor");
    super(props);
    this.state = {
      inputValue: "",
      count: 0,
      isShown: true,
    };
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  shouldComponentUpdate() {
    console.log("Should Component Update");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("Get Snapshot Before Update");
    return null;
  }
  static getDerivedStateFromProps() {
    console.log("Get Derived State From Props");
    return {};
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  incrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  decrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  hideContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    console.log("render");
    const { inputValue, count, isShown } = this.state;
    return (
      <>
        {console.log("return")}
        <form className={styles.form} name="myForm">
          <input
            className={styles.form_input}
            placeholder="Input message..."
            name="myFormInput"
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <div>
            <button onClick={this.decrementCounter}>Уменьшить Count</button>
            <button onClick={this.incrementCounter}>Увеличить Count</button>
          </div>
          <button onClick={this.hideContent}>Скрыть Контент</button>
        </form>
        {isShown && (
          <Content count={count} inputValue={inputValue} isShown={isShown} />
        )}
      </>
    );
  }
}
export default ClassForm;
