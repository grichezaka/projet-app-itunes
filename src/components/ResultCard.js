import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultCard({ track, isSelected, isSaved, onSelect, onAddToLibrary }) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selected]}
      onPress={() => onSelect(track)}
    >
      <Image source={{ uri: track.artworkUrl100 }} style={styles.image} />

      <View style={styles.textBlock}>
        <Text style={styles.title} numberOfLines={1}>
          {track.trackName}
        </Text>
        <Text style={styles.artist} numberOfLines={2}>
          {track.artistName}
        </Text>

        {isSelected && (
          <TouchableOpacity
            style={[styles.addButton, isSaved && styles.addButtonDisabled]}
            onPress={() => onAddToLibrary(track)}
            disabled={isSaved}
          >
            <Text style={styles.addButtonText}>
              {isSaved ? 'Déjà dans ma liste' : 'Ajouter à ma liste'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    backgroundColor: '#22242e'
  },
  selected: {
    borderColor: '#ff7a9e',
    backgroundColor: '#2a2530'
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 6
  },
  textBlock: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    marginBottom: 5,
    color: '#ffffff',
    fontWeight: '900'
  },
  artist: {
    color: '#b7b9c4'
  },
  addButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e23a6f'
  },
  addButtonDisabled: {
    opacity: 0.6
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900'
  }
});
