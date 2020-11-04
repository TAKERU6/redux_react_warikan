import React, { Component } from "react";
import { connect } from "react-redux";
import { costSplit } from "../actions";

class Form extends Component {
  state = { totalPrice: 0, totalPersons: 0 };

  handleChangePrice = (event) =>
    this.setState({ totalPrice: event.target.value });

  handleChangePersons = (event) =>
    this.setState({ totalPersons: event.target.value });

  handleResetNumbers = (e) => {
    e.preventDefault();
    this.setState({ totalPrice: 0, totalPersons: 0 });
  };

  render() {
    const { totalPrice, totalPersons } = this.state;
    const { onSubmit } = this.props;
    return (
      <form
        onSubmit={(e) => {
          const cost = totalPrice;
          const person = totalPersons;
          const isTotalCost = totalPrice <= 0;
          const isTotalNumber = totalPersons <= 0;
          const isBelowNull = isTotalCost || isTotalNumber;
          if (isBelowNull) {
            const errorMessage = isTotalCost
              ? "合計額を入力して下さい"
              : "人数を入力して下さい";
            return alert(errorMessage);
          }
          onSubmit(cost, person);
          this.handleResetNumbers(e);
        }}
      >
        <div>
          Total Cost:
          <input
            type="number"
            value={totalPrice}
            onChange={this.handleChangePrice}
          />
        </div>
        <div>
          Persons:
          <input
            type="number"
            value={totalPersons}
            onChange={this.handleChangePersons}
          />
        </div>
        <input type="submit" value="SPLIT" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ costs: state.costs });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (cost, person) => dispatch(costSplit(cost, person))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
