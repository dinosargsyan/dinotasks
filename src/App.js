import logo from './logo.svg';
import './App.css';
import Form from '../src/container/Form/form'
import Header from './container/Header/header';
import Footer from './container/Footer/footer';
import Layout from './components/layout/layout';
import './container/Form/form';
import Products from './container/products/products';



function App() {
  return (
    <div className="App">  
     
      <Header />
      <Products />
      <Form />
      <Layout />
         </div>
        
  );
}

export default App;
