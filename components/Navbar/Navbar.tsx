import Dropdownlistmenu from "./Dropdownlistmenu";
import Logo from "./Logo"
import { ModeToggle } from "./ModeToggle";
import Search from './Search';

const Navbar = () => {
  return (
    <nav>
        <div className="container flex flex-col justify-between py-8 sm:flex-row sm:item-center gap-4">
            {/* Logo */}
            <Logo/>
            {/* Search */}
            <Search/>
            {/* Darkmode & Profile */}
            <div className="flex gap-4"> 
            <ModeToggle/>
            <Dropdownlistmenu/>
            </div>
        </div>
    </nav>
  )
}
export default Navbar