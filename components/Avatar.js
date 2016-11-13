import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

class Contact extends Component{
	render(){
		return(
			<Text>Twitter and Github: @luispeerez</Text>
		);
	}
}

class Description extends Component{
	render(){
		return(
			<Text>Web developer @spaceshiplabs</Text>
		);
	}
}

export default class Avatar extends Component{

	constructor(props){
		super(props);
		this.state = {showContact: true};

		setInterval(() => {
			this.setState({showContact: !this.state.showContact});
		}, 1000);
	}

	render(){
		let pic = {
			uri: 'https://i.stack.imgur.com/urY2y.jpg?s=328&g=1'
		};
		let content = this.state.showContact ? <Contact></Contact> : <Description></Description>;
		return(
			<View style={styles.avatarContainer}>
				<Image source={pic} style={styles.avatarImg} />
				{content}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	avatarImg:{
		width:100,
		height: 100
	},
	avatarContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10		
	}
});