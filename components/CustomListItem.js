import React,{useState, useLayoutEffect} from 'react';
import {StyleSheet,ScrollView,SafeAreaView} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';



const CustomListItem=({id,chatName,enterChat})=>{
	return (
		<ListItem>
			<Avatar
				rounded
				source={{
					uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
				}}
			/>
			<ListItem.Content>
				<ListItem.Title style={{fontHeight: '800'}}>
					Youtube Chat
				</ListItem.Title>
				<ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
					This is a test Subtitle
					This is a test Subtitle
					This is a test Subtitle
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