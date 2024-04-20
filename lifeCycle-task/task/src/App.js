
import './App.css';
import { LifecycleComponentClass } from './components/LifecycleComponentClass';
import { LifecycleComponentFunction } from './components/LifecycleComponentFunction';

function App() {
  return (
    <div className="App">
        <LifecycleComponentClass/>
        <p>==========================================</p>
        <LifecycleComponentFunction/>
    </div>
  );
}

export default App;
