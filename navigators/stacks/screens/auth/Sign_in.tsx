import React, { FunctionComponent, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


import { useDispatch, useSelector } from 'react-redux';

import { connect } from 'react-redux';


import { set_user } from '../../../../store/user';

// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackParamList} from '../RootStackParams';

// type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

// type authScreenProp = StackNavigationProp<{}, 'Auth'>;

import { RootState } from '../../../../store/store';



function AuthScreen() {
  // const navigation = useNavigation<authScreenProp>();

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);


  const handlePress = () => {
    dispatch(set_user("DIAS"));
  };

  const { getItem, setItem } = useAsyncStorage('@user');

  useEffect(() => {
    // dispatch(fetchUsers({page: 1}));
    //dispatch(setMessage('Message from Component'));
    // console.log(user)

    async function a_func() {
      const item = await getItem();

      console.log("item from DB")

      console.log(item)
    }

    a_func()

    // dispatch(get_user());
  }, []);



  return (
    <View style={{ justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
      <Text>Auth Screen</Text>
      <Text>Auth Screen</Text>


      <Text style={{}}>{JSON.stringify(user)}</Text>
      <Text style={{}}>{
        /*message*/
      }</Text>
      <Button title={'Set User'} onPress={handlePress} />


    </View>
  );
}


function mapStateToProps(state) {
  // console.log('Login mapStateToProps ', state);
  return {
    user: state.user
  };
}


export default connect(mapStateToProps, {
  set_user
})(AuthScreen); // Пердаем функции какой компонент нужно соединть



