import { useState, useEffect } from "react"
//ROUTER
import { Link } from "react-router-dom"
//CUSTOM
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  useEffect(() => {
    //nav style handler
    const handleNav = () => {
      const scrollPos = window.scrollY
      scrollPos < 100 ? setScrolled(false) : setScrolled(true) 

    }
    
    window.addEventListener("scroll", handleNav)
  
    return () => window.removeEventListener("scroll", handleNav)
  }, [])
  

  return (
    <nav className={`paddingX w-full flex items-center py-5
    ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <section className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className="flex items-center gap-2"
        onClick={() => { 
          setActive("") 
          window.scrollTo(0,0)
        }}>

          <img src={logo} alt="site's logo" className="w-9 h-9 object-cover" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kristof &nbsp;
            <span className="sm:block hidden"> | Portfolio</span>
          </p>

        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map(({id, title}) => (
              <li key={id} className={`hover:text-white text-[18px] font-medium cursor-pointer 
              ${active === title ? "text-white" : "text-secondary"}`}
              onClick={ () => setActive(title) }>
                <Link to={`#${id}`}>{title}</Link>
              </li>
            ))
          }
        </ul>
        {/* MOBILE */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? menu : close}
            alt="hamburger icon" 
            className="w-[28px] h-[28px] object-contain"
            onClick={() => handleToggle()}
          />
          <div className={`p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
          ${toggle ? "hidden" : "flex"}`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map(({id, title}) => (
                <li
                  key={id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(title);
                  }}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar