import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/solid';

const Card = ({item, navigation}) => {
  console.log('navigation', navigation);
  console.log('item_date', item.publishedAt);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const date = new Date(item.publishedAt);
//   const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : // : 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.publishedAt}>
            {/* {item.publishedAt.toLocaleString('en-GB', {timeZone: 'UTC'})} */}
            {date.toLocaleString('en-IN', options)}
          </Text>
        </View>
        {/* Read More Btn */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('NewsViewer', {url: item.url})}>
          <Text style={styles.buttonText}>Read More</Text>
          <ArrowRightIcon color="#fff" size={18} />
        </TouchableOpacity>
      </View>

      {/* Source name */}
      <View style={styles.sourceNameContainer}>
        <Text style={styles.sourceName}>{item.source.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
  textContainer: {
    paddingHorizontal: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    color: '#8b8d8f',
  },
  description: {
    color: '#5f6163',
    fontSize: 14,
    marginVertical: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
  publishedAt: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    backgroundColor: '#5A4FCF',
    padding: 12,
    width: 120,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sourceNameContainer: {
    backgroundColor: '#5A4FCF',
    padding: 8,
    borderRadius: 8,
    position: 'absolute',
    top: 16,
    right: 18,
  },
  sourceName: {
    fontSize: 12,
    color: 'white',
  },
});

export default Card;
