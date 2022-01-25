import "./CharacterCard.css";

const CharacterCard = (props) => {
    return (
        <div className="character">
            <img
                alt=""
                className="image"
                src={props.image}
            />
            <div className="information">
                <p className="id">
                    <strong>
                        #id:{" "}
                    </strong>
                    {props.id}
                </p>
                <p className="name">
                    <strong>
                        Name:{" "}
                    </strong>
                    {props.name}
                </p>
                <p className="location">
                    <strong>
                        Location:{" "}
                    </strong>
                    {props.location.name}
                </p>
            </div>
        </div>
    );
};

export default CharacterCard;