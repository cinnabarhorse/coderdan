import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./reusable/Layout";

interface SkillsPageProps {

}

const SkillsPage = (props: SkillsPageProps) => {

    const skills = [

        {
            title: "natural languages",
            icon: "",
            items: ["English (Native)", "Mandarin (Fluent)"]
        },
        {
            title: "computer languages",
            icon: "",
            items: ["Javascript", "TypeScript", "Solidity", "CSS", "HTML"]
        },
        {
            title: "databases",
            icon: "",
            items: ["Firebase RTDB", "MySQL", "DynamoDB"]
        },
        {
            title: "frameworks",
            icon: "",
            items: ["ReactJS", "NextJS", "React Native", "Redux", "AWS", "Firebase"]
        },
        {
            title: "web3",
            icon: "",
            items: ["web3.js", "ethers.js", "TheGraph", "BlockNative"]
        },
        {
            title: "others",
            icon: "",
            items: ["ThreeJS", "GraphQL", "REST", "Git, Photoshop", "Figma"]
        },



    ]

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
                            <PageTitle title="skills" />
                        </Col>

                    </Row>

                    <Row>

                        <Col>

                            {skills.map((skill) => {
                                return (
                                    <div className="container">

                                        <div className="title">
                                            {skill.title}
                                        </div>

                                        <div className="itemContainer">
                                            {skill.items.map((item) => {
                                                return (
                                                    <div className="item">
                                                        <span className="itemBox">
                                                        </span> <span className="itemName">
                                                            {item} </span>
                                                    </div>
                                                )
                                            })}

                                        </div>


                                    </div>
                                )
                            })}
                        </Col>

                    </Row>
                </Layout>
            </Container>
        </div>
    );
}
export default SkillsPage;