import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import Layout from '../components/reusable/Layout'
import { themeColor, themeSecondary } from '../theme'

const nowItems = [
  {
    title: 'Building useful web3 products',
    body: 'I am focused on shipping practical web3 interfaces, smart contract integrations, and documentation that make onchain tools easier to understand and use.'
  },
  {
    title: 'Keeping Aavegotchi knowledge current',
    body: 'A lot of my attention is going toward Aavegotchi ecosystem work, especially keeping user-facing docs and product surfaces aligned with how the protocol actually works today.'
  },
  {
    title: 'Selective consulting',
    body: 'I am open to focused engineering work where I can help a small team move faster on Solidity, React, Next.js, or product architecture.'
  },
  {
    title: 'Better personal systems',
    body: 'I am using this page as a public reminder to keep my attention on fewer projects, better execution, and clearer communication.'
  }
]

const NowPage = () => {
  return (
    <div>
      <Head>
        <title>now | coderdan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <main className="page">
            <div className="intro">
              <div className="eyebrow">updated May 2026</div>
              <h1>now</h1>
              <p>
                This is a snapshot of what I am focused on these days. It follows the
                simple now page idea from Derek Sivers: what I would tell a friend I
                had not seen in a year.
              </p>
            </div>

            <section className="focusList" aria-label="Current focus">
              {nowItems.map((item) => (
                <article key={item.title} className="focusItem">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </section>

            <section className="availability" aria-label="Availability">
              <h2>availability</h2>
              <p>
                If your project overlaps with these priorities, the best next step is
                to send a short note with the problem you are trying to solve.
              </p>
              <Link legacyBehavior href="/#hire">
                <a>get in touch</a>
              </Link>
            </section>
          </main>
        </Container>

        <style jsx>{`
          .page {
            max-width: 760px;
            margin: 0 auto;
            padding: 120px 0 90px;
          }

          .intro {
            margin-bottom: 44px;
          }

          .eyebrow {
            color: ${themeColor};
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.08em;
            margin-bottom: 12px;
            text-transform: uppercase;
          }

          h1 {
            color: black;
            font-size: 52px;
            font-weight: 500;
            line-height: 1;
            margin: 0 0 22px;
          }

          h2 {
            color: black;
            font-size: 24px;
            font-weight: 500;
            line-height: 1.25;
            margin: 0 0 10px;
          }

          p {
            color: #333;
            font-size: 20px;
            font-weight: 300;
            line-height: 1.6;
            margin: 0;
          }

          .focusList {
            border-top: 1px solid #eaeaea;
          }

          .focusItem {
            border-bottom: 1px solid #eaeaea;
            padding: 28px 0;
          }

          .availability {
            background: rgba(201, 157, 102, 0.08);
            border-left: 4px solid ${themeColor};
            margin-top: 42px;
            padding: 26px 28px;
          }

          .availability a {
            color: ${themeColor};
            display: inline-flex;
            font-size: 20px;
            font-weight: 500;
            margin-top: 18px;
            text-decoration: none;
            transition: color 0.2s;
          }

          .availability a:hover {
            color: ${themeSecondary};
          }

          @media screen and (max-width: 768px) {
            .page {
              padding: 70px 0 60px;
            }

            h1 {
              font-size: 44px;
            }

            p {
              font-size: 18px;
            }

            .availability {
              padding: 22px;
            }
          }
        `}</style>
      </Layout>
    </div>
  )
}

export default NowPage
