import { Image, StyleSheet, Text, View } from 'react-native';
import Rating from './Rating';

export default function Library({ library, onUpdateRating }) {
  return (
    <View style={styles.panel}>
      <View style={styles.header}>
        <Text style={styles.title}>Ma liste</Text>
        <Text style={styles.count}>
          {library.length} morceau{library.length > 1 ? 'x' : ''}
        </Text>
      </View>

      {library.length === 0 ? (
        <Text style={styles.empty}>Aucun morceau sauvegardé pour le moment.</Text>
      ) : (
        library.map((track) => (
          <View style={styles.item} key={track.trackId}>
            <Image source={{ uri: track.artworkUrl100 }} style={styles.image} />

            <View style={styles.textBlock}>
              <Text style={styles.trackName} numberOfLines={1}>
                {track.trackName}
              </Text>
              <Text style={styles.artistName} numberOfLines={1}>
                {track.artistName}
              </Text>
              <Rating value={track.rating || 0} onChange={(rating) => onUpdateRating(track.trackId, rating)} />
            </View>
          </View>
        ))
      )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 14
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900'
  },
  count: {
    color: '#ffb0c4',
    fontWeight: '900'
  },
  empty: {
    color: '#a9abb7',
    lineHeight: 22
  },
  item: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#22242e'
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 6
  },
  textBlock: {
    flex: 1
  },
  trackName: {
    marginBottom: 3,
    color: '#ffffff',
    fontWeight: '900'
  },
  artistName: {
    marginBottom: 5,
    color: '#b7b9c4'
  }
});
