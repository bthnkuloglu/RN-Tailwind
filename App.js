import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
const App = () => {
  
  return (
    <SafeAreaView className={"flex-1 justify-center bg-gray-900"}>
      <View className={"flex items-center"}>
        <Text className={" text-red-500 text-3xl font-extrabold"}>
          Hello.This template is a combination of React Native and Tailwind
          </Text>
      </View>
    
 
    </SafeAreaView >
  )
};

export default App;


