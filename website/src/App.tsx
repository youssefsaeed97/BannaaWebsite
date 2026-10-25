import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
