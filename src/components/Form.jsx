import React, { Component } from "react";
import { connect } from "react-redux";
import { costSplit } from "../actions";

class Form extends Component {
  state = { totalPrice: 0, totalPersons: 0 };

  handleChangePrice = (event) =>
    this.setState({ totalPrice: event.target.value });

  handleChangePersons = (event) =>
    this.setState({ totalPersons: event.target.value });

  handleResetNumbers = () => this.setState({ totalPrice: 0, totalPersons: 0 });

  handlePost = (e) => {
    e.preventDefault();
    const { totalPrice, totalPersons } = this.state;
    const { onSubmit } = this.props;
    if (totalPrice <= 0 || totalPersons <= 0) return this.handleErrorMessage();

    this.handleResetNumbers({ totalPrice: 0, totalPersons: 0 });
    onSubmit(totalPrice, totalPersons);
  };

  handleErrorMessage = () => {
    const { totalPrice, totalPersons } = this.state;
    const isValid = totalPrice === 0 || totalPersons === 0;

    if (isValid) {
      const errorMessage =
        totalPrice === 0 ? "合計額を入力して下さい" : "人数を入力して下さい";
      return alert(errorMessage);
    }
  };

  render() {
    const { totalPrice, totalPersons } = this.state;

    return (
      <form onSubmit={(e) => this.handlePost(e)}>
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
