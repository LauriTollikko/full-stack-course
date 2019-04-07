import React from 'react';

const Personlist = (props) => {
    return (
    <div>
        <h2>Numerot</h2>
        {props.this.state.persons.map(p => 
        <div key={p.id}>
            <p>{p.name} {p.number}
                <button onClick={props.this.removePerson(p.id)}>poista</button>
            </p>
        </div>
        )}
    </div>
    )
}

export default Personlist