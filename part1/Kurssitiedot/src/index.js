import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <parts osa={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <parts osa={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <parts osa={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    )
}

const parts = (props) => {
    return (
        <p>{props.osa} {props.exercises}</p>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää</p>
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)