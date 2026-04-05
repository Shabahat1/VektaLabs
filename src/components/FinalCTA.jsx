import FadeIn from './ui/FadeIn'
import Button from './ui/Button'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-40 px-6 md:px-8 lg:px-12 border-t border-ink-2">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2
            className="font-display font-medium text-paper"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              letterSpacing: '-0.03em',
            }}
          >
            Ready to find your
            <br />
            vulnerabilities first?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-stone text-base leading-[1.7] max-w-md mx-auto mt-4">
            We are currently taking on new engagements. Start with a free 30-minute scoping call.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-8">
            <Button variant="primary" href="mailto:contact@vektalabs.io">
              Book a Free Call →
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-6">
            <a
              href="mailto:contact@vektalabs.io"
              className="font-mono text-[13px] text-stone hover:text-paper transition-colors duration-150"
            >
              Or reach us directly at contact@vektalabs.io
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
