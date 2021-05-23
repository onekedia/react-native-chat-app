import React,{useState, useLayoutEffect} from 'react';
import {StyleSheet,ScrollView,View,TouchableOpacity, SafeAreaView,KeyboardAvoidingView} from 'react-native';
import {Button, Input,Image,Avatar} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import CustomListItem from "../components/CustomListItem";
import {auth,db} from '../firebase';
import {AntDesign,SimpleLineIcons} from '@expo/vector-icons';

const HomeScreen=({navigation})=>{
	const signOutUser = () =>{
		auth.signOut().then(()=>{
			navigation.replace("Login");
		})
	}

	useLayoutEffect(()=>{
		navigation.setOptions({
			title: "Signal",
			headerStyle: { backgroundColor: "#fff"},
			headerTitleStyle: { color: 'black'},
			headerTintColor: "black",
			headerLeft: ()=>(
				<View style={{marginLeft: 20}}>
					<TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
					<Avatar
						rounded source={{uri: auth?.currentUser?.photoURL }}
					/>
					</TouchableOpacity>
				</View>
			),
			headerRight: ()=>(
				<View style={{}}>
					<TouchableOpacity activeOpacity={0.5}>
						<AntDesign name='camerao' size={24} color='black' />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.5}>
						<SimpleLineIcons name='pencil' size={24} color='black' />
					</TouchableOpacity>
				</View>
			)
		})
	},[])

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