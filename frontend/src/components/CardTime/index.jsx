
import "./styles.scss";
import { FaLinkedinIn} from "react-icons/fa";
import { GitHub } from "@mui/icons-material";

export function CardTime({
    name,
    image,
    office,
    linkedin,
    github
}) {
    return (
        <div className="card__container">
            <div className="card__container__image-wrapper">
                <img 
                className="card__container__image"
                src={image} 
                alt={name} />
            </div>

            <div className="card__container__wrapper">
                <span className="card__container__name">{name}</span>
                <div className="card__container__divider"></div>
                <span className="card__container__office">{office}</span>
                <div className="card__container__social-media">
                    <a
                        className="card__container__social-media__link"
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        className="card__container__social-media__link"
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHub />
                    </a>
                </div>

            </div>

        </div>
    )
}

