import './App.css';
import Sidebar from './components/Topbar';
import Boxes from './components/boxes/Boxes';
import Tools from './components/boxes/Tools';
import TableComp from './components/table/TableComp';
import Example from './pages/SNOWAnalyser';

function App() {
  return (
    <>
    <Example />
    <Tools />
    <Boxes/> 
    <TableComp />
  </>
  );
}

export default App;
