import './App.css';
import Mellow from './components/Mellow.js'
import ClassMellow from './components/ClassMellow'
import PropsProps from './components/PropsProps';
import Counter from './components/States'
import FunctionEvent from './components/FunctionEvent'
function App() {
  return (
    <div className="App">
      {/* <Mellow></Mellow> */}
      {/* <PropsProps name="Asma" lastname="..."></PropsProps> */}
      {/* <ClassMellow mellowis="Soft!"/> */}
      {/* <Counter/> */}
      <FunctionEvent/>
    </div>
  );
}

export default App;
