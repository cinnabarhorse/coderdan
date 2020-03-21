import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./reusable/Layout";

interface TokenPageProps {

}

const TokenPage = (props: TokenPageProps) => {
    return (
        <Container>
            <Layout>

                <style jsx>
                    {`
                        .title {
                            font-size:20px;
                            font-weight:300;
                            margin-bottom:15px;
                        }

                        a {
                            font-size:30px;
                            color:#C99D66;
                        }

                        .imageContainer {
                            width:100%;
                            display:flex;
                            flex:1;
                            justify-content:center;
                            background:red;
                        }

                        .image {
                            width:194px;
                            height:194px;
                            background:green;
                        }
                    `}
                </style>


                <Row>
                    <Col> <PageTitle title="token" /></Col>


                </Row>


                <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>


                        <div className="imageContainer">
                            <img src="" className="image" />
                        </div>

                    </Col>

                    <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                        <div className="title">purchase my limited edition gold-backed NFT
                        </div>

                        <div><a href="https://bullionix.io">bullionix</a></div>

                        <div><a href="https://opensea.io">OpenSea</a></div>

                    </Col>

                </Row>
            </Layout>
        </Container>
    );
}
export default TokenPage;