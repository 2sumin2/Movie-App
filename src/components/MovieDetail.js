import PropTypes from "prop-types";
import ReactPlayer from "react-player";

function MovieDetail({ coverImg, title, year, rating, description, genres, code, cast }) {
    return (
        <div>
            <ReactPlayer url={`https://www.youtube.com/embed/${code}?`} playing={true} pip={true} controls muted width={1280} height={720} />
            <img src={coverImg} alt={title} />
            <h1>{title}</h1>
            <h3>{year}</h3>
            <h3>{rating}</h3>
            <p>{description}</p>
            <ul>{genres && genres.map(genre => {
                return <li key={genre}>{genre}</li>;
            })}
            </ul>
            <div>{cast && cast.map((person) => {
                return (
                    <div key={person.name}>
                        <p>{person.name} / {person.character_name}</p>
                        <img src={person.url_small_image} />
                    </div>
                );
            })}
            </div>
        </div>
    );
}
MovieDetail.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number,
    description: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    code: PropTypes.string,
    cast: PropTypes.arrayOf(PropTypes.object),
}
export default MovieDetail;