import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Provider, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
//=========================================================
  const navigation = useNavigation();
  const [open, setOpen] = React.useState(false);
  //=========================================================
  return (
    <Provider style={styles.fabGroup}>
      {/* <FAB
        style={styles.fab}
        small
        icon="home-circle"
        onPress={() => navigation.navigate('Main')}
      />
      <FAB
        style={styles.fab}
        small
        icon="movie-search"
        onPress={() => navigation.navigate('Detail')}
      /> */}
      <Portal>
        <FAB.Group
          fabStyle={styles.fabStyle}
          open={open}
          icon={open ? 'sitemap' : 'menu'}
          actions={[
            {
              icon: 'home-circle',
              label: 'home',
              onPress: () => navigation.navigate('Main'),
              labelStyle: { backgroundColor: 'transparent'}
            },
            {icon: 'movie-search', onPress: () => navigation.navigate('Detail')}
          ]}
          onStateChange={() => setOpen(!open)}
        />
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  fabStyle: {
    backgroundColor: '#eee',
  }
});

export default Menu;