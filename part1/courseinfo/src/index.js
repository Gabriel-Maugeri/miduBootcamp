import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>

const Paragraph = (props) => <p>{props.text1} {props.text2}</p>


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Paragraph text1={part1} text2={exercises1} />
      <Paragraph text1={part2} text2={exercises2} />
      <Paragraph text1={part3} text2={exercises3} />
      <Paragraph text1="Number of exercises" text2={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))