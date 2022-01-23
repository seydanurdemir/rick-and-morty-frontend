import React from "react";
import styles from "./CharacterCard.module.scss";

const CharacterCard = () => {
    return (
        <div className={styles.characterCard}>
            <img
                alt=""
                className={styles.image}
                src="https://static.overlay-tech.com/assets/c6e54de4-d686-4d3e-85d6-2a3eed02b512.png"
            />
            <div className={styles.flexWrapperOne}>
                <p className={styles.id}>
                    #id:{" "}
                    <strong className={styles.idEmphasis1}>1</strong>
                </p>
                <p className={styles.name}>
                    <strong className={styles.nameEmphasis0}>
                        Name:{" "}
                    </strong>
                    Reverse Rick Outrage
                </p>
                <p className={styles.location}>
                    <strong className={styles.nameEmphasis0}>
                        Location:{" "}
                    </strong>
                    Earth (Replacement Dimension)
                </p>
            </div>
        </div>
    );
};

export default CharacterCard;