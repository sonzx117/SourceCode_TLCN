import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { userData, userInfor } from '../app/Slice/UserSlice';
import Nav from '../features/Admin/Nav/Nav';
import Error from '../features/Error/Error';
import Home from '../features/Home';
import Footer from '../features/Home/Footer/Footer';
import Menu from '../features/Home/Menu/Menu.jsx';
import InforUser from '../features/InforUser/InforUser';
import DetailNew from '../features/ListNews/DetailNew/DetailNew';
import ListNews from '../features/ListNews/ListNews';
import Login from '../features/Login/Login';
import Register from '../features/Register/Register';
import RegisterService from '../features/RegisterService/RegisterService';
import DetailPet from '../features/Shop/DetailPet/DetailPet';
import ShopPet from '../features/Shop/ShopPet/ShopPet';
import PaymentSuccess from '../features/Shop/Payment/PaymentSuccess.jsx';
import ListServices from '../features/Services/ListServices.jsx';

const Routers = (props) => {
  const { location } = props;
  const pathName = location.pathname;
  console.log('pathName', pathName);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user.id) {
      dispatch(userInfor(user.id));
    }
  }, [user]);

  useEffect(() => {
    dispatch(userData());
  }, [load]);
  const checkLoad = () => {
    setLoad(!load);
  };
  const hangdleLogout = (e) => {
    localStorage.removeItem('tokenPet');
    setTimeout(() => {
      dispatch(userData());
    }, 200);
  };

  const getFirstPathName = (pathName) => {
    let arrPathName = pathName.split('/');
    return arrPathName[1].toLocaleLowerCase();
  };
  return (
    <div>
      {getFirstPathName(pathName) !== 'login' && getFirstPathName(pathName) !== 'register' && getFirstPathName(pathName) !== 'admin' && (
        <Menu user={user} setUserMenu={hangdleLogout} loadUser={checkLoad} />
      )}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ListNews" component={ListNews} />
        <Route exact path="/Services" component={ListServices} />
        <Route exact path="/Shop" component={ShopPet} />
        <Route path="/ListNews/:id" component={DetailNew} />
        <Route path="/Shop/payment-success" component={PaymentSuccess} />
        <Route path="/Shop/:type/:id" component={DetailPet} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/RegisterService/:id" component={RegisterService} />
        <Route
          path="/InforUser/:id"
          render={() => {
            return user.length === 0 ? <Login /> : <InforUser />;
          }}
        />
        <Route
          path="/Admin"
          render={() => {
            return user.role !== 'admin' ? <Error /> : <Nav />;
          }}
        />
      </Switch>
      {getFirstPathName(pathName) !== 'login' && getFirstPathName(pathName) !== 'register' && getFirstPathName(pathName) !== 'admin' && <Footer />}
    </div>
  );
};
export default withRouter(Routers);
