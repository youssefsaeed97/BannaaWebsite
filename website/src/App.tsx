import { CoolOff } from './components/CoolOff'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { MadeFor } from './components/MadeFor'
import { Problem } from './components/Problem'
import { SkipLink } from './components/SkipLink'
import { Trust } from './components/Trust'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <CoolOff />
        <Trust />
        <MadeFor />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
