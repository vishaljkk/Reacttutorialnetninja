import React from 'react'
const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div class="collection">
                <div classsName="collection-item" key={todo.id}>
                    <span onClick={()=>deleteTodo(todo.id)}>
                        {todo.content}
                    </span>
                </div>
                </div>
            )
        })
    ) :(
        <p className> todos completed </p>
    )
    return(
        <div className="todos Collection">
            {todoList}
        </div>
    )
}
export default Todos;