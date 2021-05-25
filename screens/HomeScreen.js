import React,{useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet,ScrollView,View,TouchableOpacity, SafeAreaView,KeyboardAvoidingView} from 'react-native';
import {Button, Input,Image,Avatar} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import CustomListItem from "../components/CustomListItem";
import {auth,db} from '../firebase';
import {AntDesign,SimpleLineIcons} from '@expo/vector-icons';

const HomeScreen=({navigation})=>{
	const [chats, setChats] = useState([])

	useEffect(() =>{
		const unsubscribe = db.collection('chats').onSnapshot((snapShot)=>
			setChats(
				snapShot.docs.map((doc)=>({
					id: doc.id,
					data: doc.data()
				}))
			)
		)
		return unsubscribe
	}, [])

	const signOutUser = () =>{
		auth.signOut().then(()=>{
			navigation.replace("Login");
		})
	};

	const enterChat = (id,chatName) =>{
		navigation.navigate('Chat', {
			id, chatName
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
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: 80,
					marginRight: 20
				}}>
					<TouchableOpacity activeOpacity={0.5}>
						<AntDesign name='camerao' size={24} color='black' />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('AddChat')}>
						<SimpleLineIcons name='pencil' size={24} color='black' />
					</TouchableOpacity>
				</View>
			)
		})
	},[navigation])

	return (
		<SafeAreaView>
			<ScrollView>
				{chats.map(({id,data: {chatName}})=>(
					<CustomListItem key={id} 
						id={id} 
						chatName={chatName}
						enterChat={enterChat}
					 />
				))}
			</ScrollView>
		</SafeAreaView>
	)

}

export default HomeScreen;

const styles = StyleSheet.create({
	container:{
		height: "100%",
	},
});