import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {sharedTransition} from '../CustomTransition';

interface ImageDetailsProps {
  route: any;
}

const ImageDetails = ({route}: ImageDetailsProps) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionStyle={sharedTransition}
        sharedTransitionTag={item.id}
        source={{uri: item.image}}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.detailsText}>{item.details}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    padding: 16,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: 'normal',
    marginVertical: 10,
  },
  titleText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    height: Dimensions.get('screen').width,
    width: Dimensions.get('screen').width,
  },
});
export default ImageDetails;
