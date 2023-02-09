
import { Button, StyleSheet, Text, View, Image } from 'react-native';





export default function App(props) {
  const route = props.route;
  // const { route} = props.route;
  const nav = props.navigation;
  console.log(route.params);

  //nếu params có truyền sang name thì lấy, không thì sẽ gán mặc định là manager
  const name = route.params?.name || '';
  const age = route.params?.age || '';
  const add = route.params?.add || '';
  const phone = route.params?.phone || '';
  const email = route.params?.email || '';


  return (

    <View style={styles.container}>
      <View>
        <View style={styles.avt}>
          <Image style={{ width: 100, height: 100, borderRadius: 30, marginBottom: 30 }} source={require('./assets/avt.jpg')} />
          <Button title='Edit' onPress={() => nav.navigate('editProfile', {...route.params })}/>
        </View>
 
          <Text style={styles.info}>Tên: {name}</Text>
          <Text style={styles.info}>Tuổi: {age}</Text>
          <Text style={styles.info}>Địa chỉ: {add}</Text>
          <Text style={styles.info}>SĐT: {phone}</Text>
          <Text style={styles.info}>Email: {email}</Text>


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
