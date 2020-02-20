import React, { Component } from "react";
import "../../stylesheets/components/font.css";
import "../../stylesheets/components/homeInfo.css";
import { FacebookProvider, Page } from "react-facebook";

export default class homeInfo extends Component {
  render() {
    return (
      <div>
        <div className="left-column">
          <div className="about">
            <h2>เกี่ยวกับเรา</h2>
            <div className="about-info">
              <p>
                dsakdsaldaodasldaldsaldsaldaldsaldsaldsaldasldsladsaldsaldsaldsa
                dlasdlsadlsadlsaldsaldasldsaldsaldlsadlsadlsadlsaldsaldsaldsald
              </p>
              <FacebookProvider appId="1018895865146304">
                <Page href="https://www.facebook.com" tabs="timeline" />
              </FacebookProvider>
            </div>
          </div>
          <div className="info"></div>
        </div>

        <div className="right-column">
          <div className="news"></div>
        </div>
      </div>
    );
  }
}
