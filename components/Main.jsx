import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import InputBox from './InputBox';
import TodoList from './TodoList';
import { Dialog, Button, TextInput, Text } from 'react-native-paper';

const Main = ({navigation}) => {
//=========================================================
  const [todoList, setTodoList] = React.useState([
    { text: '할일1', completed: false },
    { text: '할일2', completed: false },
    { text: '할일3', completed: false },
  ]);
  const [visible, setVisible] = React.useState(false);
  const [originText, setOriginText] = React.useState('');
  const [updateText, setUpdateText] = React.useState('');
  //=========================================================
  const addNewTodo = (newTodo) => {
    setTodoList([...todoList, { text: newTodo, completed: false }]);
  };

  const clickUpdate = (data) => {
    setVisible(true);
    setOriginText(data);
    setUpdateText(data);
  };

  const updateTodo = () => {
    setVisible(false);
    const updatedList = todoList.map(item => {
      if (item.text === originText) {
        return { ...item, text: updateText };
      }
      return item;
    });
    setTodoList(updatedList);
  };

  const hideDialog = () => setVisible(false);
  //=========================================================
  return (
    <View style={styles.container}>
      <Header />
      <InputBox
        addNewTodo={addNewTodo}
        visible={visible}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setVisible={setVisible}
        clickUpdate={clickUpdate}
      />
      {visible && (
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Update Todo</Dialog.Title>
          <Dialog.Content>
            <TextInput
              value={updateText}
              onChangeText={(text) => setUpdateText(text)}
              dense
              underlineColor='grey'
              activeUnderlineColor='grey'
            ></TextInput>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog} color='grey'>Cancel</Button>
            <Button onPress={updateTodo}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
  },
});

export default Main;