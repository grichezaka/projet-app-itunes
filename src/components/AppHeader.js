import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.label}>Home</Text>
      <Text style={styles.title}>iTunes</Text>
      <Text style={styles.intro}>
        Recherchez un artiste ou un morceau, consultez les détails et créez votre bibliothèque notée.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 22
  },
  label: {
    marginBottom: 8,
    color: '#ff7a9e',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase'
  },
  title: {
    marginBottom: 10,
    color: '#ffffff',
    fontSize: 42,
    fontWeight: '900'
  },
  intro: {
    color: '#c7c8d2',
    fontSize: 16,
    lineHeight: 23
  }
});
