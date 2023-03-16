
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Tamamlanmis } from './Tamamlanmis';
import { DeletePage } from './DeletePage';
import { HomePage } from './HomePage';




function App() {

  return (
    <div className="App">
<nav><br/><br/>
<Link to='/'>Home Page</Link><br/> 
          <Link to='/Tamam'>Tamamlanmişlar</Link><br/>
          <Link to='/Delete'>Delete Page</Link><br/> <br/>              
        </nav>   

<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/Tamam' element={<Tamamlanmis/>} />
<Route path='/Delete' element={<DeletePage/>} />
</Routes>
    </div>
  );
}

export default App;
