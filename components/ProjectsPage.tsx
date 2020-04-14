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
                                name="bullionix.io"
                                url="https://bullionix.io"
                                description="Purchase and mint gold-backed NFTs. 
                Powered by Digix (DGX) and Ethereum."
                                twitter="https://twitter.com/bullionix_io"
                                github="https://github.com/bullionix"
                                // medium=""
                                thumbnail="/bullionix_thumbnail.png"
                                profilePic="/bullionix_profile.png"

                            />

                            <div style={{ height: 40 }}></div>

                            <ProjectInfo
                                name="Mintbase NFT Demo"
                                url="https://mintbase-auth.now.sh"
                                description="Demo for DappCon 2020 conference. Use NFTs to vote on your favorite speakers."
                                twitter="https://twitter.com/mintbase"
                                github="https://github.com/cinnabarhorse/mintbase-auth"
                                //  medium=""
                                thumbnail="/mintbaseauth.jpg"
                                profilePic="/mintbasepic.jpg"

                            />
                        </Col>

                    </Row>
                </Layout>
            </Container>

        </div>
    );
}
export default ProjectsPage;