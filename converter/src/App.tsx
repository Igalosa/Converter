
import Converter from './components/Converter';
import "./styles/App.css";
import Header from './components/Header';
import useFetch from './components/useFetch';


function App() {

  const { items, isLoaded } = useFetch();
  if (!isLoaded) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div>

      <Header items={items} />
      <Converter  items={items} />


    </div>
  );
}

export default App;
