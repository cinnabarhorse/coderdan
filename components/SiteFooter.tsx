const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/cinnabarhorse' },
  { label: 'X', href: 'https://twitter.com/coderdannn' },
  { label: 'Medium', href: 'https://medium.com/@coderdannn' },
  { label: 'DEV', href: 'https://dev.to/coderdan' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p>Copyright 2026</p>

        <nav aria-label="Social links">
          {socialLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
