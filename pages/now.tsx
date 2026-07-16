import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Layout from '../components/reusable/Layout'
import { themeColor } from '../theme'

const nowItems = [
  {
    title: 'Living in mainland China',
    body: 'I am based in mainland China, building my days around family, focused work, and the rhythm of life here.'
  },
  {
    title: 'Taking care of my toddler son',
    body: 'Much of my time and attention goes toward raising my toddler son. Parenthood is reshaping how I think about time, patience, responsibility, and what is worth building.'
  },
  {
    title: 'Upskilling in agentic engineering',
    body: 'I am rapidly deepening my agentic engineering skills, with a focus on designing reliable agent workflows and using them to build genuinely useful tools.'
  },
  {
    title: 'Helping Aavegotchi become DAO-led',
    body: 'I am helping Aavegotchi transition from a single-studio model to a DAO-led model, with more responsibility, coordination, and execution distributed across the community.'
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
              <div className="eyebrow">updated July 2026</div>
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
          }
        `}</style>
      </Layout>
    </div>
  )
}

export default NowPage
