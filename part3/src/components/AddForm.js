import React from 'react';

const AddForm = (props) => {
    
    return (
    <div>
        <form onSubmit={props.this.addPerson}>
          <div>
            nimi: <input 
            value={props.this.state.newName}
            onChange={props.this.handleNameChange}
            />
          </div>
          <div>
            numero: <input 
            value={props.this.state.newNumber}
            onChange={props.this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
    </div>
    )
}

export default AddForm