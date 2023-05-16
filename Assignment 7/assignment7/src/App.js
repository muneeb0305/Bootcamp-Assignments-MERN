import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <>
      <ChildComponent />
      <ParentComponent operation={'+'} />
      <ParentComponent operation={'-'} />
      <ParentComponent operation={'/'} />
    </>
  );
}

export default App;
