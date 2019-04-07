import React from 'react';
import Personlist from './components/Personlist';
import AddForm from './components/AddForm';
import personService from './services/persons'
import Notification from './components/Notification'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        notificationText: null
        }
    }

    componentDidMount() {
        personService
          .getAll()
          .then(response => {
            this.setState({ persons: response.data })
          })
      }

    isNameIncluded = () => {
        let temp = false
        this.state.persons.forEach(function(element) {
            if(element.name === this.state.newName) {
                temp = true
            }
        }, this)
        return temp
    }

    addPerson = (event) => {
        event.preventDefault()
        if(this.isNameIncluded() === true) {
            alert("Nimi on jo luettelossa!")
        } else {
            const newPerson = {
                name: this.state.newName,
                number: this.state.newNumber
            }
            personService
                .create(newPerson)
                .then(response => {
                    this.setState({
                        persons: this.state.persons.concat(response.data),
                        newName: '',
                        newNumber: ''
                     })
                })
                this.setState({
                    notificationText: `Lisättiin ${newPerson.name} luetteloon`
                })
                setTimeout(() => {
                    this.setState({notificationText: null})
                }, 4000)
        }    
    }
    
    removePerson = (id) => {
        return () => {
            personService
                .remove(id)
                .then(response => {
                    this.componentDidMount()
                    })
                this.setState({
                    notificationText: 'Poisto onnistui!'
                })
                setTimeout(() => {
                    this.setState({notificationText: null})
                }, 4000)
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value})
    }
    
    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value})
    }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.notificationText}/>
        <AddForm this={this} />
        <Personlist this={this} />
      </div>
    )
  }
}

export default App