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
    this.state = { currency: currencyList.get("USD"), showList: false };
  }

  select(currency) {
    this.setState({ currency: currencyList.get(currency) });
  }

  showList() {
    this.setState((prevState) => {
      return { showList: !prevState.showList };
    });
  }

  render() {
    return (
      <div className={styles["currency-option"]}>
        <span>{this.state.currency}</span>
        <SelectIcon onClick={this.showList.bind(this)} />
        {this.state.showList && (
          <CurrencyDropdownList
            list={Array.from(currencyList)}
            select={this.select.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default CurrencyOption;
