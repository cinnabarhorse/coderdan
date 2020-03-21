import React, { useState } from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./reusable/Layout";
import NextStyledInput from '../components/reusable/NextStyledInput'
import NextMultiLineInput from '../components/reusable/NextMultiLineInput'
import NextStyledButton from "./reusable/NextStyledButton";

//import SibApiV3Sdk from 'sib-api-v3-typescript'
interface HireMePageProps {

}

const HireMePage = (props: HireMePageProps) => {

    const [email, setEmail] = useState<string>("dmathieuva@gmail.com")
    const [name, setName] = useState<string>("hello")
    const [subject, setSubject] = useState("Email from CoderDannn Site")
    const [message, setMessage] = useState<string>("hey!")

    const inputFieldStyle = `
        height:50px;
        border:solid 1px black;
        font-size:20px;
        font-weight:300;
       margin-bottom:15px;
    `

    const multiLineStyle = `
    
    border:solid 1px black;
    font-size:20px;
    font-weight:300;
`

    async function sendEmail() {

        if (email === undefined || email === "") {
            alert("Please enter your email")
            return
        }
        else if (name === undefined || name === "") {
            alert("Please enter your name")
            return
        }
        else if (message === undefined || message === "") {
            alert("Please enter a message")
            return
        }

        const params = {
            sender: {
                name: name,
                email: email
            },
            to: {
                email: "dmathieuva@gmail.com",
                name: "Coder Dan"
            },
            subject: "Test email",
            htmlContent: message
        }

        try {

            var SibApiV3Sdk = require('sib-api-v3-typescript');

            console.log('api:', SibApiV3Sdk)


            // This example is for Typescript-node

            const key = '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'


            // This example is for Typescript-node



            var apiInstance = new SibApiV3Sdk.SendSmtpEmail()

            console.log('api instance:', apiInstance)

            // Configure API key authorization: api-key

            //@ts-ignore
            var apiKey = apiInstance.authentications['apiKey'];
            apiKey.apiKey = key

            // Configure API key authorization: partner-key

            //@ts-ignore
            var partnerKey = apiInstance.authentications['partnerKey'];
            partnerKey.apiKey = key

            var sendSmtpEmail = {
                to: [{
                    email: 'testmail@example.com',
                    name: 'John Doe'
                }],
                templateId: 59,
                params: {
                    name: 'John',
                    surname: 'Doe'
                },
                headers: {
                    'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
                }
            };


            //@ts-ignore
            apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
                console.log('API called successfully. Returned data: ' + data);
            }, function (error) {
                console.error(error);
            });




        } catch (error) {
            console.log('error:', error)
        }


        alert("Message sent!")



    }


    return (
        <Container>
            <Layout>

                <style jsx>
                    {`
                        .description {
                            font-size:20px;
                            font-weight:300;
                        }

                        .contact {
                            font-size:20px;
                            margin-top:20px;
                            font-weight:500;
                        }

                        .formContainer {
                            margin-top:20px;
                        }

                        .aboutMeContainer {
                            background:rgba(201,157,102,0.06);
                            width:100%;
                            height:100%;
                            padding:30px;
                        }

                        .aboutMe {
                            font-size:36px;
                            font-weight:500;
                            margin-bottom:30px;
                        }

                        p {
                            font-size:24px;
                            font-weight:300;
                            margin-bottom:25px;
                        }
                    `}
                </style>


                <Row>
                    <Col>
                        <PageTitle title="hire me" />
                    </Col>
                </Row>




                <Row>

                    <Col>



                        <div className="description">
                            need a competent, hard-working full-stack web3 developer for your next dapp?
                        </div>

                        <div className="contact">
                            Contact me
                        </div>
                    </Col>
                </Row>

                <div className="formContainer">

                </div>

                <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                        <NextStyledInput
                            placeHolderText="your e-mail address"
                            value={email}
                            onChangeText={(text) => { setEmail(text) }}
                            inputFieldStyles={inputFieldStyle}
                        />

                        <NextStyledInput
                            placeHolderText="your name"
                            value={name}
                            onChangeText={(text) => { setName(text) }}
                            inputFieldStyles={inputFieldStyle}
                        />

                        <NextMultiLineInput
                            inputLabel=""
                            height={300}
                            maximumLength={500}
                            placeHolderText="brief description of your project"
                            onChangeText={(text) => { setMessage(text) }}
                            value={message}
                            inputFieldStyles={multiLineStyle}
                        />

                        <NextStyledButton
                            title="submit form"
                            onClick={() => { sendEmail() }}
                            defaultStyle={`
                                width:100%;
                                height:65px;
                                background:#C99D66;
                            `}
                            titleStyles={`
                                font-size:20px;
                                font-weight:300;
                                color:white;
                            `}
                        />
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className="aboutMeContainer">
                            <div className="aboutMe">a little about me</div>

                            <p>graduated in 2011 from University of Pittsburgh with BA in Chinese Languages and Literatures</p>

                            <p>started coding iOS apps in 2014 </p>

                            <p>learned about crypto in 2016 </p>

                            <p>began developing Ethereum apps in 2019</p>

                            <p><strong>started working with you in _____ ?</strong></p>
                        </div>

                    </Col>
                </Row>

                <div style={{ height: 50 }}></div>

            </Layout>
        </Container>
    );
}
export default HireMePage;