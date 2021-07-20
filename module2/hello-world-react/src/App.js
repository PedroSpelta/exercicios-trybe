import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = 'cafe comer dormir'.split(' ');

function App() {
  return (
    taskList.map((task) => Task(task))
  );
}

export default App;
