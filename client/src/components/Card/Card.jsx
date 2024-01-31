import { Link } from 'react-router-dom';

export default function Card(props) {

    return (
        <div className="driver-detail-container"> {/* Clase para el contenedor principal */}
            <Link to={`/detail/${props.id}`} className="driver-link"> {/* Clase para el enlace */}
                <div className="driver-info"> {/* Clase para el contenedor de información */}
                    <h2 className="driver-name">Name: {props.name.forename}</h2> {/* Clase para el nombre */}
                    <h2 className="driver-lastname">Last Name: {props.name.surname}</h2> {/* Clase para el apellido */}
                    <img src={props.image.url} alt={props.name.forename} className="driver-image" /> {/* Clase para la imagen */}
                    {/* <h2 className="driver-description">Description: {props.description}</h2> Clase para la descripción */}
                    <h2 className="driver-nationality">Nationality: {props.nationality}</h2> {/* Clase para la nacionalidad */}
                    <h2 className="driver-birthday">Birthday: {props.dob}</h2> {/* Clase para la fecha de nacimiento */}
                    <h2 className="driver-teams">Teams: {props.teams}</h2> {/* Clase para los equipos */}
                </div>
            </Link>
        </div>
    );
}