import './App.css';
import TextInput from './components/TextInput/TextInput';

function App() {

  const onTextChanged = ()=> {
    // TODO
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <TextInput value="" onChange={onTextChanged}/>
      </main>
    </div>
  );
}

export default App;
