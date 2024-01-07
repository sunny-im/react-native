import React, {useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text, List } from 'react-native-paper';

const Detail = () => {
  //=========================================================
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  //=========================================================
  const movie = async () => {
    try {
      const res = await fetch('https://reactnative.dev/movies.json');
      const json = await res.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    movie();
  },[])
  //=========================================================
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <List.Section>
          {data.map(item => (
            <List.Item 
              title={item.title}
              description={item.releaseYear}
              left={props => <List.Icon {...props} icon="star-circle-outline" />}
            />
          ))}
        </List.Section>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    margin: 20,
  },
});

export default Detail;