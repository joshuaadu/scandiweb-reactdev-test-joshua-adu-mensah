import { Component } from "react";
import { ReactComponent as SelectIcon } from "../assets/arrow-up.svg";
import styles from "../styles/CurrencyOption.module.scss";

const currencyList = new Map([
  ["USD", "$"],
  ["EUR", "€"],
  ["JPY", "¥"],
]);

class CurrencyOption extends Component {
  constructor(props) {
    super(props);
    this.state = { currency: currencyList.get("USD") };
  }
  render() {
    return (
      <div className={styles["currency-option"]}>
        <span>{this.state.currency}</span>
        <SelectIcon />
      </div>
    );
  }
}

export default CurrencyOption;
