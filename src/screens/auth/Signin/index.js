import { ScrollView, Text } from 'react-native';
import React from 'react';
import { styles } from './style';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title='Sign In' />
      <Input label='E-mail' placeholder='example@gamil.com'/>
      <Input isPassword label='Password' placeholder='******'/>

      <Button title='Sign In' style={styles.btn} />
      <Seperator title='Or sign up with' />
      <GoogleLogin />

      <Text style={styles.footerText}>
      Don'nt have an account? 
      <Text style={styles.footerLink}> Sign Up</Text>
      </Text>
    </ScrollView>
  )
}

export default Signin;