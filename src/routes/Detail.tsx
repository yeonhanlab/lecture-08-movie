import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

type MovieDetail = {
    Title: string;
    Year: string;
    Poster: string;
    Plot: string;
    Genre: string;
    Director: string;
};

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieDetail | null>(null);

    useEffect(() => {
        console.log(id);
        if (!id) return;

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${id}&plot=full`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setMovie(json);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);
    useEffect(() => {
        console.log(movie);
    }, [movie]);
    return (
        <div>
            <button
                onClick={() => {
                    navigate(-1);
                }}>
                &larr; 뒤로 가기
            </button>
            {movie ? (
                <div style={{ padding: "20px" }}>
                    {/* 영화 포스터 */}
                    <img src={movie.Poster} alt={movie.Title} style={{ width: "300px" }} />

                    {/* 영화 제목 및 정보 */}
                    <h1>
                        {movie.Title} ({movie.Year})
                    </h1>
                    <p>
                        <strong>감독:</strong> {movie.Director}
                    </p>
                    <p>
                        <strong>장르:</strong> {movie.Genre}
                    </p>

                    <hr />

                    {/* 줄거리 */}
                    <h3>줄거리</h3>
                    <p>{movie.Plot}</p>
                </div>
            ) : (
                <p>영화 정보를 불러오는 중입니다...</p>
            )}
        </div>
    );
}

export default Detail;
