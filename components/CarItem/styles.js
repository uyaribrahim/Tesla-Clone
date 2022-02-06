import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: '100%'
      },
      titles:{
        marginTop: '35%',
        width: '100%',
        alignItems: 'center'
        
      },
      title:{
        fontSize: 40,
        fontWeight: '700',
    
      },
      subTitle:{
        fontSize: 16,
        color: '#5c5e62'
    
      },
      subtitleCTA: {
        textDecorationLine: 'underline'
      },
      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },

      buttonsContainer: {
        position: 'absolute',
        bottom: 70,
        width: '100%'
      }
});

export default styles;