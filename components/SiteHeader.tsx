import Link from 'next/link'

const navigation = [
  { label: 'projects', href: '/#projects' },
  { label: 'now', href: '/now' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="site-mark" href="/" aria-label="[cd] Coderdan home">
          [cd]
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
