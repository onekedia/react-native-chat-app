import React,{useState, useLayoutEffect} from 'react';
import {StyleSheet,ScrollView,SafeAreaView,KeyboardAvoidingView} from 'react-native';
import {Button, Input,Image} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import CustomListItem from "../components/CustomListItem";


const HomeScreen=({navigation})=>{
	return (
		<SafeAreaView>
			<ScrollView>
				<CustomListItem />
			</ScrollView>
		</SafeAreaView>
	)

}

export default HomeScreen;

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: 'white'
	},
	inputContainer: {
		width: 300
	},
	button: {
		width: 200,
		marginTop: 10
	}
  
});