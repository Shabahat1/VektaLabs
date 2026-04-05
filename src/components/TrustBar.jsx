import FadeIn from './ui/FadeIn'

export default function TrustBar() {
  const items = [
    'OWASP LLM TOP 10 ALIGNED',
    'MANUAL TESTING ONLY',
    'CERTIFIED RESEARCHERS',
    '48HR REPORT DELIVERY',
  ]

  return (
    <FadeIn delay={0.2}>
      <div className="border-t border-b border-ink-2 py-6">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {items.map((item, i) => (
              <span
                key={i}
                className="font-mono text-[11px] tracking-[0.08em] text-stone-2 uppercase"
              >
                {i > 0 && <span className="mr-6 text-ink-3 hidden md:inline">·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
