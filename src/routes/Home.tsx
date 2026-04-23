import SearchBar from "../components/SearchBar.tsx";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 40px;
`;

function Home() {
    return <Wrap>
        <h2>Movie Search</h2>
        <SearchBar />
    </Wrap>;
}

export default Home;