import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React, { memo, useState } from 'react'
import { styles } from './style'

const Input = ({ label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const eyePressChange = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />
        {isPassword && <Pressable onPress={eyePressChange}>
            <Image style={styles.eye} source={ isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')}/>
        </Pressable>}
      </View>
    </View>
  )
}

export default memo(Input)