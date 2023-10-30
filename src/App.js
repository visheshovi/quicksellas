import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/Navi/Navi';
// import Card from './components/Card/Card';
import DashView from './components/Board/Board';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Work/WorkAction';
import Loading from './components/Wait/Wait';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App