import React,{useState, useLayoutEffect,useEffect} from 'react';
import {StyleSheet,ScrollView,SafeAreaView} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import { db } from '../firebase';


const CustomListItem=({id,chatName,enterChat})=>{
	const [chatMessages,setChatMessages] = useState([]);

	useEffect(()=>{
		const chat = db.collection('chats').doc(id).collection('messages');
		const unsubscribe = chat.orderBy('timestamp', 'asc').onSnapShot(snapShot=>
			setChatMessages(snapShot.docs.map(doc=> doc.data()))
		)
		return unsubscribe
	},[])

	return (
		<ListItem key={id} onPress={()=> enterChat(id,chatName)} bottomDivider >
			<Avatar
				rounded
				source={{
					uri: chatMessages?.[0]?.photoURL || 
						"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
				}}
			/>
			<ListItem.Content>
				<ListItem.Title style={{fontWeight: '800'}}>
					{chatName}
				</ListItem.Title>
				<ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
					{chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	)

}

export default CustomListItem;

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