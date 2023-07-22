import { StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import { Text } from 'react-native-paper';
import Textbox from './components/Textbox';
import Mybutton from './components/Mybutton';
const SignUp = ({navigation}:any) => {
  const [fName, setfName] = useState('')
  const [checked, setChecked] = useState(false)
  return (
    <View style={styles.con}>
      <View style={styles.vie}>
        <View style={styles.fview}>
          <Textbox placeholder='First Name' value={fName} submit={(val: string) => { setfName(val) }} />
        </View>
        <View style={styles.fview}>
          <Textbox placeholder='Last Name' value={fName} submit={(val: string) => { setfName(val) }} />
        </View>
      </View>
      <View style={styles.sview}>
        <Textbox icon='email' placeholder='Email' value={fName} submit={(val: string) => { setfName(val) }} />
      </View>

      <View style={styles.sview}>
        <Textbox icon='discord' placeholder='Discord username' value={fName} submit={(val: string) => { setfName(val) }} />
      </View>

      <View style={styles.sview}>
        <Textbox icon='lock' placeholder='Password' value={fName} submit={(val: string) => { setfName(val) }} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:20,marginVertical:10 }}>
        <Checkbox
          color='yellow'
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text variant='bodyMedium' style={{color:'white'}}>I agree to Terms & Conditions of </Text>
        <TouchableOpacity>
          <Text style={{ textDecorationLine: 'underline', color: 'yellow' }} variant='bodyLarge'>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <Text variant='bodyMedium'> and </Text>

      </View>
      <Mybutton
        title='Sign Up'
        mode='elevated'
        btncol='yellow'
        btntxtcol='black'
        style={styles.btn}
        onsubmit={() => { }}
      />
      <View style={styles.div}>
        <View style={styles.line} />
        <View>
          <Text style={styles.txt}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>

      <Mybutton
        title='Sign in with Discord'
        mode='elevated'
        btncol='dodgerblue'
        btntxtcol='white'
        style={styles.btn}
        icon={'discord'}
        onsubmit={() => { }}
      />
      <Mybutton
        title='Sign in with Facebook'
        mode='elevated'
        btncol='blue'
        btntxtcol='white'
        style={styles.btn}
        icon={'facebook'}
        onsubmit={() => { }}
      />
      <Mybutton
        title='Sign in with Google'
        mode='elevated'
        btncol='lightblue'
        btntxtcol='black'
        style={styles.btn}
        icon={'google'}
        onsubmit={() => { }}
      />
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',margin:30}}>
        <Text style={{color:'white'}} variant='bodyMedium'>Already have an account? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Routes')}}>
          <Text style={{ textDecorationLine: 'underline',color:'yellow' }} variant='bodyLarge'>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>


  )
}

export default SignUp

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: '#131313'
  },
  fview: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    //borderWidth: 1,
    width: '45%',
    marginLeft: 15
  },
  vie: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  sview: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    //borderWidth: 1,
    width: '93%',
    marginLeft: 15,
    marginTop: 5
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
  },
  div: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:20
  },
  line: {
    //flex: 1, 
    height: 2,
    backgroundColor: 'white',
    width: '40%',
  },
  txt: {
    width: 50,
    textAlign: 'center',
    color: 'white',
  },
})