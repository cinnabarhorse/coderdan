import React from "react";
import { Row, Col } from "react-bootstrap";
import SocialIcon from "./socialIcons";

interface ProjectInfoProps {
    profilePic: string
    url: string
    name: string
    description: string
    twitter?: string
    github?: string
    medium?: string
    thumbnail: string
    skills: string
}

const ProjectInfo = (props: ProjectInfoProps) => {

    const { profilePic, url, name, description, twitter, github, medium, thumbnail, skills } = props
    return (
        <Row style={{ marginTop: 30, marginBottom: 15, paddingBottom: 15, borderBottom: "solid 1px whitesmoke" }}>

            <style jsx>
                {`
                .profileContainer {
                    display:flex;
                  
                    height:65px;
                    flex:1;
                    flex-direction:row;
                    align-items:center;
                  
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

                .skillsUsed {
                    margin-top:10px;
                    font-size:14px;
                   
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

                <div className="skillsUsed">
                    <strong>Skills used: </strong> {skills}
                </div>

                <div style={{ marginTop: 20 }}>
                    <SocialIcon
                        iconSize={44}
                        twitter={twitter}
                        github={github}
                        medium={medium}

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