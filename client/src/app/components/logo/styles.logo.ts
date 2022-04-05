import styled from "styled-components";
import tw from "twin.macro";

export const LogoContainer = styled.div`
    ${tw`flex items-center`}
`;

export const LogoText = styled.div`
    ${tw`m-1 text-xl font-bold text-black md:text-2xl`}
`;

export const Image = styled.div`
    width: auto;
    ${tw`h-6 md:h-9`}

    img {
        width: auto;
        height: 100%;
    }
`;
