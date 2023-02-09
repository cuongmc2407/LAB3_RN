
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';




export default function App(props) {
  const route = props.route;
  const Update = route.params.Update;
  // const { route} = props;
  const nav = props.navigation;
  //nếu params có truyền sang name thì lấy, không thì sẽ gán mặc định là manager


  const [name, setName] = useState(route.params?.name || '');
  const [age, setAge] = useState(route.params?.age || '');
  const [add, setAdd] = useState(route.params?.add || '');
  const [phone, setPhone] = useState(route.params?.phone || '');
  const [email, setEmail] = useState(route.params?.email || '');

  return (

    <View style={styles.container}>
      <View>

        <TextInput placeholder='Tên' style={styles.info} value={name} onChangeText={(text) => setName(text)} />
        <TextInput placeholder='Tuổi' style={styles.info} value={'' +age} onChangeText={(text) => setAge(text)} />
        <TextInput placeholder='Địa chỉ' style={styles.info} value={add} onChangeText={(text) => setAdd(text)}/>
        <TextInput placeholder='SĐT' style={styles.info} value={phone} onChangeText={(text) => setPhone(text)}/>
        <TextInput placeholder='Email' style={styles.info} value={email} onChangeText={(text) => setEmail(text)}/>
        <Button title='Hủy' onPress={() => nav.navigate('Home')} />
        <Button title='Lưu'onPress={() => {
                              Update(name, age, add, phone, email);
                              nav.navigate('Thông tin cá nhân', {
                                    name: name,
                                    age: age,
                                    add: add,
                                    phone: phone,
                                    email: email,
                                    Update: Update,
                              });
                        }} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({


  text: {
    fontSize: 25,
  },
  avt: {
    alignItems: "center",
  },
  info: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
