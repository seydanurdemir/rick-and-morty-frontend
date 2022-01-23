import React from "react";
import styles from "./CharacterCard.module.scss";

const CharacterCard = (props) => {
    return (
        <div className={styles.characterCard}>
            <img
                alt=""
                className={styles.image}
                src={props.image}
            />
            <div className={styles.flexWrapperOne}>
                <p className={styles.id}>
                    #id:{" "}
                    <strong className={styles.idEmphasis1}>{props.id}</strong>
                </p>
                <p className={styles.name}>
                    <strong className={styles.nameEmphasis0}>
                        Name:{" "}
                    </strong>
                    {props.name}
                </p>
                <p className={styles.location}>
                    <strong className={styles.nameEmphasis0}>
                        Location:{" "}
                    </strong>
                    {props.location.name}
                </p>
            </div>
        </div>
    );
};

export default CharacterCard;