import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';
import D from './Components/D';

function App({navigation}) {

  const [task , setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  }

 

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tasks </Text>
        <Text
        title="Details" style={styles.buttonText}
        onPress={() => navigation.navigate("Details")}
        >ⓘ</Text>

        <View style={styles.items}>

          {
            taskItems.map((item, index) =>{
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task  text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    // </View>
  );
}

const Details = () => {
  return(
      <View>
        <D />
      </View>
  );
}

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

  
const About = () => {
  return(

    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={App} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator> */}

      <Stack.Navigator>
      <Stack.Screen name="Home" style={styles.topBar} component={App} options={{
        headerStyle:{
          backgroundColor: '#FFEEDD', 
        },
        
      }} />
      <Stack.Screen name="Details" component={Details} options={{
        headerStyle:{
          backgroundColor: '#FFEEDD', 
        },
        
      }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default About;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FF',
  },
  items:{
    // marginTop: 30,
  },
  sectionTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    bottom: 10,
  },
  tasksWrapper:{
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input:{
    paddingVertical: 13,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#362417',
    width: 280,
    fontSize: 18,
    color: '#000',
  },

  addWrapper:{
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#362417',
  },
  addText:{
    fontSize: 35,
  },
  buttonText:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 320,
    marginTop: -30,
    bottom:10,
  },
  topBar:{
    tintColor: 'blue',
  },
});
