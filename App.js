import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Button, Keyboard, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
        <View style={styles.textIcon}>
          <Text style={styles.sectionTitle}> Tasks </Text>
          <Text
          title="Details" style={styles.buttonText}
          onPress={() => navigation.navigate("Details")}
          ></Text>
        </View>
        <ScrollView>
          <View style={styles.items}>

            {
              taskItems.map((item, index) =>{
                return (
                    <View style={styles.binItem}>
                        <Task  text={item} />
                        <TouchableOpacity key={index} onPress={() => completeTask(index)}  >
                        <Image source={require('./assets/bin2.png')}  style={styles.bin}/>
                      </TouchableOpacity>
                    </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>

{/* hjvjhvhjvjh */}
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
  
{/* hchgchc */}

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

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

  
const About = () => {
  return(

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={App} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>

      {/* <Stack.Navigator>
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
      </Stack.Navigator> */}
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
  textIcon:{
    flexDirection: 'row',
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
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    // alignItems: 'stretch',
    borderColor: '#362417',
    justifyContent: 'center',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  bin:{
    flex: .1,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 5,
    alignItems: 'flex-end',
  },
  binItem:{
    flexDirection: 'row',
  },
});

