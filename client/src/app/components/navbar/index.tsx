import Logo from "../logo";
import NavItems from "./NavItems/navItems";

import { NavbarContainer, LogoContainer } from "./styles.navbar";

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarContainer>
    );
};

export default Navbar;
