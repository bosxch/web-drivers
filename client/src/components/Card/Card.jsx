import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
    return (
        <div className="driver-detail-container" style={{color: 'black', backgroundColor: 'red'}}> {/* Clase para el contenedor principal */}
            <Link to={`/detail/${props.id}`} className="driver-link" style={{color: 'black'}}> {/* Clase para el enlace */}
                <div className="driver-info" style={{color: 'black'}}> {/* Clase para el contenedor de información */}
                    <h2 className="driver-name" style={{color: 'black'}}>Name: {props.name.forename}</h2> {/* Clase para el nombre */}
                    <h2 className="driver-lastname" style={{color: 'black'}}>Last Name: {props.name.surname}</h2> {/* Clase para el apellido */}
                    <img src={props.image.url} alt={props.name.forename} className="driver-image" /> {/* Clase para la imagen */}
                    {/* <h2 className="driver-description">Description: {props.description}</h2> Clase para la descripción */}
                    <h2 className="driver-nationality" style={{color: 'black'}}>Nationality: {props.nationality}</h2> {/* Clase para la nacionalidad */}
                    <h2 className="driver-birthday" style={{color: 'black'}}>Birthday: {props.dob}</h2> {/* Clase para la fecha de nacimiento */}
                    <h2 className="driver-teams" style={{color: 'black'}}>Teams: {props.teams}</h2> {/* Clase para los equipos */}
                </div>
            </Link>
        </div>
    );
}
