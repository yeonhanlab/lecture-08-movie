import { useNavigate } from "react-router";
import { useState, type SubmitEvent, type ChangeEvent } from "react";
import styled from "styled-components";

const Box = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 12px 18px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
`;

function SearchBar() {

    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const k = keyword.trim();
        if (!k) return;
        navigate(`/search?keyword=${encodeURIComponent(k)}`);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setKeyword(event.target.value);
    };



    return (
        <Box onSubmit={onSubmit}>
            <Input onChange = {onChange} />
            <Button type={"submit"}>
                검색
            </Button>
        </Box>);

}

export default SearchBar;