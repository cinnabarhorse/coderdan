import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faReddit, faDiscord } from "@fortawesome/free-brands-svg-icons"
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Link from "next/link";
import { navBarButtonStyle, themeCyan } from '../../theme'

interface FooterProps {

}

const Footer = (props: FooterProps) => {
    return (
        <div style={{ marginTop: 170, marginBottom: 20 }}>


            <Container>

                <style jsx>
                    {`

                    h3 {
                        font-weight:900;
                        letter-spacing:1.2px;
                        text-transform:uppercase;
                        font-size:18px;
                        line-height:22px;
                    }
                    h4 {
                        font-weight:900;
                        letter-spacing:1.2px;
                        text-transform:uppercase;
                        font-size:14px;
                        line-height:22px;

                    }

                    p {
                        font-weight:300;
                    }

                    a {
                        ${navBarButtonStyle}
                    }

                    a:hover {
                        color:${themeCyan};
                    }

                    .social-icon {
                        margin-right:8px;
                    }
                `}
                </style>


                <Row>

                    <Col style={{ marginBottom: 20 }} xl={6} lg={6} md={12} sm={12} xs={12}>
                        <h3>BULLIONIX</h3>

                        <p>2020 Prospectr Studios Pte. Ltd.</p>
                        <p>All rights reserved</p>
                    </Col>



                    <Col style={{ marginBottom: 20 }} xl={2} lg={2} md={12} sm={12} xs={12}>
                        <h4>Company</h4>

                        <div><Link href="/about"><a>About</a></Link></div>
                        <div><Link href="/press"><a>Press</a></Link></div>
                        <div><a href="#">Contact </a></div>
                        {/*}   <div><a href="#">FAQ</a></div> {*/}



                    </Col>

                    <Col style={{ marginBottom: 20 }} xl={2} lg={2} md={12} sm={12} xs={12}>


                        <h4>Legal</h4>

                        <div><a target="_blank" href="https://docs.google.com/document/d/1ZSTYpJAbViA1IoyOnpHHSVkciJw7NsAJ-a39BS2zaY8/edit">Privacy Policy</a></div>
                        <div><a target="_blank" href="https://docs.google.com/document/d/1A_CFeJVn3YnIUT5948i0Lp9t2mP0IgluGGZ08nGEeb8/edit">Terms of Service</a></div>



                    </Col>



                    <Col style={{ marginBottom: 20 }} xl={2} lg={2} md={12} sm={12} xs={12}>


                        <h4>Follow Us</h4>

                        <a className="social-icon" target="_blank" href="https://www.twitter.com/bullionix_io"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>

                        <a className="social-icon" href="#"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>


                        <a className="social-icon" target="_blNK" href="https://www.reddit.com/r/bullionix/"><FontAwesomeIcon icon={faReddit} size="2x" /></a>





                    </Col>

                </Row>
            </Container>
        </div>

    );
}
export default Footer;