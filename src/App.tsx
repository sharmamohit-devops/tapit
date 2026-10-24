import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { animate, stagger } from 'animejs'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CreditCard,
  Fingerprint,
  Hexagon,
  Link2,
  Menu,
  MousePointer2,
  Play,
  QrCode,
  RadioTower,
  Share2,
  ShieldCheck,
  Smartphone,
  Users,
  X,
  Zap,
  Layers3,
  Globe2,
  Sparkles,
} from 'lucide-react'

const reduceMotionSetting = { duration: 0.01 }

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={shouldReduceMotion ? reduceMotionSetting : { duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function Brand({ href = '#home' }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="Tapit home">
      <span className="brand-mark"><Hexagon size={23} strokeWidth={2.4} /><span /></span>
      <span>tapit</span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'App tour', href: '#app-tour' },
    { label: 'Plans', href: '#plans' },
  ]
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <a href="#plans" className="nav-cta">Explore Tapit <ArrowRight size={15} /></a>
        <button className="mobile-menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}>
            {links.map((link) => <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={15} /></a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-curves-backdrop" aria-hidden="true">
        <svg className="hero-curves-svg" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="hero-curve hero-curve-1" d="M-100 620 C200 480, 500 720, 760 520 S1100 280, 1540 420" />
          <path className="hero-curve hero-curve-2" d="M-80 700 C250 540, 480 780, 720 600 S1050 360, 1560 500" />
          <path className="hero-curve hero-curve-3" d="M-120 540 C180 400, 520 660, 800 440 S1120 200, 1580 340" />
          <path className="hero-curve hero-curve-4" d="M-60 780 C300 620, 460 840, 740 680 S1080 440, 1520 580" />
          <path className="hero-curve hero-curve-5" d="M-140 460 C160 320, 540 580, 820 360 S1140 120, 1600 260" />
          <path className="hero-curve hero-curve-6" d="M-40 850 C340 700, 440 900, 700 760 S1060 520, 1500 660" />
        </svg>
        <div className="hero-glow-orb hero-glow-orb-1" />
        <div className="hero-glow-orb hero-glow-orb-2" />
      </div>
      <div className="hero-grain" aria-hidden="true" />
      <Header />
      <div className="hero-layout page-container">
        <div className="hero-copy">
          <Reveal>
            <h1>Your connections.<br /><span>One tap away.</span></h1>
            <p className="hero-description">Your professional identity, ready to share. Keep every connection within reach.</p>
            <div className="hero-actions">
              <a href="#plans" className="button button-light">Explore Tapit <ArrowRight size={17} /></a>
              <a href="#features" className="text-link text-link-light">Discover features <ArrowDownRight size={17} /></a>
            </div>
          </Reveal>
        </div>
        <div className="hero-art" role="img" aria-label="Two Tapit phones meet to share a contact">
          <div className="hero-phone-stage" aria-hidden="true">
            <img className="hero-tap-phone hero-tap-phone-lower" src="/assets/hero-phone-arjun.webp" alt="" decoding="async" />
            <div className="hero-tap-signal">
              <span /><span /><span />
            </div>
            <img className="hero-tap-phone hero-tap-phone-upper" src="/assets/hero-phone-mahika.webp" alt="" decoding="async" />
          </div>
          <div className="visual-caption"><span className="caption-line" />A first impression that stays with you</div>
        </div>
      </div>
      <div className="hero-bottom-line page-container">
        <span>IDENTITY</span><span className="hero-bottom-dot" /><span>SHARE</span><span className="hero-bottom-dot" /><span>CONNECT</span>
        <span className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight size={14} /></span>
      </div>
    </section>
  )
}

function MiniProfile() {
  return (
    <div className="mini-visual profile-visual">
      <div className="mini-device profile-device">
        <div className="mini-device-top"><span /><i /><span /></div>
        <div className="mini-logo"><Hexagon size={12} /> TAPIT</div>
        <div className="profile-avatar"><span /></div>
        <strong className="preview-name">Your Name</strong>
        <span className="preview-role">Professional title</span>
        <div className="social-dots"><b>in</b><b>◎</b><b>↗</b><b>▶</b></div>
        <div className="preview-action">Share card <Share2 size={10} /></div>
        <div className="preview-tabs"><span>Contact</span><span>Links</span><span>About</span></div>
      </div>
      <span className="visual-glow" />
    </div>
  )
}

function ExchangeVisual() {
  return (
    <div className="mini-visual exchange-visual">
      <div className="exchange-device">
        <div className="mini-device-top"><span /><i /><span /></div>
        <span className="exchange-title">Tap to Connect</span>
        <span className="exchange-copy">Bring your phones close<br />to exchange contact cards.</span>
        <div className="exchange-radar"><span /><span /><span /><i><Smartphone size={18} /></i><b><Smartphone size={18} /></b></div>
        <span className="exchange-status"><span /> Ready to connect</span>
      </div>
    </div>
  )
}

function QrVisual() {
  const cells = Array.from({ length: 121 }, (_, index) => {
    const row = Math.floor(index / 11)
    const col = index % 11
    const inFinder = (r: number, c: number) => (r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3)
    const finderCell = (r: number, c: number) => {
      const localR = r < 3 ? r : r - 8
      const localC = c < 3 ? c : c - 8
      return localR === 0 || localR === 2 || localC === 0 || localC === 2 || (localR === 1 && localC === 1)
    }
    return inFinder(row, col) ? finderCell(row, col) : ((row * 7 + col * 5 + row * col) % 4 !== 1)
  })
  return (
    <div className="mini-visual qr-visual">
      <div className="qr-device">
        <div className="mini-device-top"><span /><i /><span /></div>
        <span className="qr-device-heading">Share your card</span>
        <div className="qr-code" aria-hidden="true">{cells.map((active, index) => <span key={index} className={active ? 'active' : ''} />)}</div>
        <div className="share-url"><Link2 size={11} /> tapit.app/your-card <Share2 size={10} /></div>
        <div className="qr-share-button">Share link <ArrowRight size={11} /></div>
        <div className="share-apps"><span>●</span><span>◉</span><span>◎</span><span>in</span></div>
      </div>
    </div>
  )
}

function ContactsVisual() {
  const contacts = [
    ['AM', 'Connection one', 'Professional'],
    ['RK', 'Connection two', 'Founder'],
    ['PS', 'Connection three', 'Designer'],
  ]
  return (
    <div className="mini-visual contacts-visual">
      <div className="contacts-device">
        <div className="mini-device-top"><span /><i /><span /></div>
        <div className="contacts-heading">My Connections <span>•••</span></div>
        <div className="contacts-search"><span /><i>Search contacts...</i></div>
        <div className="contacts-filter"><b>All</b><span>People</span><span>Work</span></div>
        {contacts.map(([initials, name, role], index) => (
          <div className="contact-row" key={name}><span className={`contact-avatar avatar-${index}`}>{initials}</span><span className="contact-meta"><strong>{name}</strong><small>{role}</small></span><ArrowUpRight size={11} /></div>
        ))}
      </div>
    </div>
  )
}

function NfcVisual() {
  return (
    <div className="mini-visual nfc-visual">
      <div className="nfc-rock" />
      <motion.div className="nfc-product-card" whileHover={{ rotate: -4, y: -7 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
        <div className="nfc-mark"><Hexagon size={28} strokeWidth={1.5} /></div>
        <span>TAPIT</span>
        <RadioTower className="nfc-waves" size={19} />
      </motion.div>
      <span className="nfc-caption">A more memorable first impression.</span>
    </div>
  )
}

const featureItems = [
  {
    number: '01', title: 'Create your digital card',
    category: 'YOUR DIGITAL IDENTITY',
    description: 'Add your professional details and supported social links. Keep your identity clear, personal, and easy to share.',
    icon: <Fingerprint size={19} strokeWidth={1.8} />, visual: <MiniProfile />,
  },
  {
    number: '02', title: 'Tap-to-Tap exchange',
    category: 'NEARBY CONNECTIONS',
    description: 'Exchange cards with nearby compatible phones through the Tapit connection experience.',
    icon: <RadioTower size={19} strokeWidth={1.8} />, visual: <ExchangeVisual />,
  },
  {
    number: '03', title: 'QR code & shareable link',
    category: 'INSTANT SHARING',
    description: 'Share a QR code or public card link so people can open your profile from a browser.',
    icon: <QrCode size={19} strokeWidth={1.8} />, visual: <QrVisual />,
  },
  {
    number: '04', title: 'Save & manage contacts',
    category: 'YOUR NETWORK',
    description: 'Keep received cards together in Connect, and return to your professional network when you need it.',
    icon: <Users size={19} strokeWidth={1.8} />, visual: <ContactsVisual />,
  },
  {
    number: '05', title: 'Premium NFC card',
    category: 'MADE TO BE REMEMBERED',
    description: 'A physical card concept designed to open your digital card on compatible NFC-enabled phones.',
    icon: <RadioTower size={19} strokeWidth={1.8} />, visual: <NfcVisual />,
  },
]

function SectionHeading({ label, title, description, light = false }: { label: string; title: ReactNode; description: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <span className="section-pill">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="features-section section-light">
      <div className="feature-bg-orb feature-bg-orb-left" aria-hidden="true" />
      <div className="feature-bg-orb feature-bg-orb-right" aria-hidden="true" />
      <div className="page-container feature-container">
        <Reveal>
          <SectionHeading
            label="FEATURES"
            title={<>Everything you need for <span>smarter networking.</span></>}
            description="Create your digital identity, share it, and keep every connection organised."
          />
        </Reveal>
        <div className="feature-grid">
          {featureItems.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 0.07} className="feature-reveal">
              <motion.article className="feature-card" whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                <div className="feature-card-top"><span className="feature-icon">{feature.icon}</span><span className="feature-number">{feature.number}</span></div>
                <span className="feature-category">{feature.category}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {feature.visual}
              </motion.article>
            </Reveal>
          ))}
        </div>
        <div className="feature-note"><span className="note-dot" /> Tap-to-Tap and NFC experiences depend on device compatibility. QR and link sharing are separate alternatives.</div>
      </div>
    </section>
  )
}

const appTourVideos = [
  { number: '01', label: 'YOUR DIGITAL IDENTITY', title: 'Create your digital card', description: 'Build a profile that feels like you.', style: 'video-frame-profile' },
  { number: '02', label: 'A MOMENT TO CONNECT', title: 'Share in a moment', description: 'Connect with a tap, QR code, or link.', style: 'video-frame-sharing' },
  { number: '03', label: 'EVERY CONNECTION', title: 'Keep connections close', description: 'Find the people you have met, all in one place.', style: 'video-frame-contacts' },
]

function AppTour() {
  return (
    <section id="app-tour" className="app-tour-section section-light">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            label="THE TAPIT APP"
            title={<>See how it <span>all comes together.</span></>}
            description="A closer look at the simple ways Tapit helps you introduce yourself, share your details, and stay connected."
          />
        </Reveal>
        <div className="app-tour-grid">
          {appTourVideos.map((video, index) => (
            <Reveal key={video.number} delay={index * 0.08}>
              <article className="app-tour-card">
                <div className={`app-tour-video ${video.style}`} aria-label={`Video coming soon: ${video.title}`}>
                  <span className="video-frame-orbit video-frame-orbit-one" aria-hidden="true" />
                  <span className="video-frame-orbit video-frame-orbit-two" aria-hidden="true" />
                  <span className="video-frame-index">{video.number}</span>
                  <span className="video-play-mark" aria-hidden="true"><Play size={20} fill="currentColor" /></span>
                  <span className="video-frame-status">VIDEO COMING SOON</span>
                </div>
                <div className="app-tour-card-copy">
                  <span className="app-tour-card-label">{video.label}</span>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <span className="app-tour-card-arrow"><ArrowUpRight size={17} /></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function DownloadBanner() {
  return (
    <section className="download-section section-light" aria-labelledby="download-heading">
      <div className="page-container">
        <Reveal>
          <div className="download-banner">
            <div className="download-banner-copy">
              <span className="download-kicker"><span /> THE TAPIT APP</span>
              <h2 id="download-heading">Your next introduction<br /><span>starts with a tap.</span></h2>
              <p>Make your professional identity easy to share—and every new connection easier to keep.</p>
              <div className="download-banner-actions">
                <a
                  href="https://play.google.com/store/search?q=Tapit&c=apps"
                  className="play-store-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Search for Tapit on Google Play"
                >
                  <Play size={22} fill="currentColor" />
                  <span><small>GET IT ON</small><strong>Google Play</strong></span>
                  <ArrowUpRight size={17} />
                </a>
                <span className="download-status">Search for Tapit on Google Play</span>
              </div>
            </div>
            <div className="download-banner-art" aria-hidden="true">
              <span className="download-art-ring download-art-ring-one" />
              <span className="download-art-ring download-art-ring-two" />
              <div className="premium-card">
                <span className="premium-card-shine" />
                <div className="premium-card-top"><span className="premium-card-brand"><Hexagon size={18} /> TAPIT</span><RadioTower size={19} /></div>
                <div className="premium-card-profile"><span className="premium-card-avatar">YN</span><span><strong>Your Name</strong><small>Professional identity</small></span></div>
                <div className="premium-card-bottom"><span>YOUR NETWORK. ONE TAP AWAY.</span><span className="premium-card-chip"><span /></span></div>
              </div>
              <span className="download-art-badge"><Zap size={15} fill="currentColor" /> One tap. A lasting connection.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Create your card', text: 'Add the professional details and links you want to share.', icon: <CreditCard size={19} /> },
    { n: '02', title: 'Share in a moment', text: 'Use a nearby exchange where supported, or share a QR code or link.', icon: <MousePointer2 size={19} /> },
    { n: '03', title: 'Stay connected', text: 'Revisit cards you have received in your Connect area.', icon: <Link2 size={19} /> },
  ]
  return (
    <section id="how-it-works" className="how-section section-light">
      <div className="page-container how-layout">
        <Reveal className="how-intro">
          <span className="section-pill">HOW IT WORKS</span>
          <h2>One simple flow.<br /><span>Better connections.</span></h2>
          <p>Less time exchanging details. More time building relationships.</p>
          <a href="#plans" className="button button-dark">Explore plans <ArrowRight size={16} /></a>
        </Reveal>
        <div className="steps-list">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <motion.div className="step-item" whileHover={{ x: 4 }}>
                <div className="step-number"><span>{step.n}</span></div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-text"><h3>{step.title}</h3><p>{step.text}</p></div>
                <ArrowUpRight size={18} className="step-arrow" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ title, label, description, status, features, action, featured = false, icon }: {
  title: string; label: string; description: string; status: string; features: string[]; action: string; featured?: boolean; icon: ReactNode
}) {
  return (
    <motion.article className={`plan-card ${featured ? 'plan-card-featured' : ''}`} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 250, damping: 22 }}>
      <div className="plan-card-top"><span className="plan-icon">{icon}</span>{featured && <span className="popular-pill">IN DEVELOPMENT</span>}</div>
      <h3>{title}</h3>
      <p className="plan-description">{description}</p>
      <div className="plan-price-row"><strong>{status}</strong></div>
      <p className="plan-label">{label}</p>
      <a href="#footer" className={`plan-action ${featured ? 'plan-action-light' : ''}`}>{action}<ArrowRight size={15} /></a>
      <div className="plan-divider" />
      <ul className="plan-feature-list">
        {features.map((feature) => <li key={feature}><span><Check size={12} strokeWidth={2.6} /></span>{feature}</li>)}
      </ul>
    </motion.article>
  )
}

function Plans() {
  return (
    <section id="plans" className="plans-section section-light">
      <div className="plans-top-glow" aria-hidden="true" />
      <div className="page-container plans-container">
        <Reveal>
          <SectionHeading
            label="PLANS & OPTIONS"
            title={<>Start simple. <span>Grow your network.</span></>}
            description="Start with Tapit’s core experience. More plan details will be shared as they are confirmed."
          />
        </Reveal>
        <div className="plans-grid">
          <Reveal delay={0.02}>
            <PlanCard
              title="Tapit Free"
              label="Intended free app access"
              description="The essentials for a shareable professional identity."
              status="Free to download*"
              icon={<Users size={20} />}
              action="Explore features"
              features={['Create and personalise a digital card', 'Add supported professional links', 'Share through QR code or a link', 'Access My Card and Connect']}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PlanCard
              title="Premium options"
              label="Plan details to be announced"
              description="Premium digital plan options are being considered."
              status="Coming soon"
              icon={<Sparkles size={20} />}
              featured
              action="Get updates"
              features={['Final plan structure is not announced', 'Included features will be confirmed', 'Pricing has not been finalised', 'No paid-plan commitment yet']}
            />
          </Reveal>
          <Reveal delay={0.18}>
            <PlanCard
              title="NFC Card"
              label="Physical product concept"
              description="A memorable physical way to point people to your digital card."
              status="Details soon"
              icon={<RadioTower size={20} />}
              action="Learn about Tapit"
              features={['Tap to open a public digital card', 'Requires compatible NFC phone settings', 'QR/link sharing remains an alternative', 'Price and availability not confirmed']}
            />
          </Reveal>
        </div>
        <p className="plans-disclaimer">*Tapit is intended to be free to download. Final launch status, supported features, paid options, and NFC-card terms must be confirmed before publication.</p>
        <div className="plan-benefits-strip">
          <div className="plan-benefit"><span><Layers3 size={18} /></span><div><strong>Digital identity</strong><small>Your professional profile</small></div></div>
          <div className="plan-benefit"><span><QrCode size={18} /></span><div><strong>Flexible sharing</strong><small>QR codes and links</small></div></div>
          <div className="plan-benefit"><span><Globe2 size={18} /></span><div><strong>Public card page</strong><small>Viewable in a browser</small></div></div>
          <div className="plan-benefit"><span><ShieldCheck size={18} /></span><div><strong>Clear by design</strong><small>Only approved details shared</small></div></div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { question: 'Is Tapit free to download?', answer: 'The intended model is free app access. Confirm the official store listing and launch status before publishing download links.' },
  { question: 'Do both people need Tapit?', answer: 'It depends on the sharing method. A public digital card opened through a QR code or link can be viewed in a browser. Tap-to-Tap requirements depend on the supported device and final app behaviour.' },
  { question: 'Is the NFC card available to order?', answer: 'A premium NFC card is part of the product direction, but pricing, availability, shipping, and purchase details have not been confirmed.' },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section id="faq" className="faq-section section-light">
      <div className="page-container faq-layout">
        <Reveal className="faq-intro">
          <span className="section-pill">A FEW ANSWERS</span>
          <h2>Good to know<br /><span>before you connect.</span></h2>
          <p>Clear answers about sharing, compatibility, and upcoming options.</p>
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`} key={faq.question}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index}>
                <span>{faq.question}</span><ChevronDown size={17} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}><p>{faq.answer}</p></motion.div>}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="page-container">
        <div className="footer-cta">
          <div><span className="footer-kicker">TAPIT</span><h2>Make every introduction <span>count.</span></h2></div>
        </div>
        <div className="footer-main">
          <div className="footer-brand-column"><Brand /><p>Your professional identity, one tap away.</p></div>
          <div className="footer-links-column"><strong>Explore</strong><a href="#features">Features</a><a href="#app-tour">App tour</a><a href="#plans">Plans</a></div>
          <div className="footer-links-column"><strong>Help</strong><a href="#faq">FAQs</a><a href="/privacy-policy">Privacy policy</a></div>
        </div>
        <div className="footer-bottom" id="legal-details"><span>© {new Date().getFullYear()} Tapit. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
      </div>
    </footer>
  )
}

function PrivacyPolicy() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = 'Privacy Policy | Tapit'

    if (shouldReduceMotion) return

    const heroAnimation = animate('.privacy-hero-copy > *, .privacy-glance', {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: stagger(90),
      duration: 680,
      ease: 'outExpo',
    })
    const sectionAnimations: ReturnType<typeof animate>[] = []

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        sectionAnimations.push(animate(entry.target, {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 620,
          ease: 'outQuad',
        }))
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' })

    document.querySelectorAll('.privacy-intro-card, .privacy-content > section, .privacy-return-card').forEach((element) => {
      observer.observe(element)
    })

    return () => {
      heroAnimation.cancel()
      sectionAnimations.forEach((animation) => animation.cancel())
      observer.disconnect()
    }
  }, [shouldReduceMotion])

  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <div className="privacy-header-inner">
          <Brand href="/#home" />
          <a className="privacy-back-link" href="/#home"><ArrowUpRight size={16} /> Back to Tapit</a>
        </div>
      </header>
      <div className="privacy-hero">
        <div className="privacy-hero-orbit privacy-hero-orbit-one" aria-hidden="true" />
        <div className="privacy-hero-orbit privacy-hero-orbit-two" aria-hidden="true" />
        <div className="privacy-container privacy-hero-layout">
          <div className="privacy-hero-copy">
            <span className="privacy-eyebrow"><span /> PRIVACY, BY DESIGN</span>
            <h1>Your privacy.<br /><span>Our priority.</span></h1>
            <p>A clear, considered look at the information that may be processed when you visit Tapit.</p>
            <div className="privacy-meta">
              <span><ShieldCheck size={15} /> Last updated: October 23, 2026</span>
              <i aria-hidden="true" />
              <span>Website privacy notice</span>
            </div>
          </div>
          <motion.aside
            className="privacy-glance"
            aria-label="Privacy at a glance"
            whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="privacy-glance-heading">
              <span className="privacy-glance-icon"><ShieldCheck size={20} /></span>
              <span><small>A CLEARER VIEW</small><strong>Privacy at a glance</strong></span>
              <span className="privacy-glance-status"><span /> LIVE</span>
            </div>
            <div className="privacy-glance-divider" />
            <ul>
              <li><Check size={15} /><span>No account or checkout on this website</span></li>
              <li><Check size={15} /><span>No analytics or advertising trackers</span></li>
              <li><Check size={15} /><span>Third-party services explained below</span></li>
            </ul>
            <span className="privacy-glance-footnote">The full details are just a scroll away.</span>
          </motion.aside>
        </div>
      </div>
      <motion.div
        className="privacy-container privacy-layout"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
      >
        <nav className="privacy-toc" aria-label="Privacy policy contents">
          <div className="privacy-toc-heading"><span>THE QUICK GUIDE</span><strong>On this page</strong></div>
          {[
            ['01', 'Scope', '#scope'],
            ['02', 'Information and use', '#information'],
            ['03', 'Third-party services', '#third-parties'],
            ['04', 'Retention and security', '#retention-security'],
            ['05', 'Your choices', '#your-choices'],
            ['06', 'Tapit app', '#app-privacy'],
            ['07', 'Contact', '#contact'],
          ].map(([number, label, href]) => (
            <motion.a key={href} href={href} whileHover={shouldReduceMotion ? undefined : { x: 3 }}>
              <span>{number}</span> {label}
            </motion.a>
          ))}
          <div className="privacy-toc-note"><ShieldCheck size={15} /> Clear answers, no legal maze.</div>
        </nav>
        <article className="privacy-content">
          <div className="privacy-intro-card">
            <span className="privacy-intro-icon"><Fingerprint size={20} /></span>
            <div><span className="privacy-intro-label">THE SHORT VERSION</span><p className="privacy-intro">We believe privacy information should be straightforward. This notice explains what may be processed when you use the Tapit marketing website and what choices you have.</p></div>
          </div>
          <section id="scope">
            <h2>1. What this policy covers</h2>
            <p>This notice applies to the Tapit website you are viewing. It does not describe the data practices of third-party websites, app stores, or a future Tapit mobile app. Those services have their own privacy notices.</p>
          </section>
          <section id="information">
            <h2>2. Information and how it is used</h2>
            <p>The website does not currently offer account registration, contact forms, or checkout. When you request a page, the website host or its infrastructure providers may process basic technical information needed to deliver and protect the site, such as your IP address, request time, browser or device details, and the page requested.</p>
            <p>We do not currently include analytics or advertising-tracking tools in the website code. We use the information described above only as needed to operate, maintain, troubleshoot, and protect the website, subject to the practices of the hosting provider.</p>
          </section>
          <section id="third-parties">
            <h2>3. Third-party services and links</h2>
            <p>The site loads typefaces from Google Fonts. When your browser requests those fonts, Google may receive technical request information. Please review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s Privacy Policy</a> for details.</p>
            <p>The download banner links to a Google Play search. Following that link takes you to Google Play, which is governed by Google’s own terms and privacy practices. Tapit does not control third-party services or their data handling.</p>
          </section>
          <section id="retention-security">
            <h2>4. Retention and security</h2>
            <p>Technical request logs, if collected by the hosting provider, are retained according to that provider’s operational and security practices. We do not control the provider’s exact retention period. Reasonable technical measures are used to help protect the website, but no internet transmission or storage method can be guaranteed to be completely secure.</p>
          </section>
          <section id="your-choices">
            <h2>5. Cookies and your choices</h2>
            <p>The website does not currently use cookies for analytics or advertising. Your browser may offer controls to limit cookies, block external font requests, or manage how links to third-party services open. Blocking external fonts may change how the site looks.</p>
          </section>
          <section id="app-privacy">
            <h2>6. Tapit mobile app</h2>
            <p>This website notice does not cover information that may be handled by the Tapit app, including profile details, contacts, device permissions, or sharing features. App data practices depend on the final app and its services. A separate, complete app privacy notice should be provided before those features are available.</p>
          </section>
          <section id="contact">
            <h2>7. Contact and policy updates</h2>
            <p>If this notice changes, the updated version will be posted on this page with a revised date. A privacy contact address has not yet been published for Tapit; it should be added here before the service launches publicly.</p>
          </section>
          <div className="privacy-return-card">
            <span className="privacy-return-icon"><Globe2 size={19} /></span>
            <span><strong>That’s the full picture.</strong><small>Thanks for taking the time to understand how this website works.</small></span>
            <a className="privacy-home-link" href="/#home">Back to Tapit <ArrowUpRight size={16} /></a>
          </div>
        </article>
      </motion.div>
      <footer className="privacy-footer">
        <div className="privacy-container"><span>© {new Date().getFullYear()} Tapit</span><a href="/#home">Back to website ↑</a></div>
      </footer>
    </main>
  )
}

export default function App() {
  if (window.location.pathname.replace(/\/+$/, '') === '/privacy-policy') {
    return <PrivacyPolicy />
  }

  return (
    <main>
      <Hero />
      <Features />
      <AppTour />
      <DownloadBanner />
      <HowItWorks />
      <Plans />
      <FAQ />
      <Footer />
    </main>
  )
}
