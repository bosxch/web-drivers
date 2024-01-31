import React from 'react';
import Card from './../Card/Card';

export default function Cards(props) {
    const { drivers } = props;

    // Verificar si el número de elementos es impar
    const isOdd = drivers.length % 2 !== 0;

    // Verificar si hay menos de 9 conductores
    const lessThanNineDrivers = drivers.length < 1;

    return (
        <>
            {drivers.map((driver, index) => (
                <div className='cards-container'>

                <Card
                    key={driver.id}
                    id={driver.id}
                    name={driver.name}
                    description={driver.description}
                    image={driver.image}
                    nationality={driver.nationality}
                    teams={driver.teams}
                    dob={driver.dob}
                    // Agregar la clase "centered" al último elemento si es impar
                    className={isOdd && index === drivers.length - 1 ? 'centered' : ''}
                />
                </div>
            ))}
            {lessThanNineDrivers && <div style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80vh',
    justifyContent: 'center',
    color: 'red',
    fontSize: '4vh',
    fontWeight: 'bold'}}> <p>No hay conductores por mostrar.</p>         </div>
}
        </>
    );
}
