import './index.css';
import D1 from './components/d1';
import D2 from './components/d2';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <D1 />
        </div>
        <div className="horizontal-line" />
        <div>
          <D2 />
        </div>
      </div>
    </div>
  );
}

export default App;
