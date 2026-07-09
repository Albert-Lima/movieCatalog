import "./Stars.css"

function Stars({ imdb }) {
    return (
        <div className="stars">
            <span className="baseStars"></span>

            <span
                className="baseStars-rate"
                style={{ width: `${imdb * 10}%` }}
            >
            </span>
        </div>
    );
}

export default Stars