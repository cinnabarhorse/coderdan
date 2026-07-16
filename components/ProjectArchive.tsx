import Image from 'next/image'

const projects = [
  {
    name: 'Aavegotchi',
    href: 'https://aavegotchi.com',
    image: '/aavegotchicurve.png',
    description:
      'A community-owned game protocol blending digital collectibles, DeFi, and onchain governance.',
    disciplines: 'Product engineering, protocol, community',
    lead: true,
  },
  {
    name: 'Aavegotchi Wiki',
    href: 'https://wiki.aavegotchi.com',
    image: '/aavegotchiwiki.png',
    description:
      'An open knowledge system that makes a complex game economy legible and useful.',
    disciplines: 'Documentation, information architecture',
  },
  {
    name: 'Bullionix',
    href: 'https://bullionix.io',
    image: '/bullionix_thumbnail.png',
    description:
      'A gold-backed NFT marketplace where collectors could mint, own, and trade digital objects.',
    disciplines: 'Product design, smart contracts',
  },
  {
    name: 'YieldHero',
    href: 'https://yieldhero.app',
    image: '/yieldhero.jpg',
    description:
      'A practical suite for managing Aave yield and supporting open-source builders.',
    disciplines: 'DeFi, interface design',
  },
  {
    name: 'Mintbase NFT Demo',
    href: 'https://mintbase-auth.now.sh',
    image: '/mintbaseauth.jpg',
    description:
      'An early experiment using NFT tickets to give conference attendees more influence.',
    disciplines: 'Rapid prototyping, onchain identity',
  },
]

export default function ProjectArchive() {
  const [leadProject, ...supportingProjects] = projects

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
          className="project-media project-media-lead"
          href={leadProject.href}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={leadProject.image}
            alt={`${leadProject.name} product interface`}
            fill
            sizes="(max-width: 768px) 100vw, 64vw"
          />
        </a>

        <div className="lead-project-copy">
          <h3>
            <a href={leadProject.href} target="_blank" rel="noreferrer">
              {leadProject.name}
            </a>
          </h3>
          <p>{leadProject.description}</p>
          <span>{leadProject.disciplines}</span>
        </div>
      </article>

      <div className="project-grid">
        {supportingProjects.map((project) => (
          <article className="project-item reveal" key={project.name}>
            <a
              className="project-media"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={project.image}
                alt={`${project.name} product interface`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </a>

            <div className="project-copy">
              <h3>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h3>
              <p>{project.description}</p>
              <span>{project.disciplines}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
