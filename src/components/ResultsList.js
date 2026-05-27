import { StyleSheet, Text, View } from 'react-native';
import ResultCard from './ResultCard';

export default function ResultsList({
  results,
  selectedTrack,
  onSelectTrack,
  hasSearched,
  isTrackSaved,
  onAddToLibrary
}) {
  if (!hasSearched) {
    return (
      <View style={styles.panel}>
        <Text style={styles.title}>Résultats</Text>
        <Text style={styles.empty}>Lancez une recherche pour afficher les morceaux iTunes.</Text>
      </View>
    );
  }

  if (results.length === 0) {
    return (
      <View style={styles.panel}>
        <Text style={styles.title}>Résultats</Text>
        <Text style={styles.empty}>Aucun résultat trouvé pour cette recherche.</Text>
      </View>
    );
  }

  return (
    <View style={styles.panel}>
      <Text style={styles.title}>Résultats</Text>

      {results.map((track) => (
        <ResultCard
          key={track.trackId}
          track={track}
          isSelected={selectedTrack?.trackId === track.trackId}
          isSaved={isTrackSaved(track.trackId)}
          onSelect={onSelectTrack}
          onAddToLibrary={onAddToLibrary}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#2f3240',
    borderRadius: 8,
    backgroundColor: '#191b23'
  },
  title: {
    marginBottom: 14,
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900'
  },
  empty: {
    color: '#a9abb7',
    lineHeight: 22
  }
});
