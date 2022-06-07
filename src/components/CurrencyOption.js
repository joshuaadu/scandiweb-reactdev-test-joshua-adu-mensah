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
  constructor(props) {
    super(props);
    this.state = {
      currency: currencyList.get("USD"),
      showList: false,
    };
    console.log(this.context);
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
