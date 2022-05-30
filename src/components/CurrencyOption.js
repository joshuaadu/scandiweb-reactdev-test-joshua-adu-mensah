import { Component } from "react";
import { ReactComponent as SelectIcon } from "../assets/arrow-up.svg";
import styles from "../styles/CurrencyOption.module.scss";
import CurrencyDropdownList from "./CurrencyDropdrownList";

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

  select(currency) {
    this.setState({ currency: currencyList.get(currency) });
  }

  render() {
    return (
      <div className={styles["currency-option"]}>
        <span>{this.state.currency}</span>
        <SelectIcon />
        <CurrencyDropdownList
          list={Array.from(currencyList)}
          select={this.select.bind(this)}
        />
      </div>
    );
  }
}

export default CurrencyOption;
