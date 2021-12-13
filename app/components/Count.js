/*import react, {useState} from 'react'

export default function Count() {
    const [todolist, setTodoList] = useState([
        "toto",
        "pute",
        "oui"
    ]);
    const [todo, setTodo] = useState('');
    const removeTodo = todo => {
        setTodoList(todolist.filter(t => t != todo));
    }

    return (
        <div>
            <h1>Todo List :</h1>

            <input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => setTodoList([ ... todolist, todo])}>Add</button>
            {todolist.map(todo => (
                <div>
                    <h2>{todo}</h2>
                    <button onClick={() => removeTodo(todo)}>Supprimer</button>
                </div>

            ))}
        </div>
    );
};
*/

// teeeeeest

import react, {useState, useEffect} from 'react'

export default function Count() {
    const [todolist, setTodoList] = useState([
        "toto",
        "okok",
        "oui"
    ]);
    const [todo, setTodo] = useState('');
    const removeTodo = todo => {
        setTodoList(todolist.filter(t => t != todo));
    }

    useEffect(() => {
        console.log("hello")
    }, [])

    return (
        <div class='sheesh'>
            <h1>Todo List :</h1>

            <input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => setTodoList([ ... todolist, todo])}>Add</button>
            {todolist.map(todo => (
                <div>
                    <h2>{todo}</h2>
                    <button onClick={() => removeTodo(todo)}>Supprimer</button>
                </div>

            ))}
        </div>
    );
};