import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          counterHyva: 0,
          counterNeutraali: 0,
          counterHuono: 0,
          counterMaara: 0,
        }
    }

    setHyvaPalaute = () => {
        this.setState({
            counterHyva: this.state.counterHyva + 1,
            counterMaara: this.state.counterMaara + 1
        })

    }

    setNeutraaliPalaute = () => {
        this.setState({
            counterNeutraali: this.state.counterNeutraali + 1,
            counterMaara: this.state.counterMaara + 1 
        })
    }
    setHuonoPalaute = () => {
        this.setState({
            counterHuono: this.state.counterHuono + 1,
            counterMaara: this.state.counterMaara + 1
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Button 
                    handleClick={this.setHyvaPalaute}
                    name="Hyvä"/>
                <Button 
                    handleClick={this.setNeutraaliPalaute}
                    name="Neutraali"/>
                <Button 
                    handleClick={this.setHuonoPalaute}
                    name="Huono"/>
                <StatisticHeader/>
                <Statistics state={this.state}/>
            </div>
        )
    }
}

const Header = () => {
    return (
        <div>
            <h1>anna palautetta</h1>
        </div>
    )
}

const Button = (props) => 
    (
    <button onClick={props.handleClick}>
        {props.name}
    </button>
    )

const StatisticHeader = () => {
    return (
        <h2>statistiikka</h2>
    )
}

const Statistics = ({state}) => {
    if (state.counterMaara === 0) {
        return (
        <div>Ei yhtään palautetta annettu</div>
        )
    }
    return (
        <div>
            <Statistic text="Hyvä" value={state.counterHyva}/>
            <Statistic text="Neutraali" value={state.counterNeutraali}/>
            <Statistic text="Huono" value={state.counterHuono}/>
            <Statistic text="Keskiarvo" value={laskeKeskiarvo(state)}/>
            <Statistic text="Positiivisia" value={laskeProsentti(state)}/>
        </div>
    )
}

const Statistic = (props) => {
    return (
        <div>
            {props.text} {props.value}
            <br/>
        </div>
    )
}

const laskeProsentti = (props) => {
    return (props.counterHyva / (props.counterHyva + props.counterNeutraali + props.counterHuono) * 100).toFixed(1) + ' %'
}

const laskeKeskiarvo = (props) => {
    return ((props.counterHyva - props.counterHuono) / props.counterMaara).toFixed(1)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)