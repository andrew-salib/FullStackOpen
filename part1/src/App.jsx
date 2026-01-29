
const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old and the time is {props.date}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const time = Date()
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} date={time}/>
    </div>
  )
}

export default App