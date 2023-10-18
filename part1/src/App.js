import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando en' />
      <Mensaje color='green' message='un curso de React' />
      <Description />
    </div>
  );
}

export default App;