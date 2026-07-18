import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./reusable/Layout";
import ProjectInfo from "./ProjectInfo";

interface ProjectsPageProps {

}

const ProjectsPage = (props: ProjectsPageProps) => {
    return (
        <div>
            <Container>
                <Layout>


                    <Row>
                        <Col>
                            <PageTitle id="projects" title="projects" />
                        </Col>


                    </Row>

                    <Row>

                        <Col>

                            <ProjectInfo
                                name="Aavegotchi"
                                url="https://aavegotchi.com"
                                description="DeFi-Staked playable crypto collectibles, Powered by Aave and Ethereum."
                                twitter="https://twitter.com/aavegotchi"
                                github="https://github.com/aavegotchi"
                                medium="https://aavegotchi.medium.com"
                                thumbnail="/aavegotchi-homepage.png"
                                profilePic="/aavegotchi.png"
                                skills="Solidity, Web3, NextJS, Firebase"

                            />
                        </Col>

                    </Row>
                </Layout>
            </Container>

        </div>
    );
}
export default ProjectsPage;
