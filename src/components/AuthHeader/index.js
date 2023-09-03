import { View, Text, Pressable, Image } from 'react-native'
import React, { memo } from 'react'
import { styles } from './style'

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}>
        <Image style={styles.image} source={require('../../assets/auth_back.png')}/>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default memo(AuthHeader)