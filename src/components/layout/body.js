import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";


require('./body.scss');

@connect((store) => {
  return {
    localization: store.localization,
  }
})
export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  handleScroll(event) {
    this.props.dispatch({type: "SET_SCROLL_X_PERCENTAGE", payload: event.target.scrollLeft / ((event.target.clientWidth - 48) * 3 - 24)});
  }
  componentWillMount() {
    // this.props.dispatch(fetchLocalization());
  }
  componentDidMount() {
    const body = ReactDom.findDOMNode(this.refs['body']);
    body.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillReceiveProps(nextProps) {

  }
  render() {
    return(
      <div ref="body" className="body">
        {this.props.children}
      </div>
    );
  }
}
