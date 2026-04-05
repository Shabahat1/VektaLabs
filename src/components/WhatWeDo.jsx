import FadeIn from './ui/FadeIn'
import Label from './ui/Label'

const services = [
  {
    num: '01',
    title: 'Web Application Penetration Testing',
    desc: 'Manual, in-depth security testing of your web application. We find what automated scanners miss and deliver findings your team can actually fix.',
  },
  {
    num: '02',
    title: 'AI & LLM Security Assessment',
    desc: 'Full OWASP LLM Top 10 coverage. We test your language model integrations for prompt injection, insecure outputs, data exposure, and model extraction attempts.',
  },
  {
    num: '03',
    title: 'Chatbot & Conversational AI Security',
    desc: 'We probe your AI chatbot for jailbreaks, privilege escalation, and data leakage vectors that standard security tooling does not detect.',
  },
  {
    num: '04',
    title: 'API Security Testing',
    desc: 'Broken object-level authorization, authentication gaps, mass assignment, and rate-limiting flaws — we audit the full API attack surface.',
  },
  {
    num: '05',
    title: 'Cloud Security Review',
    desc: 'IAM misconfigurations, exposed storage, and over-permissioned roles across your AWS infrastructure. We find the configurations that become headlines.',
  },
  {
    num: '06',
    title: 'RAG Pipeline Audits',
    desc: 'We assess your retrieval-augmented generation systems for context injection, unauthorized data access, and memory manipulation vulnerabilities specific to production AI.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Label text="SERVICES" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2
            className="font-display font-medium text-paper mt-4"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              letterSpacing: '-0.03em',
            }}
          >
            What we test.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-stone text-base leading-[1.7] max-w-xl mt-3">
            Every engagement is manual. Every report is built for engineers, not executives.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {services.map((service, index) => (
            <FadeIn key={service.num} delay={index * 0.08}>
              <div
                className="bg-[#111111] border border-ink-2 rounded-[2px] p-7 md:p-8 transition-colors duration-200 hover:border-[rgba(170,238,136,0.3)] h-full"
              >
                <span className="font-mono text-[11px] tracking-[0.08em] text-stone-2">
                  {service.num}
                </span>
                <h3 className="font-display font-medium text-[18px] text-paper mt-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-stone leading-[1.7] mt-2">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
