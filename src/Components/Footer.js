import React from "react";
import { Row, Col } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <Row className="fixed-bottom navbar-dark bg-primary">
        <MDBFooter color="blue" className="font-small pt-3 mt-2">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Hakkımda</h5>
                <p>Merhabalar, ben Frank Banditi</p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title text-align-center">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;İletişim :
                </h5>
                <ul>
                  <li className="list-unstyled py-1 ">
                    <SocialIcon
                      url="https://twitter.com"
                      target="_blank"
                      style={{ height: 30, width: 30 }}
                      fgColor="#ffffff"
                    />
                  </li>
                  <li className="list-unstyled py-1">
                    <SocialIcon
                      url="https://discord.com/"
                      target="_blank"
                      style={{ height: 30, width: 30 }}
                      fgColor="#ffffff"
                    />
                  </li>
                  <li className="list-unstyled pt-1">
                    <SocialIcon
                      url="https://www.google.com/intl/tr/gmail/about/"
                      target="_blank"
                      style={{ height: 30, width: 30 }}
                      bgColor="#FF0000"
                      fgColor="#ffffff"
                    />
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-1">
            <MDBContainer fluid>
              {new Date().getFullYear()} Copyright &copy; <a> FrankBanditi </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </Row>
    </footer>
  );
};

export default Footer;
