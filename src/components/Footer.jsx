import FadeIn from './ui/FadeIn'

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-ink-2 py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Column 1 — Brand */}
            <div>
              <a href="/" className="flex items-center gap-2.5 mb-4">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 26 Q50 4 92 26 L50 90 Z" fill="#AAEE88" />
                </svg>
                <span className="font-display font-medium text-paper text-[14px]">
                  Vekta Labs
                </span>
              </a>
              <p className="text-[13px] text-stone leading-relaxed">
                We break it before they do.
              </p>
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.08em] text-stone-2 uppercase block mb-4">
                NAVIGATION
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[13px] text-stone hover:text-paper transition-colors duration-150 mb-2"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 3 — Contact */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.08em] text-stone-2 uppercase block mb-4">
                CONTACT
              </span>
              <a
                href="mailto:contact@vektalabs.io"
                className="block font-mono text-[13px] text-stone hover:text-paper transition-colors duration-150 mb-3"
              >
                contact@vektalabs.io
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-stone hover:text-paper transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div className="border-t border-ink-2 pt-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="font-mono text-[11px] text-stone-2">
            © 2025 Vekta Labs
          </span>
          <span className="font-mono text-[11px] text-stone-2">
            Karachi, Pakistan
          </span>
        </div>
      </div>
    </footer>
  )
}
