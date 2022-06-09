import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LogIn from "./containers/LogIn";
import Groups from "./containers/Groups";
import Disciplines from "./containers/Disciplines";
import DisciplinesItem from './containers/Disciplines/DisciplinesItem';
import GroupsItem from './containers/Groups/GroupsItem';
import NotFoundPage from './components/NotFoundpage';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route element={<ProtectedRoutes /> }>
          <Route path='/disciplines' element={<Disciplines />} />
          <Route path='/groups' element={<Groups />} />
        </Route>
        <Route path='/disciplines:id' element={<DisciplinesItem />} />
        <Route path='/groups:id' element={<GroupsItem />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
