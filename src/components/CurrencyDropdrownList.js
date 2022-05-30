import { Component } from "react";
import styles from "../styles/CurrencyDropdrownList.module.scss";

class CurrencyDropdownList extends Component {
  render() {
    return (
      <div className={styles["dropdown-list"]}>
        {this.props.list.map(([currency, symbol]) => (
          <span key={currency}>{`${symbol} ${currency}`}</span>
        ))}
      </div>
    );
  }
}

export default CurrencyDropdownList;
