import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Auth_Stack from './stacks/Auth';
import Main_Stack from './stacks/Main';
// import {RootStackParamList} from './screens/RootStackParams';

import { connect } from 'react-redux';
import { RootState } from '../store/store';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux';


import { set_user } from '../store/user';

function App() {

  let { user } = useSelector((state: RootState) => state.user);

  const [login, set_login] = useState(false);


  const dispatch = useDispatch();

  const { getItem, setItem } = useAsyncStorage('@user');



  useEffect(() => {
  

    async function a_func() {
      const item = await getItem();

      // if(item != "null") set_login(true)

      if (item != "null") {

        dispatch(set_user(item))

      }



    }

    a_func()

    // dispatch(get_user());
  }, []);

  return (
    <NavigationContainer >
      {/* <Text>{login}</Text> */}
      {
        user === "null" ?
          <Auth_Stack /> : <Main_Stack />
      }
    </NavigationContainer>
  );
}
//   { !login ? <Auth_Stack /> : <Main_Stack /> }


function mapStateToProps(state) {
  return {
    user: state.user
  };
}


export default connect(mapStateToProps, { set_user })(App); // Пердаем функции какой компонент нужно соединть