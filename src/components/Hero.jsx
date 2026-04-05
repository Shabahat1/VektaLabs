import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Hero() {
  const headlineWords = ['We', 'break', 'it', 'before', 'they', 'do.']

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }

  const word = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const bottomItems = [
    'WEB APP PENTESTING',
    'AI/LLM SECURITY',
    'CHATBOT AUDITS',
    'API SECURITY'
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Horizon line */}
      <div className="absolute left-0 right-0 top-[60%] h-[1px] bg-ink-2" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-8 lg:px-12 w-full pt-32 pb-40">
        {/* Label */}
        <motion.span
          className="font-mono text-[11px] tracking-[0.08em] text-stone-2 uppercase block mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          OFFENSIVE SECURITY
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="font-display font-medium text-paper leading-[1.05] mb-8"
          style={{
            fontSize: 'clamp(48px, 7vw, 96px)',
            letterSpacing: '-0.04em',
          }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap gap-x-[0.3em]">
            {headlineWords.map((w, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <motion.span className="inline-block" variants={word}>
                  {w}
                </motion.span>
              </span>
            ))}
          </div>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-stone text-base md:text-[17px] leading-[1.7] max-w-xl mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Vekta Labs is a cybersecurity research firm. We test web applications, 
          AI systems, and LLM-powered products for real vulnerabilities — before 
          adversaries find them.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button variant="primary" href="#contact">
            Book a Free Call →
          </Button>
          <Button variant="ghost" href="#services">
            View Services
          </Button>
        </motion.div>
      </div>

      {/* Bottom service bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 border-t border-ink-2 py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          {bottomItems.map((item, i) => (
            <span key={i} className="font-mono text-[11px] tracking-[0.08em] text-stone-2">
              {i > 0 && <span className="mr-6 text-ink-3">·</span>}
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
