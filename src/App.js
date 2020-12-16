import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContainer from "./containers/TodoContainer";

const App = () => {
    return (
        <div className="App">
            <TodoContainer></TodoContainer>
        </div>
    );
};

export default App;
