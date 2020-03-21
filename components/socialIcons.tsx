import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faMedium, faDev, faDiscord } from "@fortawesome/free-brands-svg-icons"

interface SocialIconProps {
    iconSize: number
    twitter?: string
    github?: string
    medium?: string
    dev?: string
    discord?: string
}

const SocialIcon = (props: SocialIconProps) => {

    const { iconSize, twitter, github, medium, dev, discord } = props

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>

            <style jsx>
                {`
                    .iconContainer {
                        width:${iconSize}px !important;
                        height:${iconSize}px !important;
                        background:none;
                        border:none;
                        color:#C99D66 !important;
                        margin-right:10px;
                        padding:8px;
                    }

                 
                  
                `}
            </style>

            {twitter &&
                <a target="_blank" href={twitter} className="iconContainer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
            }

            {github &&

                <a target="_blank" href={github} className="iconContainer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            }



            {medium &&
                <a target="_blank" href={medium} className="iconContainer">
                    <FontAwesomeIcon icon={faMedium} size="2x" />
                </a>
            }

            {dev &&
                <a target="_blank" href={dev} className="iconContainer">
                    <FontAwesomeIcon icon={faDev} size="2x" />
                </a>
            }


            {discord &&
                <a target="_blank" href={discord} className="iconContainer">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
            }


        </div>
    );
}
export default SocialIcon;