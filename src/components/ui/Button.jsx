import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', onClick, href }) {
  const base = "inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-medium transition-all duration-200 rounded-sm cursor-pointer"

  const styles = {
    primary: "bg-accent text-ink hover:bg-accent-hover active:scale-[0.98]",
    ghost: "border border-ink-3 text-stone hover:border-stone-3 hover:text-paper active:scale-[0.98]",
    text: "text-stone hover:text-paper underline underline-offset-4"
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Tag href={href} onClick={onClick} className={`${base} ${styles[variant]}`}>
        {children}
      </Tag>
    </motion.div>
  )
}
