import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function App() {
	const tw = useTailwind();
  return (
	<SafeAreaView className="h-full">
		<View className="pt-12 items-center">
			<Text className="text-blue-800 font-semibold">
				Hello tailwind
			</Text>
		</View>
	</SafeAreaView>
  );
}