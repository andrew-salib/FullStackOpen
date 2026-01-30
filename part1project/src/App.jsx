const Header = (props) => {
  return(
    <div>
      <h1>{props.object.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.object.parts[0].name} total={props.object.parts[0].exercises}></Part>
      <Part name={props.object.parts[1].name} total={props.object.parts[1].exercises}></Part>
      <Part name={props.object.parts[2].name} total={props.object.parts[2].exercises}></Part>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name}: {props.total}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercies: {props.object.parts[0].exercises + props.object.parts[1].exercises + props.object.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header object={course}/>
      <Content object={course} />
      <Total object={course} />
      
    </div>
  )
}

export default App