import './App.css';
import SummaryDisplay from './components/SummaryDisplay/SummaryDisplay';
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
        <TextInput value="hello" onChange={onTextChanged}/>
        <SummaryDisplay summary="test" />
      </main>
    </div>
  );
}

export default App;
