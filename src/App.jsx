import {BrowserRouter , Routes , Route} from 'react-router-dom';

/*
  Browser Router Connects to the Browser
  Routes is the parent component for all our Routes
  For every page we set up a Route Component with two props (path and element)
*/

import { useState } from 'react';

import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Error from './Components/Error'
import SharedLayout from './Components/SharedLayout';
import SingleProduct from './Components/SingleProduct';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  const [user, setUser] = useState('');
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/"  element = {<SharedLayout/>}>                           {/*Nested Routes*/} {/* SharedLayout Component is shared among the nested Routes */}
          <Route index element={<Home/>}></Route>                                 {/* index points to the parent path (Here path="/") and will display"Home Component in place of Outlet" */}
          <Route path ="/about" element = {<About/>}></Route>                     {/*Will Display SharedLayout Component and "About Component in place of Outlet"*/}
          <Route path = "/products" element = { <Products/>}></Route>             {/*Will Display SharedLayout Component and "Products Component in place of Outlet"*/}
          <Route path="/products/:productId" element={<SingleProduct/>}></Route>
          <Route path='/login' element={<Login setUser={setUser}/>}></Route>
          <Route path='/dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}/>
            </ProtectedRoute>
          }></Route>
          <Route path ='*' element = {<Error/>}></Route>                          {/*Will Display SharedLayout Component and "Error Component in place of Outlet"*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
