import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
    <View>
      <Appbar.Header
        style={styles.header}
      >
        <Appbar.Content
          title="Todo List"
          titleStyle={styles.title}
        />
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    color: 'black',
    fontSize: 30,
    marginLeft: 20,
  }
});

export default Header;