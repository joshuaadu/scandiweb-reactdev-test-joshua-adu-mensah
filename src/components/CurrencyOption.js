import { Component } from "react";
import { ReactComponent as SelectIcon } from "../assets/arrow-up.svg";
import CurrencyContext from "../store/currency-context";
import styles from "../styles/CurrencyOption.module.scss";
import CurrencyDropdownList from "./CurrencyDropdrownList";

const currencyList = new Map([
  ["USD", "$"],
  ["EUR", "€"],
  ["JPY", "¥"],
]);

class CurrencyOption extends Component {
  static contextType = CurrencyContext;

  state = {
    currencySymbol: currencyList.get(this.context.currency),
    showList: false,
  };

  select(currency) {
    const symbol = currencyList.get(currency);
    this.setState({ currencySymbol: symbol });
    this.context.switchCurrency(currency, symbol);
  }

  showList = () => {
    this.setState((prevState) => {
      return { showList: !prevState.showList };
    });
  };

  render() {
    const { currency } = this.context;
    console.log("CurrenyOption Component", currency);
    return (
      <div className={styles["currency-option"]}>
        <span>{this.state.currencySymbol}</span>
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
