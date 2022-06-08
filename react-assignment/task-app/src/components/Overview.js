import React, {Component} from "react";


class Overview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{`Task ${task.order}: ${task.text}`}</li>;
        })}
      </ul>
    );
  }
}

/*
const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{`Task ${task.order}: ${task.text}`}</li>;
      })}
    </ul>
  );
};*/

export default Overview;