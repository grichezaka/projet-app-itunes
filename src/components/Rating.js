import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Rating({ value, onChange }) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((note) => (
        <TouchableOpacity key={note} onPress={() => onChange(note)}>
          <Text style={[styles.star, note <= value && styles.starActive]}>★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 3
  },
  star: {
    color: '#676b78',
    fontSize: 25
  },
  starActive: {
    color: '#ffc857'
  }
});
