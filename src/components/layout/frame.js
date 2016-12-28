import React from "react";

require('./frame.scss');

export default class Frame extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentWillMount() {
    // this.props.dispatch(fetchLocalization());
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {

  }
  render() {
    return(
      <div className="frame">
        <div className="left"></div>
        <div className="right"></div>
        <div className="footer">
          <div className="copyright">
            © Krystina Madej | 2016
          </div>
        </div>
      </div>
    );
  }
}

// <div className="content" dangerouslySetInnerHTML={{__html: localization.homepagecontent}} />
