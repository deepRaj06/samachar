import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { NEWS_API_KEY } from "@env";

const apiKey = NEWS_API_KEY;

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = React.useState([
    {
      id: 1,
      name: 'Top Headlines',
      category: 'general',
    },
    {
      id: 5,
      name: 'Sports',
      category: 'sports',
    },
    {
      id: 2,
      name: 'Business',
      category: 'business',
    },
    {
      id: 3,
      name: 'Entertainment',
      category: 'entertainment',
    },
    {
      id: 4,
      name: 'Health',
      category: 'health',
    },
    {
      id: 6,
      name: 'Science',
      category: 'science',
    },
    {
      id: 7,
      name: 'Technology',
      category: 'technology',
    },
  ]);

  const getData = async () => {
    setLoading(true);
    console.log('cat', category[selectedCategory].category);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category[selectedCategory].category}&apiKey=${apiKey}`,
      // `https://newsapi.org/v2/top-headlines?country=in&apiKey=80e04b4f449a48c19d34c69bd9803712category=${category[selectedCategory].category}`,
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
    console.log('data', data);
  };

  const getData2 = async category => {
    console.log('cat', category[selectedCategory].category);
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`,
      // `https://newsapi.org/v2/top-headlines?country=in&apiKey=80e04b4f449a48c19d34c69bd9803712category=${category[selectedCategory].category}`,
    );
    const data = await response.json();
    setData(data.articles);
    console.log('data', data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <View className="flex-1 justify-center items-center ">

          <ActivityIndicator size="large" color="#5A4FCF" />
        </View>
      ) : (
        // <View>
        //   <Text>Loading...</Text>
        // </View>
        <View className="flex-1">
          <Header navigation={navigation} />
          <View className="px-4 py-2">
            <FlatList
              data={category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    className={
                      index == selectedCategory
                        ? 'px-4 py-1 mr-4 rounded-md bg-violetPrimary'
                        : 'px-4 py-1 mr-4 rounded-md bg-gray-200'
                    }
                    onPress={() => {
                      setSelectedCategory(index);
                      getData2(category[index].category);
                    }}>
                    <Text
                      key={index}
                      className={
                        index == selectedCategory
                          ? 'text-white'
                          : 'text-gray-600'
                      }>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              // keyExtractor={(item, index) => index.toString()} // Unique key for each item
            />
          </View>
          <View className="mb-16">
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                // console.log('flatlist_item', item);
                return <Card item={item} key={index} navigation={navigation} />;
              }}
              keyExtractor={(item, index) => index.toString()} // Unique key for each item
            />
          </View>
        </View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
