import { headerLogo } from "../assets/images/"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants/index"

const Nav = () => {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">

      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img height={29} width={130} src={headerLogo} alt="Logo" />
        </a>

        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (

            <li key={item.label}>
              <a className="font-[montserrat] leading-normal text-gray-500" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img height={25} width={25} src={hamburger} alt="" />
        </div>
      </nav>

    </header>
  )
}

export default Nav