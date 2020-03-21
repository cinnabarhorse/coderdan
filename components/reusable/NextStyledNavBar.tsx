import React from 'react'
import { themeColor, themeCyan, themeSecondary } from '../../theme'
import Link from 'next/link'
import { rightLinks } from './links'


import { Container } from 'react-bootstrap'

interface Props {
    logo?: JSX.Element
    siteTitle?: string
}


const NextStyledNavBar = (props: Props) => {



    const brand = (
        <div className="brandContainer">
            <Link href="/">
                <a className="brand">
                    <div className="logoImage">

                        <img src="/bullionix.png" width="100%" />


                    </div>
                    <div className="siteTitle"><img src="/images/bullionixtitle.png" width="100%" /></div>
                </a>
            </Link>


        </div>

    )

    function _renderLinks(side: "left" | "right") {

        let linkArray = side === "left" ? [] : rightLinks
        if (linkArray !== undefined && linkArray.length > 0) {

            return (
                linkArray.map(linkObject => {

                    return (
                        <div className="linkButton">

                            <style jsx>
                                {`
                                   .linkButtonSpecial {
                                       color:${linkObject.highlight ? themeColor : undefined};
                                   }
                                   .linkButtonSpecial:hover {
                                       color:${linkObject.highlight ? themeSecondary : undefined};
                                   }
                                    
                                `}
                            </style>

                            <Link key={linkObject.href} href={linkObject.href}>
                                <a className="linkButtonSpecial" href={linkObject.href}>{linkObject.name}</a>
                            </Link>
                        </div>


                    )
                })
            )


        }

        else {
            return null
        }
    }




    return (

        <div className="navBar">

            <Container>

                <style global jsx>
                    {`

                .navPlaceholder {
                   display: flex;
                   height:65px;
                    flex: 0.75;
                    flex-direction: row;
                    justify-content: flex-start;
                    background-color:white;
                }



                .navBar {

                    position: sticky;
                    position: -webkit-sticky;
                    position: -moz-sticky;
                    position: -ms-sticky;
                    position: -o-sticky;
                  
                    top:0;
                    display: flex;
                    height:65px;
                    width:100%;
                   
                    background-color:white;
                    flex-direction: row;
                   
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                    z-index: 999;
                    margin: 0 auto;
                    opacity: 1;
                    flex-direction: column;
                    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.04);
                
                }


                .brandContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                background: none;
                   
                    border-radius: 20px;
                    justify-content:center;

                }
                .brand {
                display: flex;
                align-items: center;
                justify-items: center;
                    border: none;
                    flex-direction: row;
                }

                .brand:hover {
                    text-decoration: none;
                }

                .logoImage {
                   
                    width:36px;
                    height:auto;
                display:flex;
                justify-content:center;
                align-items:center;
                    margin-right: 8px;
                    color: white;
                    border-radius:30px;
                   
                }

                .siteTitle {
                    display:block;
                    font-size: 18pt;
                font-weight: 700;
                margin-right:15px;
                margin-left:3px;
                    color: black;
                    width:150px;
                }

                .userProfilePicture {
                  
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 35px;
                    min-width: 35px;
                    max-width: 35px;
                    max-height: 35px;
                    border-radius: 17.5px;
                    background: white;
                }


                .linkButton {
                   
                    height: 40px;
                    font-weight:300;
                    width:65px;
                    margin-left: 10px;
                    margin-right:10px;
                    font-size: 16px;
                    border: none;
               
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    transition: background-color 0.3s ease, transform .3s ease;
                  
                }

                .linkButton:hover {

                    color:${themeColor};
                    text-decoration: none;
                    color: white !important;
                }

                .navMenu {
                    display: flex;
                    flex: 4.25;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                }

                .navMenuHamburger {
                    display:none;
                }

                .navMenuHamburgerContainer {
                    display:none;
                  
                }

                
                @media only screen and (max-width: 768px) {
                    .siteTitle {
                        display:none;
                    }

                    .navPlaceholder {
                        display: flex;
                         flex: 0.3;
                         flex-direction: row;
                         justify-content: flex-start;
                     }

                   
                }

                @media only screen and (max-width:768px) {
                  
                    .navMenuHamburgerContainer {
                        display:flex;
                        flex-direction:row;
                        align-items:center;
                       
                    }

                    .navMenuHamburger {
                        display:flex;
                        background:${themeColor};
                        margin-left:15px;
                      
                      
                        height:50px;
                        width:auto;
                       
                        align-items:center;
                        justify-content:center;
                    }
                }
                
                
                `}
                </style>

                <div style={{ display: 'flex', flex: 1 }}>

                    <div style={{ display: 'flex', flex: 0.5 }}></div>

                    {/*Left Side */}
                    <div style={{ display: 'flex', flex: 4.25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>





                        {/*leftLinks !== undefined &&
                        _renderLinks("left")
                    */}


                    </div>




                    {/*Right */}
                    <div className="navMenu">

                        {rightLinks !== undefined &&
                            _renderLinks("right")
                        }



                    </div>

                    <div style={{ display: 'flex', flex: 0.5 }}></div>


                    <div className="navMenuHamburgerContainer">



                        <div className="navMenuHamburger">

                            {/*hamburgerDropdown(<FontAwesomeIcon icon={faBars} size="lg" />, hamburgerLinks)*/}

                        </div>



                    </div>






                    {/*searchBar()*/}







                </div>

            </Container>


        </div>


    )

}





export default NextStyledNavBar