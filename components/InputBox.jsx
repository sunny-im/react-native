import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import TodoList from './TodoList';

const InputBox = ({ addNewTodo }) => {
  //=========================================================
  const [newTodo, setNewTodo] = React.useState('');
  //=========================================================
  const handleAddTodo = () => {
    addNewTodo(newTodo);
    setNewTodo('');
    Keyboard.dismiss(); // 키보드 숨기기 (Keyboard API)
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter new todo"
        onChangeText={(text) => setNewTodo(text)}
        value={newTodo}
        mode='outlined'
        selectionColor='#eee'
        activeOutlineColor='#eee'
        dense
        right={
          <TextInput.Icon
            name="plus-circle"
            onPress={handleAddTodo}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    margin: 20,
  },
});

export default InputBox;