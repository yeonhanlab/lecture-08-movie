import { Link, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

type MovieItem = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
};

type ApiResponseType = { Search: MovieItem[] };

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
        <>
            <h3>검색 결과 : {keyword}</h3>
            {list.map((value, index) => (
                    <Link key={index} to={`/detail/${value.imdbID}`}>
                        {value.Title}
                        {value.Year}
                        <img src={value.Poster} alt={value.Title}/>
                    </Link>
                ))
            }
        </>
    );
}

export default Search;
