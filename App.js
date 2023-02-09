import { NavigationContainer }
    from "@react-navigation/native";
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
import Manager from './Manager'; // file App cũ
import editProfile from './editProfile';
import {View, Text, Button, Image} from 'react-native';
import { useState } from "react";
const Stack = createNativeStackNavigator();


// Tạo ra thêm 1 màn hình About để quản lý
const Home = (props) => {
    const nav = props.navigation;
    const [name, setName] = useState('Mai Chí Cường');
    const [age, setAge] = useState(20);
    const [add, setAdd] = useState('HD');
    const [phone, setPhone] = useState('0123456789');
    const [email, setEmail] = useState('cuongmcph27903@fpt.edu.vn');

    const Update = (name, age, add, phone, email) => {
        setName (name);
        setAge (age);
        setAdd (add);
        setPhone (phone);
        setEmail (email);
    }
    return (<View style={{alignItems: "center", marginTop:50}}>
        <Button
            title='Thông tin cá nhân'
            onPress={() => nav.navigate(
                'Thông tin cá nhân',
                {name : name , age : age, phone : phone, add: add, email: email , Update: Update}
            )}
        />
        
    </View>);
};


const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Thông tin cá nhân" component={Manager}
            />
            <Stack.Screen
                name='Home' component={Home}
            />
            <Stack.Screen
                name='editProfile' component={editProfile}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
