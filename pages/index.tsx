import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Layout from '../components/reusable/Layout'
import SocialIcon from '../components/socialIcons'
import ProjectsPage from '../components/ProjectsPage'
import SkillsPage from '../components/SkillsPage'
import TokenPage from '../components/TokenPage'
import HireMePage from '../components/HireMePage'
import { themeColor } from '../theme'
import { useState } from 'react'
import PraisePage from '../components/PraisePage'

const Home = () => {

  const [hovering, setHovering] = useState(false)

  return (

    <div>
      <Head>
        <title>coderdan (web3 developer)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>


        <div className="imageContainer">
          <img className="profileImage" src="coderdan.png" />
        </div>

        <div className="description">
          hi, i'm coder dan
        </div>

        <div className="subtitle">
          i make awesome web3 experiences
        </div>


        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <SocialIcon
            iconSize={44}
            twitter="https://twitter.com/coderdannn"
            medium="https://medium.com/@coderdannn"
            dev="https://dev.to/coderdan"
          />
        </div>



        <div className="viewProjectsContainer">
          <a onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} href="#projects" className="viewProjects">
            <div>view projects</div>
            <div className="v">v</div>

          </a>
        </div>




        <div style={{ position: 'relative', top: 100 }} id="projects"></div>

        <div>
          <ProjectsPage />
        </div>


        <div style={{ position: 'relative', top: 100 }} id="skills"></div>

        <div>
          <SkillsPage />
        </div>


        <div style={{ position: 'relative', top: 100 }} id="praise"></div>

        <div>
          <PraisePage />
        </div>



        {/*}   <div style={{ position: 'relative', top: 100 }} id="token"></div>

        <div>
          <TokenPage />
        </div>

  {*/}


        <div style={{ position: 'relative', top: 100 }} id="hire"></div>
        <div>
          <HireMePage />
        </div>

        <footer>
         
            Copyright 2019-2020 Daniel Mathieu
       
        </footer>

        <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .imageContainer {
        margin-top:30px;
        display:flex;
        justify-content:center;
        width:100%;
        height:200px;
        margin-bottom:25px;
      }

      .imageContainer:hover {

      }

      .profileImage {
        width:200px;
        height:200px;
        border-radius:100px;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

     
      .description {
      
        font-size:32px;
        font-weight:300;
        text-align: center;
      }

      .subtitle {
        font-size:21px;
        font-weight:300;
        text-align:center;
        margin-bottom:20px;
      }

    
      .viewProjectsContainer {
        display:flex;
        justify-content:center;
        width:100%;
        height:120px;
       

      }

      .viewProjects {
        margin-top:15px;
        font-size:24px;
        text-align:center;
        font-weight:300;
        background:none;
        border:none;
       
        transition:color 0.2s;
      }

      .viewProjects:hover {
        color:${themeColor};
      }

      .v {
        margin-top:${hovering ? 10 : 0}px;
        transition:margin-top 0.2s;
      }

   

    `}</style>

        <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>

      </Layout>
    </div>

  )
}

export default Home
