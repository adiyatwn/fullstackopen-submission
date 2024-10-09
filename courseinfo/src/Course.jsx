const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(part => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />)
        )
      }
    </div>
  )
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Course = ({ course }) => {
  // deconstruct course obj
  const { name, parts } = course;

  const total = parts.reduce((total, current) => {
    return total + current.exercises
  }, 0)

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

export default Course
