import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardSection from './components/CardSection';
import Card from './components/Card';
import ActionButton from 'react-native-action-button';
import { readUser } from '../domain/User'

export interface Props {
    navigation: any;
}

interface State {
    user: any;
}

class Detail extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {}
        }
    }

    onPressButton = () => {
        this.props.navigation.navigate('EditUser', { token: this.props.navigation.state.params.token, id: this.state.user.id });
    }

    componentDidMount = () => {
        readUser(this.props.navigation.state.params.id , this.props.navigation.state.params.token)
            .then( (response: any) => {
                console.log('DetailScreen/ComponentDidMount -> Response: ', response);
                this.setState({ user: response.user });
            })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Card>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.textStyle}> Name: </Text>
                            <Text style={styles.itemStyle}>{this.state.user.name}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.textStyle}> Role: </Text>
                            <Text style={styles.itemStyle}>{this.state.user.role}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <Text style={styles.textStyle}> E-mail: </Text>
                            <Text style={styles.itemStyle}>{this.state.user.email}</Text>
                            <Text ></Text>
                        </View>
                    </CardSection>
                </Card>
                <ActionButton buttonColor="#27D7F0" onPress={() => this.onPressButton()} />
            </View>
        );
    }
}

export default Detail;

const styles: any = {
    containerStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    textStyle: {
        fontSize: 17,
        width: 70,
        fontWeight: 'bold'
    },
    itemStyle: {
        fontSize: 17,
        flex: 1
    }
}