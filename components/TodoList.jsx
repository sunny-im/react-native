import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, Paragraph, Button } from 'react-native-paper';

const TodoList = ({todoList, setTodoList, clickUpdate}) => {
  //=========================================================
  const completedTodo = (idx) => {
    const completedList = [...todoList];
    completedList[idx].completed = !completedList[idx].completed;
    setTodoList(completedList);
  };

  const deleteTodo = (data) => {
    const updatedTodoList = todoList.filter(todo => todo.text !== data);
    setTodoList(updatedTodoList);
  };

  //=========================================================
  return (
    <View style={styles.container}>
      {todoList.map((data, idx) => (
        <View style={styles.todo} key={idx}>
            <View style={styles.todoText}>
              <Checkbox
                status={data.completed ? 'checked' : 'unchecked'}
                onPress={() => {
                  completedTodo(idx);
                }}
                color='grey'
              />
            <Paragraph  style={data.completed ? styles.isDone : styles.text}>{data.text}</Paragraph >
          </View>
          <View style={styles.buttons}>
            <Button
              icon='pencil'
              color='grey'
              onPress={() => clickUpdate(data.text)}
            />
            <Button
              icon='delete'
              color='grey'
              onPress={() => deleteTodo(data.text)}
            />
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  todoText: {
    flexDirection: 'row',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isDone: {
    textDecorationLine: 'line-through',
  },
  todoDelBtn: {
    color: '#777'
  },
  buttons: {
    flexDirection: 'row',
  },
  modal: {
    backgroundColor: 'white',
    height: 50,
  },
});

export default TodoList;