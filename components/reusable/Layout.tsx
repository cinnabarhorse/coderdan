import React from "react";
import { themeColor, buttonActive, themeGray, buttonInactive, buttonHover, navBarButtonStyle } from "../../theme";

interface LayoutProps {
    children: any
    style?: any
}

const Layout = (props: LayoutProps) => {

    const { children, style } = props

    return (
        <div style={style}>

            <style global jsx>
                {`

                html {
                    scroll-behavior:smooth;
                }
                body {
                    margin:0 !important;
                }

                ul {
                    list-style-type:none !important;
                    padding-inline-start:0px !important;
                }

                a {
                    color:${themeGray};
                    text-decoration:none !important;
                }

                a:hover {
                    color:${themeColor};
                }

                .btn-primary {
                    background-color:${buttonActive};
                    border-color:${buttonActive};
                    width:220px;
                    height:60px;
                   ${navBarButtonStyle}

                    color:white;
                }

                .btn-primary:hover {
                    background-color:${buttonHover};
                    border-color:${buttonHover};
                }

                .btn-primary:active {
                    background-color:${buttonHover} !important;
                    border-color:${buttonHover} !important;
                }

                .btn-primary:disabled {
                    background-color:${buttonInactive};
                    border-color:${buttonInactive};
                }

                .headerTitle {
                    font-size:21pt;
                  justify-content:center;
                  
                    display:flex;
                    text-align:center;
                    margin:15px;
                }

                .tooltip-inner {
                    background:#EAF4FF;
                }

                .tooltip.show {
                    opacity:1;
                }

                .modal-content {
                    border:solid 3px #FDBD2E !important;
                    border-radius:15px;
                }
             
                
                `}
            </style>

            {children}
        </div>
    );
}
export default Layout;