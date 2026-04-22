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
    padding: 30px;
`;

const StyleLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 30px 0;
    flex-direction: column;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    
`;

const Cover = styled.img`
    border-radius: 20px;
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
            .then((json: ApiResponseType)  => {
                setList(json.Search);
            })
            .catch(err => {
                console.log(err);
            });
    }, [keyword]);

    return (
        <Wrap>
            <h3>검색 결과 : {keyword}</h3>
            {list.map((value, index) => (
                <StyleLink key={index} to={`/detail/${value.imdbID}`}>
                    <Cover src={value.Poster} alt={value.Title} />
                    <Title>{value.Title}</Title>
                    {value.Year}
                </StyleLink>
            ))}
        </Wrap>
    );
}

export default Search;
