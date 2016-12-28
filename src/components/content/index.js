import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import serverConfig from "./../../config/server";
import { convertLinksOpenInNewWindow } from "./../../utils/link";

require('./index.scss');


@connect((store) => {
  return {
    localization: store.localization,
    post: store.post,
  }
})
export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    setTimeout(function() {
      convertLinksOpenInNewWindow(ReactDom.findDOMNode(this.refs['post-about']));
    }.bind(this), 100);
  }
  render() {
    const { localization } = this.props.localization;
    const { posts } = this.props.post;

    const about = posts.map((item, index) => {
      if (item.categories.length > 0 && item.categories.indexOf(serverConfig.iAbout) > -1)  {
        return <div className="post" key={"about-" + index} dangerouslySetInnerHTML={{__html: item.content.rendered}} />;
      }
      return null;
    });

    const news = posts.map((item, index) => {
      if (item.categories.length > 0 && item.categories.indexOf(serverConfig.iNews) > -1)  {
        return <div className="post" key={"news-" + index} dangerouslySetInnerHTML={{__html: item.content.rendered}} />;
      }
      return null;
    });


    return(
      <div className="content">
        <div className="page page-1">
          <div className="left">
            <div className="title">
              <span>S</span><img className="logo" src="./kids.png" /><span>MA</span>
            </div>
            <div className="sitename">
              Somatic Engagement
            </div>
            <div className="description">
              This site explores new ways of thinking<br/>about how children play digital games
            </div>
          </div>
          <div ref="post-about" className="right">
            <div className="container">
              { about }
            </div>
          </div>
        </div>
        <div className="page page-2">
          <div className="top">
            SOMA News
          </div>
          <div className="bottom">
            <div className="container">
              { news }
            </div>
          </div>
        </div>
        <div className="page page-3">
        </div>
        <div className="page page-4">
        </div>

      </div>
    );
  }
}

// <div className="content" dangerouslySetInnerHTML={{__html: localization.homepagecontent}} />
