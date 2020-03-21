import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./reusable/Layout";
import ProjectInfo from "./ProjectInfo";

interface ProjectsPageProps {

}

const ProjectsPage = (props: ProjectsPageProps) => {
    return (
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
                            medium=""
                            thumbnail="/bullionix_thumbnail.png"
                            profilePic="/bullionix_profile.png"

                        />
                    </Col>

                </Row>
            </Layout>
        </Container>


    );
}
export default ProjectsPage;