import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
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
                  {" "}
                  <img alt="" src={teamPic} />
                </td>
                <td>
                  <p id="footerText">จัดทำโดยกลุ่ม............</p>
                </td>
              </tr>
              <tr>
                <td id="iconColumn" />
                <td>
                  <p id="footerText">คณะบริหารธุรกิจและการบัญชี </p>
                </td>
              </tr>
              <tr>
                <td id="iconColumn" />
                <td>
                  <p id="footerText">มหาวิทยาลัยขอนแก่น</p>
                </td>
              </tr>
              <tr id="extraRow">
                <div />
              </tr>
            </table>
          </div>

          <div id="separator" />

          {/* Right panel contains working time, email and phone number. */}
          <div id="rightPanel">
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
          </div>
        </div>
      </div>
    );
  }
}
