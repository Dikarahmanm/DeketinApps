import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';

export default function App() {
	
  return (
	<NavigationContainer>
		{/* HOC - High Order Component */}
		<AuthProvider>
			{/* Passes down the cool auth stuff to children */}
			<StackNavigator />
		</AuthProvider>
	</NavigationContainer>
  );
}