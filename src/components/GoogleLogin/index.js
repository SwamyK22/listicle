import { TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react';
import { styles } from './style';

const GoogleLogin = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image style={styles.img} source={require('../../assets/google.png')} />
    </TouchableOpacity>
  )
}

export default memo(GoogleLogin)