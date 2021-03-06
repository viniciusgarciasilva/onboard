import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardSection = (props: any) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 90,
        marginBottom: 10,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderRadius: 5
    }
});

export default CardSection;