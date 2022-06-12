import { Component, createRef } from "react";
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

  // constructor(props) {
  //   super(props);
  //   // this.currencyOptionRef = createRef();
  //   // this.handleClickOutside = this.handleClickOutside.bind(this);
  // }

  state = {
    currencySymbol: currencyList.get(this.context.currency),
    showList: false,
  };

  handleClickOutside(event) {
    if (
      this.currencyOptionRef.current &&
      !this.currencyOptionRef.current.contains(event.target)
    ) {
      // this.props.onClickOutside && this.props.onClickOutside();
      this.showList.apply(this);
      console.log("handle outside click working");
    }
  }

  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

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
    const currencyOptionRef = createRef();
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
            showList={this.showList.bind(this)}
            ref={currencyOptionRef}
          />
        )}
      </div>
    );
  }
}

export default CurrencyOption;
