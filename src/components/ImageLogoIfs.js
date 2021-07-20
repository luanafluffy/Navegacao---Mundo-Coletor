import * as React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

export default function ImageLogoIfs({ fromWeb, image, title, text }) {
    return (
        <>
            {fromWeb || <Image source={image} style={styles.logoImage} />}
            <Text style={[title ? styles.logoTitle : '']} >{title}</Text>
            <Text style={styles.logoText} >{text}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    logoImage: {
        marginTop: 10,
        height: 100,
        width: 80,
        marginBottom: 10,
    },
    logoTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000000',
        marginBottom: 5,
        textAlign: 'center'
    },
     logoText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#000000',
        marginBottom: 10,
        textAlign: 'center'
    }
});
