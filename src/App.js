import List from "./components/List";
import Card from "./components/Card";
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <h1>List Group </h1>
      <List className='list-group-item list-group-item-action list-group-item-primary'>
        Item 1 
      </List>  
      <List className='list-group-item list-group-item-action list-group-item-secondary'>
        Item 2 
      </List>  
      <List className='list-group-item list-group-item-action list-group-item-sucess'>
        Item 3 
      </List>  
      <List className='list-group-item list-group-item-action list-group-item-danger'>
        Item 4 
      </List>  
      <Card />
      <Footer />
    </div>

 );
}

export default App;
