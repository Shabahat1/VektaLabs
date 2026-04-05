import { motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import Label from './ui/Label'

const steps = [
  {
    num: '01',
    title: 'Scoping call',
    desc: 'We align on your stack, define test scope, and set expectations. Free, no commitment, no sales pressure.',
  },
  {
    num: '02',
    title: 'Manual testing & research',
    desc: 'Our researchers test your system by hand. We map the attack surface, probe for vulnerabilities, and attempt real exploitation in a controlled environment.',
  },
  {
    num: '03',
    title: 'Report, debrief & support',
    desc: 'You receive a full findings report within 48 hours — CVSS-scored, evidence-backed, and written for your engineering team. We stay available for questions.',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Label text="PROCESS" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2
            className="font-display font-medium text-paper mt-4"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              letterSpacing: '-0.03em',
            }}
          >
            How an engagement works.
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0 mt-16">
          {steps.map((step, index) => (
            <div key={step.num} className="flex md:flex-1 items-start">
              <FadeIn delay={index * 0.15} className="flex-1">
                <div>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-stone-2">
                    {step.num}
                  </span>
                  <h3 className="font-display font-medium text-[20px] text-paper mt-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone leading-[1.7] mt-2 max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>

              {/* Connecting dashed line — desktop only */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block border-t border-dashed border-ink-3 flex-1 mt-[22px] mx-4 min-w-[40px]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
