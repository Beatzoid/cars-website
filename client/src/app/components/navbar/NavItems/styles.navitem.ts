import styled, { css } from "styled-components";
import tw from "twin.macro";

export const ListContainer = styled.ul`
    ${tw`flex list-none`}
`;

export const NavItem = styled.li<{ menu?: any }>`
    ${tw`mr-1 text-xs font-bold text-black transition duration-300 ease-in-out cursor-pointer hover:text-gray-700 md:text-base md:mr-5`}

    ${({ menu }) =>
        menu &&
        css`
            ${tw`mb-3 text-xl text-white focus:text-white`}
        `}
`;
