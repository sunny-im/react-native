import React, { useEffect } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputBox = ({ addNewTodo, visible }) => {
  //=========================================================
  const [newTodo, setNewTodo] = React.useState('');
  //=========================================================
  const handleAddTodo = () => {
    addNewTodo(newTodo);
    setNewTodo('');
    Keyboard.dismiss(); // 키보드 숨기기 (Keyboard API)
  };
  //=========================================================
  // useEffect(() => {
  //   if (visible) {
    //     console.log(visible);
    //     Keyboard.dismiss();
    //   }
    // }, [visible]);
  //=========================================================
      
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
        onFocus={() => {
          if (visible) {
            Keyboard.dismiss();
          }
        }}
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