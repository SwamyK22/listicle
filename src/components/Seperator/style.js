import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
    },
    line:{
        height: 1,
        flex: 1,
        backgroundColor: colors.lightGray
    },
    title:{
        color: colors.blue,
        fontWeight: '500',
        marginHorizontal: 8
    }
})