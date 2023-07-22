import { StyleSheet, Text, View,TextInput} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Textbox = (props:any) => {
    const [icon, seticon] = useState(props.icon)
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.txtbx}
        placeholder={props.placeholder}
        placeholderTextColor={'gray'}
        value={props.value}
        onChangeText={props.submit}
      />
      {props.icon?<Icon style={styles.icn} name={props.icon} color={'yellow'} size={25}/>:null}
    </View>
  )
}

export default Textbox

const styles = StyleSheet.create({
    main:{
      backgroundColor:'#1d1d1d',
      borderRadius:20,
      flexDirection:'row',
      alignItems:'center',
      padding:3,
      height:'100%',
      width:'100%'
    },
    txtbx:{
        padding:10,
        height:55,
        color:'white',
        fontSize:16
    },
    icn:{
        position:'absolute',
        right:20

    }
})