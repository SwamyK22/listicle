import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        
    },

    agreeView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText:{
        color: colors.gray,
        marginHorizontal: 13
    },
    agreeTextBold: {
        fontWeight: 'bold'
    },
    btn:{
        marginVertical: 16
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        margin: 12
    },
    footerLink:{
        fontWeight: 'bold'
    }
})