import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProjectArchive from '../components/ProjectArchive'

const Home = () => {
  return (
    <>
      <Head>
        <title>coderdan | tools for human agency</title>
        <meta
          name="description"
          content="Independent builder creating practical tools that expand human agency, sovereignty, and community ownership."
        />
        <meta property="og:title" content="coderdan | tools for human agency" />
        <meta
          property="og:description"
          content="Practical systems that help people and communities act with more freedom, clarity, and ownership."
        />
        <meta property="og:image" content="/agency-workbench.webp" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>

      <main className="home-main">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="hero-kicker">Independent builder</p>
            <h1>
              <span>I build tools that expand</span>
              <span>human agency and sovereignty.</span>
            </h1>
            <p className="hero-intro">
              Practical systems that help people and communities act with more
              freedom, clarity, and ownership.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                View projects
              </a>
              <Link className="text-action" href="/now">
                What I am doing now
              </Link>
            </div>
          </div>

          <figure className="hero-visual">
            <Image
              src="/agency-workbench.webp"
              alt="Hands assembling an open electronic device at a workbench"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 767px) 100vw, 42vw"
            />
          </figure>
        </section>

        <ProjectArchive />

        <section className="principles section-shell reveal">
          <div>
            <h2>More capability. Less dependency.</h2>
            <p className="principles-intro">
              The best tools leave people stronger, more informed, and more able to
              shape what happens next.
            </p>
          </div>

          <div className="principle-stack">
            <article className="principle">
              <h3>Increase capability</h3>
              <p>
                Make difficult actions understandable, accessible, and practical
                without hiding how the system works.
              </p>
            </article>
            <article className="principle">
              <h3>Preserve ownership</h3>
              <p>
                Give people meaningful control over their identity, assets, data, and
                choices.
              </p>
            </article>
            <article className="principle">
              <h3>Strengthen coordination</h3>
              <p>
                Help communities turn shared intent into transparent decisions and
                durable action.
              </p>
            </article>
          </div>
        </section>

        <section className="now-preview section-shell reveal">
          <figure className="now-portrait">
            <Image
              src="/coderdan.png"
              alt="Coder Dan with a llama, both wearing glasses"
              fill
              sizes="(max-width: 767px) 76vw, 28vw"
            />
          </figure>

          <div className="now-heading">
            <h2>Now</h2>
            <p>
              Life and work are currently centered on family, agentic engineering,
              and community-led systems.
            </p>
            <Link className="text-action" href="/now">
              Read the full update
            </Link>
          </div>

          <div className="now-focus" aria-label="Current focus">
            <p>Living in mainland China</p>
            <p>Taking care of my toddler son</p>
            <p>Upskilling in agentic engineering</p>
            <p>Helping Aavegotchi become DAO-led</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
