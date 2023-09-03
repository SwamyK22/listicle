import { View, Text } from 'react-native'
import React, { memo } from 'react';
import { styles } from './style';

const Seperator = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}/>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line}/>
    </View>
  )
}

export default memo(Seperator)