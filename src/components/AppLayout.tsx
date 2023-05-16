import { Contact, Hero, Navbar, StarsCanvas } from "."
import { TsxChildren } from "../../interfaces"

const AppLayout = ({ children }: TsxChildren) => {
  return (
    <main className='relative z-0 bg-primary'>
        <header className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        {/* Header, Landing section */}
            <Navbar />
            <Hero />
        </header>

        {children}

        <footer className='relative z-0'>
        {/* Contact, 3D stars section */}
            <Contact />
            <StarsCanvas />
        </footer>
    </main>
  )
}

export default AppLayout