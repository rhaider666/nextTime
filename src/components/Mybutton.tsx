import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const Mybutton = (props:any) => {
    //const [isicon,setisicon]=React.useState(props.icon)
    return (
        <View>
            <Button icon={props.icon} style={props.style} mode={props.mode} buttonColor={props.btncol} textColor={props.btntxtcol} onPress={props.onsubmit}>
                {props.title}
            </Button>
        </View>
    )
}

export default Mybutton

const styles = StyleSheet.create({
})