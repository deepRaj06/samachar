import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000)
    }, [])
  return (
    <View className="flex-1 justify-center items-center bg-violetPrimary">
      <Animatable.Text className="text-4xl text-white font-bold" animation="fadeInDownBig" duration={2000}>समाचार</Animatable.Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})