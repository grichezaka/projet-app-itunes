import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchForm({
  searchTerm,
  searchType,
  onSearchTermChange,
  onSearchTypeChange,
  onSubmit
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Recherche</Text>

      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={onSearchTermChange}
        placeholder="Exemple : Daft Punk, Thriller..."
        placeholderTextColor="#8f92a2"
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />

      <View style={styles.typeRow}>
        <TouchableOpacity
          style={[styles.typeButton, searchType === 'artist' && styles.typeButtonActive]}
          onPress={() => onSearchTypeChange('artist')}
        >
          <Text style={[styles.typeText, searchType === 'artist' && styles.typeTextActive]}>Artiste</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeButton, searchType === 'track' && styles.typeButtonActive]}
          onPress={() => onSearchTypeChange('track')}
        >
          <Text style={[styles.typeText, searchType === 'track' && styles.typeTextActive]}>
            Nom de track
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.searchButton} onPress={onSubmit}>
        <Text style={styles.searchButtonText}>Rechercher</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    marginBottom: 8,
    color: '#d9dae3',
    fontSize: 16,
    fontWeight: '800'
  },
  input: {
    minHeight: 50,
    marginBottom: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#303340',
    borderRadius: 8,
    color: '#ffffff',
    backgroundColor: '#20222b'
  },
  typeRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10
  },
  typeButton: {
    flex: 1,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#303340',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#20222b'
  },
  typeButtonActive: {
    borderColor: '#ff7a9e',
    backgroundColor: '#332431'
  },
  typeText: {
    color: '#c7c8d2',
    fontWeight: '800'
  },
  typeTextActive: {
    color: '#ffffff'
  },
  searchButton: {
    minHeight: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e23a6f'
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: '900'
  }
});
