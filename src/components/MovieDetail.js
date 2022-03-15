import PropTypes from "prop-types";

function MovieDetail({ coverImg, title, year, rating, description, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h1>{title}</h1>
            <h3>{year}</h3>
            <h3>{rating}</h3>
            <p>{description}</p>
            <ul>{genres && genres.map(genre => {
                return <li key={genre}>{genre}</li>;
            })}
            </ul>
        </div>
    );
}
MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default MovieDetail;