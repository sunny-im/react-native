import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';

export default App = () => {
//=========================================================
  const [todoList, setTodoList] = React.useState([
    {
      text: '할일1',
      completed: false,
    },
    {
      text: '할일2',
      completed: false,
    },
    {
      text: '할일3',
      completed: false,
    },
  ]);
  //=========================================================
  const addNewTodo = (newTodo) => {
    setTodoList([...todoList, { text: newTodo, completed: false }]);
  };
  //=========================================================
  return (
    <View style={styles.container}>
      <Header />
      <InputBox addNewTodo={addNewTodo}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#EEE",
  },
});