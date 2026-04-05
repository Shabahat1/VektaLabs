import FadeIn from './ui/FadeIn'
import Label from './ui/Label'

const items = [
  {
    title: 'AI-native expertise',
    body: 'We understand LLM attack surfaces that most pentest firms have never encountered. Prompt injection is a specialty here, not a footnote.',
  },
  {
    title: 'Manual, not automated',
    body: 'No scanners presented as a pentest. Every finding is discovered, triaged, and explained by a human researcher who understands your stack.',
  },
  {
    title: 'Reports engineers can use',
    body: 'CVSS-scored findings, clear reproduction steps, and specific remediation guidance. Not a list of CVEs with no context.',
  },
  {
    title: 'Transparent engagements',
    body: 'Scoped work, honest pricing, no retainer pressure. You know what you are getting before we begin.',
  },
]

export default function WhyVekta() {
  return (
    <section id="about" className="py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Label text="WHY VEKTA LABS" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2
            className="font-display font-medium text-paper mt-4"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              letterSpacing: '-0.03em',
            }}
          >
            The difference between
            <br className="hidden md:block" />
            {' '}a test and a real answer.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-stone text-base leading-[1.7] max-w-xl mt-3">
            Most security reports tell you what is wrong. Ours tell you how to fix it.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {items.map((item, index) => (
            <FadeIn key={index} direction="left" delay={index * 0.12}>
              <div className="border-l-2 border-[rgba(170,238,136,0.4)] pl-5">
                <h3 className="font-display font-medium text-[16px] text-paper tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-stone leading-[1.7] mt-1.5">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
