import React, { Component } from "react";
import { connect } from "react-redux";

class Costs extends Component {
  render() {
    const { costs } = this.props;
    return (
      <div>
        {Object.values(costs).map((cost) => (
          <h3 key={cost.id}>
            Case{cost.id + 1}: Price: {cost.splitCost} $
          </h3>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ costs: state.costs });

export default connect(mapStateToProps)(Costs);
