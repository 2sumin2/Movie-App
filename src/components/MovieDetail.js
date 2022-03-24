import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import styles from "./MovieDetail.module.css";

function MovieDetail({ coverImg, title, year, rating, description, genres, code, cast }) {
    return (
        <div className={styles.movieDetail}>
            <div className={styles.movieInfo}>
                <div className={styles.movieImg}>
                    <img src={coverImg} alt={title} />
                </div>
                <div className={styles.movieInfoDetail}>
                    <h1 className={styles.title}>{title}</h1>
                    <h3>{year}</h3>
                    <h4>⭐ {rating}</h4>
                    <ul className={styles.genre}>{genres && genres.map(genre => {
                        return <li key={genre}>{genre}</li>;
                    })}
                    </ul>
                    <p>{description}</p>
                    {cast && <div className={styles.cast}>Cast : {cast.map((person) => {
                        return (
                            <div key={person.name}>
                                <img src={person.url_small_image} alt={title} />
                                <p>{person.name} / {person.character_name}</p>
                            </div>
                        );
                    })}
                    </div>}

                </div>
            </div>
            <div className={styles.trailer}>
                <ReactPlayer
                    url={`https://www.youtube.com/embed/${code}?`}
                    pip={true}
                    controls
                    loop
                    muted
                    width={1920}
                    height={1080} />
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