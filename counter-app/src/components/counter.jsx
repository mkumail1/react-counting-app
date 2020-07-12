import React, { Component } from "react";

class Counter extends Component {
  // constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //     this.setState({
  //         value: this.state.value + 1
  //     });
  // }

  render() {
    return (
      <div className="row">
        <h4>{this.props.children}</h4>
        <div className="col-1">
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </div>
        <div className="col-3">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-sm btn-secondary m-2" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClass() {
    let className = "badge m-2 badge-";
    className += this.props.counter.value === 0 ? "warning" : "primary";
    return className;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
