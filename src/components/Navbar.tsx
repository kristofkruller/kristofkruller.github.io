import { useState, useEffect } from "react"
//ROUTER
import { Link } from "react-router-dom"
//CUSTOM
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
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
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className="flex items-center gap-2"
        onClick={() => { 
          setActive("") 
          window.scrollTo(0,0)
        }}>

          <img src={logo} alt="site's logo" className="w-9 h-9 object-contain" />
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
      </div>
    </nav>
  )
}

export default Navbar