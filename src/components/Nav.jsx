import {headerLogo} from "../assets/images/"
import {navLinks} from "../constants/index"

const Nav = () => {
  return (
    <header className="padding-x py-8 bg-slate-100">

      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img height={29} width={130} src={headerLogo} alt="Logo" />
        </a>

        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}

export default Nav