import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Input, Icon } from '@rneui/themed';



import { useDispatch, useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { connect } from 'react-redux';


import { set_user } from '../../../../store/user';
import { RootState } from '../../../../store/store';





function App() {



  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);


  const handlePress = () => {
    dispatch(set_user("DIAS"));
  };

  const { getItem, setItem } = useAsyncStorage('@user');

  React.useEffect(() => {
    // dispatch(fetchUsers({page: 1}));
    //dispatch(setMessage('Message from Component'));


    async function a_func() {
      const item = await getItem();

      console.log("item from DB")

      console.log(item)
    }

    a_func()

    // dispatch(get_user());
  }, []);










  return (

    <ScrollView>
      <View style={styles.container}>



        <Image style={styles.logo} source={require('./logo.png')} />

        <Input
          placeholder='LOGIN'
        />

        <Input
          placeholder='PASSWORD'
        />


        <TouchableOpacity

          style={{

            width: Dimensions.get('window').width,
            // height: Dimensions.get('window').width,
            backgroundColor: 'white',
            padding: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100
          }}
          onPress={handlePress}
        >
          <Text>Login</Text>

        </TouchableOpacity>


      </View>

    </ScrollView>



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
})(App); // Пердаем функции какой компонент нужно соединть





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    // margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    // height: 300,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
  }
});
