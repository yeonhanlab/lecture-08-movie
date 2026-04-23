import { Link, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";

type MovieItem = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
};

type ApiResponseType = { Search: MovieItem[] };

const Wrap = styled.div`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
    align-items: flex-start;
    box-sizing: border-box;
    
`;

const StyleLink = styled(Link)`
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    width: calc((100% - 45px)/4);
    align-items: center;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
`;

const Year = styled.div`
    color: #8b8b8b;
    font-size: 15px;
    font-weight: 400;
`;

const Cover = styled.img`
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
    height: auto;
`;

const Result = styled.h3`
    font-size: 19px;
    font-weight: 500;
    color: black;
    padding: 30px;
    
`;



function Search() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    const [list, setList] = useState<MovieItem[]>([]);

    useEffect(() => {
        if (!keyword) {
            return;
        }

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${keyword}`)
            .then(res => res.json())
            .then((json: ApiResponseType) => {
                setList(json.Search);
            })
            .catch(err => {
                console.log(err);
            });
    }, [keyword]);

    return (
        <div>
            <Result>검색 결과 : {keyword}</Result>
            <Wrap>
                {list.map((value, index) => (
                    <StyleLink key={index} to={`/detail/${value.imdbID}`}>
                        <Cover src={value.Poster} alt={value.Title} />
                        <Title>{value.Title}</Title>
                        <Year>{value.Year}</Year>
                    </StyleLink>
                ))}
            </Wrap>
        </div>
    );
}

export default Search;
