import MclarenCarImg from "../../../../assets/images/mclaren-orange-big.png";
import BlobSvg from "../../../../assets/images/blob.svg";

import {
    TopSectionContainer,
    LeftContainer,
    Slogan,
    Description,
    RightContainer,
    BlobContainer,
    StandaloneCar
} from "./styles";

const TopSection = () => {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent The Best Quality Car's With Us</Slogan>
                <Description>
                    Always choose the best car from our local stores or order it
                    remotely at the best price for you and get the best quality
                    cars for as long as you like
                </Description>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobSvg} />
                </BlobContainer>
                <StandaloneCar>
                    <img src={MclarenCarImg} />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    );
};

export default TopSection;
