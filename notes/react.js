ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT (this part needs to point to div with root))


function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}

// className is a reference to vanilla js dom api
// any time you would use class you NEED to use className


import React from "react"
import ReactDOM from "react-dom"

function App() {
  const firstName = "First"
  const lastName = "Last"
  
  return (
    <h1>Hello {`${firstName} ${lastName}`}!</h1>
    // curly braces denote when react/jsx should use JS
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

// inline style for jsx needs double curly because it's expecting an object and that object is in JS
<h1 style={{color: "#FF8C00"}}>Good {timeOfDay}!</h1>

// while inside object for style can't use regular CSS syntax such as background-color. Must be backgroundColor

// react props