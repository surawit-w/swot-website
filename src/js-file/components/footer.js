import React, { Component } from "react";
import contactPic from "../../images/logoMGT.ico";
import "../../stylesheets/components/footer.css";

export default class footer extends Component {
  render() {
    return (
      <div id="wholeStuff">
        {/* Left panel contains company's address. */}
        <div id="panels">
          <div id="leftPanel">
            <table>
              <tr>
                <td id="iconColumn">
                  <img alt="" src={contactPic} />
                </td>

                <p id="footerText">
                  MADE BY MANAGEMENT <br />
                  Faculty of business administration and accountancy <br />
                  Khon Kaen University
                </p>
              </tr>
              <tr>
                <td id="iconColumn" />
                <td>
                  <p id="footerText"></p>
                </td>
              </tr>
              <tr id="extraRow">
                <div />
              </tr>
            </table>
          </div>

          <div id="separator" />

          {/* Right panel contains working time, email and phone number. */}
          {/* <div id="rightPanel">
            <table>
              <tr>
                <td id="iconColumn">
                  <img alt="" src={contactPic} />
                </td>
                <td>
                  <p id="footerText">ติดต่อเรา</p>
                </td>
              </tr>
              <tr>
                <td id="iconColumn"></td>
                <td>
                  <p id="footerText">abcdef@kkumail.com</p>
                </td>
              </tr>
              <tr>
                <td id="iconColumn"></td>
                <td>
                  <p id="footerText">Facebook Fanpage: SWOT ONLINE</p>
                </td>
              </tr>
            </table>
          </div> */}
        </div>
      </div>
    );
  }
}
