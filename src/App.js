import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';

import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import NewBookingTable from './components/views/NewBookingTable/NewBookingTable';
import BookedTable from './components/views/BookedTable/BookedTable';
import BookedEvent from './components/views/BookedEvent/BookedEvent';
import NewBookingEvent from './components/views/NewBookingEvent/NewBookingEvent';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import Homepage from './components/views/Homepage/Homepage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBookingTable} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookedTable} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={NewBookingEvent} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={BookedEvent} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
