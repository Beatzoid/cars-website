import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../../../constants/screens";

export const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`flex justify-between w-full pl-3 pr-3 max-w-screen-2xl lg:pl-12 lg:pr-12`}
`;

export const LeftContainer = styled.div`
    ${tw`flex flex-col w-1/2`}
`;

export const RightContainer = styled.div`
    ${tw`relative flex flex-col w-1/2 mt-20`}
`;

export const Slogan = styled.h1`
    ${tw`mb-4 text-2xl font-bold text-black xl:text-6xl sm:text-3xl md:text-5xl lg:font-bold md:font-extrabold sm:leading-snug lg:leading-normal xl:leading-relaxed`}
`;

export const Description = styled.p`
    ${tw`overflow-hidden text-xs text-gray-800 lg:text-sm xl:text-lg sm:max-h-full max-h-12`}
`;

export const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }

    @media (min-width: ${SCREENS.xl}) {
        width: 70em;
        max-height: 30em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`;

export const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 16em;
        right: -6em;
        top: -6em;
    }
    
    @media (min-width: ${SCREENS.lg}) {
        height: 21em;
        right: -8em;
        top: -5em;
    
    @media (min-width: ${SCREENS.xl}) {
        height: 30em;
        right: -13em;
        top: -9em;
    }
`;
