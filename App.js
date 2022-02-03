import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $70,000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

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

  }



});
