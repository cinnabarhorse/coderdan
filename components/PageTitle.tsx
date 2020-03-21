import React from "react";

interface PageTitleProps {
    title: string
    id?: string
}

const PageTitle = (props: PageTitleProps) => {

    const { title, id } = props

    return (

        <div className="pageTitleContainer">


            <style jsx>
                {`
                    .pageTitleContainer {
                       
                        display:flex;
                        flex:1;
                        width:100%;
                        height:60px;
                        margin-top:200px;
                        margin-bottom:40px;
                    }
                    .pageTitle {
                        text-align:left;
                        font-size:36px;
                        text-decoration:underline;
                        color:black;
                    }

                    div {
                        position:relative;
                    }

                    div span {
                        position:absolute;
                        
                    }
                `}
            </style>

            <div className="pageTitle">

                {title}

            </div>



        </div>
    );
}
export default PageTitle;