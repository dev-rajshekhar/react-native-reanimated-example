import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const animationList = [
  {title: 'Shared Element Transition', animation: 'shared_element'},
];

const Home = () => {
  const navigation = useNavigation();

  const navigateToAnimation = animation => {
    navigation.navigate(animation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animation List</Text>
      {animationList.map(item => (
        <TouchableOpacity
          key={item.animation}
          style={styles.item}
          onPress={() => navigateToAnimation(item.animation)}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Home;
