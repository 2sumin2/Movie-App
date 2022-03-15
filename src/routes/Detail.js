import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
            )
        ).json();
        setLoading(false);
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div> {
            loading ?
                (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <MovieDetail
                        key={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                        description={movie.description_full}
                        genres={movie.genres}
                        code={movie.yt_trailer_code}
                        cast={movie.cast}
                    />
                )}
        </div>
    );
}
export default Detail;

/**
 * "https://www.youtube.com/embed/4kdtrChdosE?rel=0&mode=transparent&border=0&autoplay=1&iv_load_policy=3"
 {
     "status":"ok",
     "status_message":"Query was successful", 
     "data":
    {
        "movie":
        {
            "id":40646,
            //"url":"https:\/\/yts.mx\/movies\/in-search-of-tomorrow-2022",
            "imdb_code":"tt11341742",
            //"title":"In Search of Tomorrow",
            "title_english":"In Search of Tomorrow",
            "title_long":"In Search of Tomorrow (2022)",
            "slug":"in-search-of-tomorrow-2022",
            //"year":2022,
            //"rating":9,
            "runtime":0,
            //"genres":["Documentary","Sci-Fi"],
            "download_count":14948,
            "like_count":9,
            "description_intro":"A nostalgic journey through '80s sci-fi films, exploring their impact and relevance today, told by the artists who made them and by those who were inspired to turn their visions into reality.",
            //"description_full":"A nostalgic journey through '80s sci-fi films, exploring their impact and relevance today, told by the artists who made them and by those who were inspired to turn their visions into reality.",
            "yt_trailer_code":"4kdtrChdosE",
            "language":"en",
            "mpa_rating":"",
            "background_image":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/background.jpg",
            //"background_image_original":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/background.jpg",
            "small_cover_image":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/small-cover.jpg",
            //"medium_cover_image":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/medium-cover.jpg",
            "large_cover_image":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/large-cover.jpg",
            "medium_screenshot_image1":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/medium-screenshot1.jpg",
            "medium_screenshot_image2":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/medium-screenshot2.jpg",
            "medium_screenshot_image3":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/medium-screenshot3.jpg",
            "large_screenshot_image1":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/large-screenshot1.jpg",
            "large_screenshot_image2":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/large-screenshot2.jpg",
            "large_screenshot_image3":"https:\/\/yts.mx\/assets\/images\/movies\/in_search_of_tomorrow_2022\/large-screenshot3.jpg",
            //"cast":
            [{
                "name":"Wil Wheaton",
                "character_name":"Self - Interviewee",
                "url_small_image":"https:\/\/yts.mx\/assets\/images\/actors\/thumb\/nm0000696.jpg",
                "imdb_code":"0000696"
            },{
                "name":"Clancy Brown",
                "character_name":"Self - Interviewee",
                "url_small_image":"https:\/\/yts.mx\/assets\/images\/actors\/thumb\/nm0000317.jpg",
                "imdb_code":"0000317"
            },{
                "name":"Sean Young",
                "character_name":"Self - Interviewee",
                "url_small_image":"https:\/\/yts.mx\/assets\/images\/actors\/thumb\/nm0000707.jpg",
                "imdb_code":"0000707"
            },{
                "name":"John Carpenter",
                "character_name":"Self - Interviewee",
                "url_small_image":"https:\/\/yts.mx\/assets\/images\/actors\/thumb\/nm0000118.jpg",
                "imdb_code":"0000118"
            }],
            "torrents":[{
                "url":"https:\/\/yts.mx\/torrent\/download\/75472EF8F0DDF58A08A069820A49DFAD4DE4A035",
                "hash":"75472EF8F0DDF58A08A069820A49DFAD4DE4A035","quality":"720p",
                "type":"web","seeds":357,"peers":162,"size":"2.7 GB","size_bytes":2899102925,
                "date_uploaded":"2022-03-12 16:54:56",
                "date_uploaded_unix":1647100496
            },
            {
                "url":"https:\/\/yts.mx\/torrent\/download\/1476FF33990C402294F3EFB1A1E9015BAC04C26C",
                "hash":"1476FF33990C402294F3EFB1A1E9015BAC04C26C",
                "quality":"1080p",
                "type":"web",
                "seeds":433,
                "peers":158,
                "size":"5.02 GB",
                "size_bytes":5390183956,
                "date_uploaded":"2022-03-12 20:13:25",
                "date_uploaded_unix":1647112405
            }],
            "date_uploaded":"2022-03-12 16:54:56",
            "date_uploaded_unix":1647100496
        }},
        "@meta":
        {
            "server_time":1647245210,
            "server_timezone":"CET",
            "api_version":2,
            "execution_time":"0 ms"}}
 */