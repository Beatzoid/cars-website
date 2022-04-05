import CarLogoImg from "@assets/images/car-logo.png";

import { LogoContainer, LogoText, Image } from "./styles.logo";

const Logo = () => {
    return (
        <LogoContainer>
            <Image>
                <img src={CarLogoImg} alt="Car Logo" />
            </Image>
            <LogoText>Yourcar.</LogoText>
        </LogoContainer>
    );
};

export default Logo;
