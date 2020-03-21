import React from "react";
import { Row, Col } from "react-bootstrap";
import SocialIcon from "./socialIcons";

interface ProjectInfoProps {
    profilePic: string
    url: string
    name: string
    description: string
    twitter: string
    github: string
    medium: string
    thumbnail: string
}

const ProjectInfo = (props: ProjectInfoProps) => {

    const { profilePic, url, name, description, twitter, github, medium, thumbnail } = props
    return (
        <Row>

            <style jsx>
                {`
                .profileContainer {
                    display:flex;
                    width:65px;
                    height:65px;
                    flex:1;
                    flex-direction:row;
                    align-items:center;
                    background:#F9F9F9;
                    border-radius:32.5px;
                }
                .profilePic {
                    width:65px;
                    height:auto;
                    margin-right:15px;
                   
                }

                .name {
                    font-size:36px;
                    font-weight:400;
                }

                .description {
                    margin-top:10px;
                    font-size:21px;
                    font-weight:300;
                }

                .thumbnailContainer {
                    width:100%;
                    height:auto;

                }
                
                .thumbnail {
                    width:100%;
                    height:auto;

                }

                @media screen and (max-width:768px) {
                    .thumbnailContainer {
                        margin-top:20px;
                    }
                }
            `}
            </style>

            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="profileContainer">
                    <img src={profilePic} className="profilePic" />
                    <div className="name">{name}</div>
                </div>

                <div className="description">
                    {description}
                </div>

                <div style={{ marginTop: 20 }}>
                    <SocialIcon
                        iconSize={44}
                        twitter="https://twitter.com/bullionix_io"
                        github="https://github.com/Bullionix/Bullionix_phase1"
                        medium="https://medium.com/"

                    />
                </div>


            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="thumbnailContainer">
                    <a target="_blank" href={url}><img src={thumbnail} className="thumbnail" /></a>
                </div>
            </Col>
        </Row >
    );
}
export default ProjectInfo;