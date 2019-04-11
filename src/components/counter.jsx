import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <br />
                <div className="row">
                    <div className="col-1">
                        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col">
                        <button onClick={() => this.props.onIncrement(this.props.counter)} className={this.getSecondaryBtnClasses()}>+</button>
                        <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0} className={this.getSecondaryBtnClasses()}>-</button>
                        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-1 delete-btn">X</button>
                    </div>

                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    getSecondaryBtnClasses() {
        let classes = 'btn btn-secondary btn-sm m-1';
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;