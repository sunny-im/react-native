import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Checkbox, Paragraph, Button } from 'react-native-paper';

const TodoList = ({todoList, setTodoList, clickUpdate}) => {
  //=========================================================
  const completedTodo = (idx) => {
    const completedList = [...todoList];
    completedList[idx].completed = !completedList[idx].completed;
    setTodoList(completedList);
  };

  const deleteTodo = (data, idx) => {
  console.log(idx);
    const updatedTodoList = todoList.filter(todo => todo.text !== data);
    setTodoList(updatedTodoList);
  };

  //=========================================================
  return (
    <View style={styles.container}>
{/*      이렇게 하면 스크롤이 생기지 않는다 */}
{/*       {todoList.map((data, idx) => ( */}
{/*         <View style={styles.todo} key={idx}> */}
{/*             <View style={styles.todoText}> */}
{/*               <Checkbox */}
{/*                 status={data.completed ? 'checked' : 'unchecked'} */}
{/*                 onPress={() => { */}
{/*                   completedTodo(idx); */}
{/*                 }} */}
{/*                 color='grey' */}
{/*               /> */}
{/*             <Paragraph  style={data.completed ? styles.isDone : styles.text}>{data.text}</Paragraph > */}
{/*           </View> */}
{/*           <View style={styles.buttons}> */}
{/*             <Button */}
{/*               icon='pencil' */}
{/*               color='grey' */}
{/*               onPress={() => clickUpdate(data.text)} */}
{/*             /> */}
{/*             <Button */}
{/*               icon='delete' */}
{/*               color='grey' */}
{/*               onPress={() => deleteTodo(data.text)} */}
{/*             /> */}
{/*           </View> */}
{/*         </View> */}
{/*       ))} */}
{/*  스크롤이 필요할 시에는 FlatList를 이용해서 사용*/}
      <FlatList
        data={todoList}
        // 배열의 index를 고유 요소로 사용하려면 keyExtractor
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.todo}>
              <View style={styles.todoText}>
                <Checkbox
                  status={item.completed ? 'checked' : 'unchecked'}
                  onPress={() => {
                    completedTodo(index);
                  }}
                  color='grey'
                />
                <Paragraph style={item.completed ? styles.isDone : styles.text}>{item.text}</Paragraph>
              </View>
              <View style={styles.buttons}>
                <Button
                  icon='pencil'
                  color='grey'
                  onPress={() => clickUpdate(item.text, index)}
                />
                <Button
                  icon='delete'
                  color='grey'
                  onPress={() => deleteTodo(item.text, index)}
                />
              </View>
            </View>
          );
        }}
      />
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