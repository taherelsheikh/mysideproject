import React, { Component } from 'react';
import "./title.css";
import Icon from './SVG/appleIcon1.svg';


class Title extends Component {
  render() {
    return (
      <div >
      <p className="maintitle">{"{my side project}"}</p>

      <div className="mainsubdiv">
      <p className="mainsubtitle">a podcast about <i>tech & design</i></p>
      <p className="mainsubtitle">entrepreneurs who took their side project </p>
      <p className="mainsubtitle">to the next level.</p>
      <p className="names">By Taher Elsheikh & Donji Yamanda-Dessert</p>
    <img className="podcastIcon" src="https://bpligtu8x36aryh1-zippykid.netdna-ssl.com/wp-content/uploads/2017/04/listen_on_apple_podcast-1.svg" width="233" height="44"/>
      </div>

      </div>
    );
  }
}

export default Title;
