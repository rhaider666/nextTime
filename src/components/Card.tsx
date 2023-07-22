import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ imageSource, title, description, onPress }: any) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>Completed</Text>
                    </TouchableOpacity>
                    <Text style={{position:'absolute',right:10,color:'white'}}>10 min</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#1d1d1d',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 16,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        height: 150
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 4,
        margin: 16,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'white'
    },
    description: {
        fontSize: 14,
        color: '#888',
    },
    button: {
        marginTop: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#262626',
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: 'yellow',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Card;
