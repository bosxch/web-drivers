import { useDispatch, useSelector } from 'react-redux';
import { getDriverById } from "../../redux/action";
import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
    const { idDriver } = useParams();
    const dispatch = useDispatch();
    const driver = useSelector((state) => state.driverById);

    useEffect(() => {
        dispatch(getDriverById(idDriver));
    }, []);

    return (
        <div className="detail-container" style={{overflow: 'hidden'}}>
            <Link to="/home" className="home-link">
                <i >{'<'}</i> {/* Flecha de regreso */}
            </Link>
            <div className="driver-details">
                <div className="driver-image-container">
                    <img src={driver?.image?.url} alt={driver?.name?.forename} className="driver-image" />
                </div>
                <div className="driver-info">
                    <div className="driver-name">{driver?.name?.forename} {driver?.name?.surname}</div>
                    <div className="driver-description">{driver?.description}</div>
                    <div className="driver-nationality">Nationality: {driver?.nationality}</div>
                    <div className="driver-birthday">Birthday: {driver?.dob}</div>
                    <div className="driver-teams">Teams: {driver?.teams}</div>
                </div>
            </div>
        </div>
    );
}
