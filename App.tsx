import React from 'react';
import {SafeAreaView, Text, View, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === "dark"
  return (
    <SafeAreaView className="h-screen bg-black flex items-center">
      <View className="w-full backdrop-blur-lg bg-white/10 p-5 flex flex-row justify-between items-center shadow-lg rounded-b-lg">
        <Text className="text-2xl font-bold">first android app</Text>
      </View>
      <View className="p-3">
        <Text className="text-white">
          hey myself Manvendra Singh, this is my first android app using
          react-native with tailwindcss {`${isDarkMode}`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
