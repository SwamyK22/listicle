import { View, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { styles } from './style'

const Checkbox = ({checked, onCheck}) => {
  
  return (
    <TouchableOpacity onPress={() => onCheck(!checked)} activeOpacity={0.6} style={styles.container}> 
      {checked ? (
        <View style={styles.innerContainer}>
            <Image style={styles.icon} source={require('../../assets/check.png')}/>
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

export default memo(Checkbox)