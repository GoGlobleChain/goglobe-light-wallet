import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { I18n } from '../../../language/i18n';
class BindingPhone extends React.Component {
	static navigationOptions = {
		headerTitle: '绑定手机'
	};
	constructor(props) {
		super(props);
		this.state = {
			phone: null
		}
	}
	componentDidMount() {
		
		// storage
		// 	.load({
		// 		key: 'webHost'
		// 	})
		// 	.then(({ webHost }) => {
		// 		this.setState({
		// 			url: webHost
		// 		});
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 	});
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				{
					!this.state.phone ?
					<View>
						<Text>当前未绑定手机号</Text>
						<Button title={'去绑定'} onPress={() => this.props.navigation.navigate('GoBindPhone')}/>
					</View> :
					<View>
					<Text>当前绑定到手机号</Text>
					<Text>{this.state.phone}</Text>
				</View>
				}
				{/* <View >
					<Text>当前未绑定手机号</Text><Button title={I18n.t('my.home.bindPhone.button')}/>
					<View>
						<Text>输入手机号</Text>
						<Input placeholder="输入手机号"/>
						<Text>输入验证码</Text>
						<Input placeholder="输入验证码"/>
					</View>
					<View>
						<Text>在未绑定手机号到情况下，无法绑定矿机</Text>
						<Text>完成绑定手机号后，即可绑定矿机，开始挖矿获取代币</Text>
					</View>
				</View> */}

				
			</View>
		);
	}
}

export default BindingPhone;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff'
	}
});
