import { useNavigate } from "react-router";
import { useState, type SubmitEvent, type ChangeEvent } from "react";
import styled from "styled-components";

const Box = styled.form`
    display: flex;
    gap: 10px;
    display: flex;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 12px;
    border: none;
    background-color: #ff5959;
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
        if (!k) return;  // 또는 if(!keyword.trim()) return;
        navigate(`/search?keyword=${encodeURIComponent(k)}`); // 사용자를 강제 이동
        // 사용자를 이동 시키는데 (Link나 a태그나, navigate), 그 주소에 첫 글자에 /로 시작하지 않으면,
        // 지금 현재의 주소 + search로 이동시킴
        // 그 주소에 첫 글자가 / 로 시작하면
        // /search 로 이동시킴
        // 그래서 / 로 시작하느냐 마느냐가 매우 중요하다!
    };

    const onChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    return (
        <Box onSubmit={onSubmit}>
            <Input onChange={onChange} />
            <Button type={"submit"}>검색</Button>
        </Box>
    );
}

export default SearchBar;
