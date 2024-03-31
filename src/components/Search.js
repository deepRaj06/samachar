import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import Card from './Card';
import {NEWS_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';

const apiKey = NEWS_API_KEY;

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const navigatn = useNavigation();

  const searchNews = async text => {
    // setLoading(true);
    setSearchText(text);
    if (text.length > 2) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&q=${text}&apiKey=${apiKey}`,
        // `https://newsapi.org/v2/top-headlines?country=in&apiKey=80e04b4f449a48c19d34c69bd9803712category=${category[selectedCategory].category}`,
      );
      const data = await response.json();
      setData(data.articles);
    }
    // setLoading(false);
  };

  return (
    <View className="flex-1">
      <View className="bg-violetPrimary flex-row items-center space-x-4 px-4">
        <TouchableOpacity onPress={() => navigatn.goBack()}>
          <ArrowLeftIcon color={'white'} size={18} />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter your news"
          value={searchText}
          placeholderTextColor={'white'}
          className="text-sm text-white"
          onChangeText={text => {
            searchNews(text);
          }}
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
  );
};

export default Search;

const styles = StyleSheet.create({});
