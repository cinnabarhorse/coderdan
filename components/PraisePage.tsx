import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./reusable/Layout";
import { TwitterTweetEmbed } from 'react-twitter-embed'

interface PraisePage {

}

const PraisePage = (props: PraisePage) => {

    return (
        <div>
            <Container>
                <Layout>

                    <style jsx>
                        {`
                        .container {
                            padding:0;
                            display:flex;
                            flex-direction:column;
                        }

                        .title {
                            font-size:24px;
                            font-weight:500;
                        }

                        .itemContainer {
                            display:flex;
                            flex-wrap:wrap;
                            margin-bottom:30px;
                        }


                        .item {
                            margin-top:10px;
                            margin-bottom:10px;
                            margin-right:30px;
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                        }

                        .itemBox {
                            width:15px;
                            height:15px;
                            border-radius:7.5px;
                            background:#C99D66;
                            margin-right:8px;
                        }

                        .itemName {
                            font-size:18px;
                            font-weight:300;
                        }

                    `}
                    </style>


                    <Row>
                        <Col>
                            <PageTitle title="praise" />
                        </Col>

                    </Row>

                    <Row>

                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                            <TwitterTweetEmbed tweetId="1249171178356461569" />
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                            <TwitterTweetEmbed tweetId="1244657705031098368"
                            />
                        </Col>

                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                            <TwitterTweetEmbed tweetId="1260926367438422016"
                            />
                        </Col>






                    </Row>
                </Layout>
            </Container>
        </div>
    );
}
export default PraisePage;