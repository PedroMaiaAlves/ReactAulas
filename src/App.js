
import './App.css';
import HelloWorld  from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      {/* comentário entre componentes   */}
      <SayMyName nome ="Pedro"/>
      <Pessoa 
      nome="Pedro" 
      idade="19" 
      profissao="Software Engineer" 
      foto="https://placehold.co/90x90"/>
      <HelloWorld />
      <Frase />
      <List />
    </div>
  );
}

export default App;
