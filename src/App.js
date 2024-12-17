import './App.css';
import UseRefHook from './components/UseRefHook';
import UseReducerHook from './components/UseReducerHook';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="row mt-5">
        <div className="col-md-1">
        </div>
        <div className="col-md-5">
          <UseRefHook />
        </div>
        <div className="col-md-6">
          <UseReducerHook />
        </div>
      </div>
      <div style={{ marginBottom: '420px' }}>

      </div>
    </div>
  );
}

export default App;
