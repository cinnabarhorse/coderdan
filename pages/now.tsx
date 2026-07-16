import Head from 'next/head'
import Link from 'next/link'

const nowItems = [
  {
    title: 'Living in mainland China',
    body: 'I am based in mainland China, building my days around family, focused work, and the rhythm of life here.',
  },
  {
    title: 'Taking care of my toddler son',
    body: 'Much of my time and attention goes toward raising my toddler son. Parenthood is reshaping how I think about time, patience, responsibility, and what is worth building.',
  },
  {
    title: 'Upskilling in agentic engineering',
    body: 'I am rapidly deepening my agentic engineering skills, with a focus on designing reliable agent workflows and using them to build genuinely useful tools.',
  },
  {
    title: 'Helping Aavegotchi become DAO-led',
    body: 'I am helping Aavegotchi transition from a single-studio model to a DAO-led model, with more responsibility, coordination, and execution distributed across the community.',
  },
]

const NowPage = () => {
  return (
    <>
      <Head>
        <title>now | coderdan</title>
        <meta
          name="description"
          content="A current snapshot of Coderdan's life, learning, and work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="now-page section-shell">
        <header className="now-intro">
          <h1>Now</h1>
          <div className="now-intro-copy">
            <p className="now-eyebrow">Updated July 2026</p>
            <p>
              A snapshot of what I would tell a friend I had not seen in a year:
              where I am, what matters, and where my attention is going.
            </p>
          </div>
        </header>

        <section className="now-grid" aria-label="Current focus">
          {nowItems.map((item) => (
            <article className="now-item reveal" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <div className="now-return">
          <Link className="text-action" href="/#projects">
            View projects
          </Link>
        </div>
      </main>
    </>
  )
}

export default NowPage
