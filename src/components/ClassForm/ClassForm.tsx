import React from "react";
import Content from "../Content/Content";
import styles from "./ClassFrom.module.css";
import Button from "../Button/Button";

export interface IFormState {
  inputValue: string;
  count: number;
  isShown: boolean;
  isDisabled?: boolean;
}

class ClassForm extends React.Component<object, IFormState> {
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: IFormState) {
    console.log("constructor");
    super(props);
    this.state = {
      inputValue: "",
      count: 0,
      isShown: true,
    };
    this.inputRef = React.createRef();
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
  shouldComponentUpdate(): boolean {
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

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isDisabled = inputValue !== "реакт";
    this.setState({ inputValue, isDisabled });
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
  handleFocus = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
      console.log("focus");
    }
  };
  render() {
    console.log("render");
    const { inputValue, count, isShown, isDisabled } = this.state;
    return (
      <>
        {console.log("return")}
        <form
          className={styles.form}
          name="myForm"
          onSubmit={this.handleSubmit}
        >
          <input
            className={styles.form_input}
            placeholder="Input message..."
            name="myFormInput"
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            ref={this.inputRef}
          />
          <Button callBack={this.handleFocus} children="Установить фокус" />
          <Button type="submit" children="Submit" isDisabled={isDisabled} />
          <div>
            <Button
              callBack={this.decrementCounter}
              children="Уменьшить Count"
            />
            <Button
              callBack={this.incrementCounter}
              children="Увеличить Count"
            />
          </div>
          <Button callBack={this.hideContent} children="Скрыть Контент" />
        </form>
        {isShown && (
          <Content count={count} inputValue={inputValue} isShown={isShown} />
        )}
      </>
    );
  }
}
export default ClassForm;
