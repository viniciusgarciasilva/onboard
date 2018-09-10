import React, {Component} from 'react';
import {Text, TouchableOpacity, ActivityIndicator } from 'react-native';

class Button extends Component {

    render(){
        const indicator = <ActivityIndicator size='large' color='#FFF'/>;
        const text = <Text style={styles.textStyle}>{this.props.children}</Text>;

        return(
            <TouchableOpacity   
                onPress={this.props.onPress} 
                style={this.props.valid? styles.buttonEnabled : styles.buttonDisabled}
                disabled={this.props.valid? false : true}>
                {this.props.loading?indicator : text}
            </TouchableOpacity>
        );
    };
};

const styles: any = {
    textStyle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center'
    },
    buttonEnabled: {  
        flex: 1,
        backgroundColor: '#27D7F0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    buttonDisabled: {  
        flex: 1,
        backgroundColor: '#CFCFCF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    }
}

export default Button;