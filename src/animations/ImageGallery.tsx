import React from 'react';

import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {images} from '../data/images';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {sharedTransition} from '../CustomTransition';

const ImageGallery = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('ImageDetails', {item});
      }}>
      <Animated.Image
        sharedTransitionStyle={sharedTransition}
        sharedTransitionTag={item.id}
        source={{uri: item.image}}
        style={styles.image}
      />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={images}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

export default ImageGallery;
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
