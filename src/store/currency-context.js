import { Component, createContext } from "react";

const CurrencyContext = createContext({});

export class CurrencyProvider extends Component {
  render() {
    return (
      <CurrencyContext.Provider value={{}}>
        {this.props.children}
      </CurrencyContext.Provider>
    );
  }
}

export default CurrencyContext;
