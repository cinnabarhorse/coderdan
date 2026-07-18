import Image from 'next/image'

const project = {
  name: 'Aavegotchi',
  href: 'https://aavegotchi.com',
  image: '/aavegotchi-homepage.png',
  description:
    'A community-owned game protocol blending digital collectibles, DeFi, and onchain governance.',
  disciplines: 'Product engineering, protocol, community',
}

export default function ProjectArchive() {
  return (
    <section className="projects section-shell" id="projects">
      <div className="section-heading reveal">
        <h2>Selected work</h2>
        <p>
          Products, protocols, and knowledge systems built to make open technology
          more useful.
        </p>
      </div>

      <article className="lead-project reveal">
        <a
          className="project-media project-media-lead aavegotchi-project-media"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={project.image}
            alt="Three Aavegotchis from the current Aavegotchi homepage"
            fill
            sizes="(max-width: 768px) 100vw, 64vw"
          />
        </a>

        <div className="lead-project-copy">
          <h3>
            <a href={project.href} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          </h3>
          <p>{project.description}</p>
          <span>{project.disciplines}</span>
        </div>
      </article>
    </section>
  )
}
