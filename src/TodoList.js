import { TodoListItem } from "./TodoListItem";
export const TodoList = ({ todos, onClickComplete, onClickDelete }) => {
    return ( 
        <div>
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onClickComplete={() => onClickComplete(todo.id)}
                    onClickDelete={() => onClickDelete(todo.id)}        
                />
            ))}
        </div>
    );
}