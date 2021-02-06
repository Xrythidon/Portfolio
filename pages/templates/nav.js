import Link from "next/Link";
import homeStyles from "../../styles/Home.module.scss";

const Nav = () => {
    return (
        <div>
        <nav className={homeStyles.nav}>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Nav
