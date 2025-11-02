export const TodoListItem = ({ todo, onClickComplete, onClickDelete }) => {
    return ( 
        <div>
            <h3>{todo.text}</h3>
            {todo.completed && <p>Completed</p>}
            <button onClick={()=>onClickComplete(todo.id)}>Mark as Completed</button>
            <button onClick={()=>onClickDelete(todo.id)}>Delete</button>
        </div>
        
    );
}   