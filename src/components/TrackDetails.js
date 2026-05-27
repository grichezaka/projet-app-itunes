import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TrackDetails({ track, isSaved, onAddToLibrary }) {
  if (!track) {
    return (
      <View style={styles.panel}>
        <Text style={styles.title}>Détail</Text>
        <Text style={styles.empty}>Sélectionnez un résultat pour voir ses informations.</Text>
      </View>
    );
  }

  const artwork = track.artworkUrl100?.replace('100x100bb', '300x300bb');

  return (
    <View style={styles.panel}>
      <Image source={{ uri: artwork }} style={styles.artwork} />

      <Text style={styles.genre}>{track.primaryGenreName || 'Musique'}</Text>
      <Text style={styles.trackName}>{track.trackName}</Text>
      <Text style={styles.artist}>{track.artistName}</Text>

      <View style={styles.infoBlock}>
        <Text style={styles.infoLabel}>Album</Text>
        <Text style={styles.infoValue}>{track.collectionName || 'Non renseigné'}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.infoLabel}>Prix</Text>
        <Text style={styles.infoValue}>
          {track.trackPrice ? `${track.trackPrice} ${track.currency}` : 'Non renseigné'}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, isSaved && styles.buttonDisabled]}
        onPress={() => onAddToLibrary(track)}
        disabled={isSaved}
      >
        <Text style={styles.buttonText}>{isSaved ? 'Déjà dans ma liste' : 'Ajouter à ma liste'}</Text>
      </TouchableOpacity>
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
  },
  artwork: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
    borderRadius: 8
  },
  genre: {
    marginBottom: 8,
    color: '#ff7a9e',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  trackName: {
    marginBottom: 6,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '900'
  },
  artist: {
    marginBottom: 14,
    color: '#b7b9c4',
    fontSize: 16
  },
  infoBlock: {
    marginBottom: 12
  },
  infoLabel: {
    marginBottom: 3,
    color: '#8f92a2',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  infoValue: {
    color: '#ffffff'
  },
  button: {
    minHeight: 50,
    marginTop: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e23a6f'
  },
  buttonDisabled: {
    opacity: 0.6
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '900'
  }
});
