import './App.css';
import logod from './images/logo-d.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='dart-logo-contenedor'>
        <img 
          src={logod}
          className='dart-logo'
          alt='Logo dart' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />        
      </div>
    </div>
  );
}

export default App;
