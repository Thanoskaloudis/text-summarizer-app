import './App.css';
import SummarizeButton from './components/SummarizeButton/SummarizeButton';
import SummaryDisplay from './components/SummaryDisplay/SummaryDisplay';
import TextInput from './components/TextInput/TextInput';

function App() {

  const onTextChanged = ()=> {
    // TODO
  }

  const onButtonClicked = ()=> {
    // TODO
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <TextInput value="hello" onChange={onTextChanged}/>
        <SummaryDisplay summary="test" />
        <SummarizeButton onClick={onButtonClicked} disabled={false}/>
      </main>
    </div>
  );
}

export default App;
