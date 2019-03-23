import React from 'react'

const Course = (props) => {
    return (
        <div>
            <Header course={props.course} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
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
    const { parts } = props;
    const listParts = () => parts.map(part =>
        <p key={part.id}>
            {part.name} {part.exercises}
        </p>
    )
    
    return (
        <div>
            {listParts()}
        </div>
    )
}

const Total = (props) => {
    const { parts } = props;
    const laskuri = (acc, value) => acc + value;
    const listaaTehtavat = parts.map(part => part.exercises)

    return (
        <div>
            <p>yhteensä {listaaTehtavat.reduce(laskuri)} tehtävää</p>
        </div>
    )
}

export default Course