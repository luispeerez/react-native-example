import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

export default class Avatar extends Component{
	render(){
		let pic = {
			uri: 'https://www.gravatar.com/avatar/72b63c569c2e576ec1ff9d4566d2bc5c?s=328&d=identicon&r=PG'
		};
		return(
			<Image source={pic} style={styles.avatarImg} />
		);
	}
}

const styles = StyleSheet.create({
	avatarImg:{
		width:100,
		height: 100
	}
});