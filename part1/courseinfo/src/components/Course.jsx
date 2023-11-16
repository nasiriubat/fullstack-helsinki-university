const Header = ({ course }) => { 
    return <div>
      <h1>{course.name}</h1> 
    </div>
  }
  const Parts = ({ name, exercises }) => <p>{name} {exercises}</p>

  
  
  const Course = ({course}) => { 
    const parts = course.parts;
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return <div>
    <Header course={course} />
    {parts.map(part=>
      <Parts key={part.id} name={part.name} exercises={part.exercises}/>
    )}
    <p>total of {totalExercises} exercises</p>
  </div>
  }

  export default Course;