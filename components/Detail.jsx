import React, {useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Searchbar, List, Paragraph } from 'react-native-paper';

const Detail = () => {
  //=========================================================
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  //=========================================================
  const movie = async (searchQuery) => {
    try {
      const res = await fetch('https://reactnative.dev/movies.json');
      const json = await res.json();
      if (searchQuery === undefined) {
        console.log(json.movies);
      }
      else {
        const search = json.movies.filter(data => data.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setData(search);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeSearch = (query) => setSearchQuery(query);
  const searchData = () => {
    movie(searchQuery);
  };

  useEffect(() => {
    movie(searchQuery);
  },[])
  //=========================================================
  return (
    <View style={{flex: 1, padding: 24}}>
      <Searchbar
        placeholder="Search Title"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={searchData}  // Searchbar에 있는 돋보기 아이콘
        onSubmitEditing={searchData} // 키보드에 있는 돋보기 아이콘
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {data.length !== 0 ? (
            <List.Section>
              {data.map((item, idx) => (
                <List.Item 
                  key={idx}
                  title={item.title}
                  description={item.releaseYear}
                  left={props => <List.Icon {...props} icon="star-circle-outline" />}
                />
              ))}
            </List.Section>
          ) : (
            <Paragraph style={styles.noResult}>'{searchQuery}' 의 검색결과가 없습니다.</Paragraph>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  noResult: {
    paddingTop: 20,
    fontWeight: 'bold',
  }
});

export default Detail;