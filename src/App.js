import React, { useEffect } from 'react';

import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Loader from './components/Loader/Loader';
import { loadAppData } from './redux/appData/appDataSlice';
import NavigationStack from './routes/NavigationStack';

// FUNCTIONS
const showPopUp = ({ type, title, description }) => {
  notification[type]({
    message: title,
    description,
  });
};

// MAIN FUNCTION
function App() {
  // STATES
  const { appData, isLoading, appDataError } = useSelector(state => state.appData);

  // HOOKS
  const dispatch = useDispatch();

  // CONSTANTS
  const notificationMessage = {
    success: {
      type: 'success',
      title: 'Data loaded correctly',
    },
    error: {
      type: 'error',
      title: 'Fail on load data',
    },
  };

  // USEEFFECT
  useEffect(() => {
    dispatch(loadAppData());
  }, []);

  useEffect(() => {
    if (appData !== undefined) {
      showPopUp({
        type: notificationMessage.success.type,
        title: notificationMessage.success.title,
      });
    } else if (appDataError) {
      showPopUp({
        type: notificationMessage.error.type,
        title: notificationMessage.error.title,
        description: appDataError,
      });
    }
  }, [isLoading]);

  // VIEW
  return isLoading ? <Loader /> : <NavigationStack />;
}

export default App;
