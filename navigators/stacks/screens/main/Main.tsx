import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import {RootStackParamList} from '../RootStackParams';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { set_user } from '../../../../store/user';

import { RootState } from '../../../../store/store';

import { ListItem, Avatar } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler';



type mainScreenProp = StackNavigationProp<{}, 'Main'>;


const list = [
  {
    name: 'file_1.pdf',
    link: 'https://drive.google.com/file/d/1_qIF30Sq0NydrmBo85mJWT-_XjZ-Mf9B/view?usp=sharing'
  },
  {
    name: 'file_2.pdf',
    link: 'https://drive.google.com/file/d/1C5xoa8pTB0q9fBmuX8dqFfgMx0yrtYPc/view?usp=sharing'
  },
  {
    name: 'file_3.pdf',
    link: 'https://drive.google.com/file/d/14NXzg8a-Za5DQWH5lt_dmrRPYdUdzN1B/view?usp=sharing',
  }
]





function Screen(props) {



  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);


  const handlePress = () => {
    dispatch(set_user("null"));
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







  const navigation = useNavigation<mainScreenProp>();
  return (
    <View>
      <View>
        {
          list.map((l, i) => (
            <TouchableOpacity

              onPress={() => props.navigation.navigate('Pdf_View', { ...l })}

            >
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))
        }
      </View>

      {/*  <Button title="Logout" onPress={() => {
        dispatch(set_user("null"));
      }
    } /> */}
    </View>
  );
}

// export default Screen;


function mapStateToProps(state) {
  // console.log('Login mapStateToProps ', state);
  return {
    user: state.user
  };
}


export default connect(mapStateToProps, {
  set_user
})(Screen); 