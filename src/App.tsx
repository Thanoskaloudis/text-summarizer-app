import SummarizeButton from './components/SummarizeButton/SummarizeButton';
import SummaryDisplay from './components/SummaryDisplay/SummaryDisplay';
import TextInput from './components/TextInput/TextInput';
import './App.scss';

function App() {

  const onTextChanged = ()=> {
    // TODO
  }

  const onButtonClicked = ()=> {
    // TODO
  }

  return (
    <div className="app">
      <header className="app-header">
        <h3>Text Summarizer</h3>
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
