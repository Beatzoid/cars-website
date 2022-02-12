import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/navbar";

const PageContainer = styled.div`
    ${tw`flex flex-col items-center w-full h-full overflow-x-hidden`}
`;

const HomePage = () => {
    return (
        <PageContainer>
            <Navbar />
        </PageContainer>
    );
};

export default HomePage;
