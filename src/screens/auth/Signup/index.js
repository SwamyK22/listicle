import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = () => {
    const [checked, setChecked] = useState(true);
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title='Sign Up' />
      <Input label='Name' placeholder='John Doe'/>
      <Input label='E-mail' placeholder='example@gamil.com'/>
      <Input isPassword label='Password' placeholder='******'/>

      <View style={styles.agreeView}>
        <Checkbox checked={checked} onCheck={setChecked}/>
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
      </View>

      <Button title='Sign Up' style={styles.btn} />
      <Seperator title='Or sign up with' />
      <GoogleLogin />

      <Text style={styles.footerText}>
      Already have an account? 
      <Text style={styles.footerLink}> Sign In</Text>
      </Text>
    </ScrollView>
  )
}

export default SignUp;