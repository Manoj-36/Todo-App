import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000500',
  },
  items:{
    marginTop: 30,
  },
  sectionTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  tasksWrapper:{
    paddingTop: 50,
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
    width: 320,
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

});
