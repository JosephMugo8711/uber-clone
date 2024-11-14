import { Image, StyleSheet, Platform, View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
     <SafeAreaView className='items-center justify-center flex-1 bg-white'>
        <Text className={"text-red-500"}>Uber clone</Text>
        <StatusBar style="auto"/>
     </SafeAreaView>
  );
}
