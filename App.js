import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppHeader from './src/components/AppHeader';
import Library from './src/components/Library';
import ResultsList from './src/components/ResultsList';
import SearchForm from './src/components/SearchForm';
import TrackDetails from './src/components/TrackDetails';
import { searchTracks } from './src/services/itunesApi';
import { getLibrary, isTrackInLibrary, saveLibrary } from './src/utils/storage';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('artist');
  const [results, setResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [library, setLibrary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    async function loadLibrary() {
      const savedLibrary = await getLibrary();
      setLibrary(savedLibrary);
    }

    loadLibrary();
  }, []);

  useEffect(() => {
    saveLibrary(library);
  }, [library]);

  async function handleSearch() {
    if (!searchTerm.trim()) {
      setErrorMessage('Veuillez écrire une recherche.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setHasSearched(true);

    try {
      const tracks = await searchTracks(searchTerm.trim(), searchType);
      setResults(tracks);
      setSelectedTrack(tracks[0] || null);
    } catch (error) {
      setErrorMessage(error.message);
      setResults([]);
      setSelectedTrack(null);
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddToLibrary(track) {
    if (isTrackInLibrary(library, track.trackId)) {
      return;
    }

    // On sauvegarde seulement les informations utiles pour la liste personnelle.
    const newTrack = {
      trackId: track.trackId,
      trackName: track.trackName,
      artistName: track.artistName,
      collectionName: track.collectionName,
      artworkUrl100: track.artworkUrl100,
      rating: 0
    };

    setLibrary([newTrack, ...library]);
  }

  function handleUpdateRating(trackId, rating) {
    setLibrary((currentLibrary) =>
      currentLibrary.map((track) => (track.trackId === trackId ? { ...track, rating } : track))
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader />

        <SearchForm
          searchTerm={searchTerm}
          searchType={searchType}
          onSearchTermChange={setSearchTerm}
          onSearchTypeChange={setSearchType}
          onSubmit={handleSearch}
        />

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        {isLoading ? <ActivityIndicator color="#ff7a9e" size="large" style={styles.loader} /> : null}

        <View style={styles.section}>
        <ResultsList
          results={results}
          selectedTrack={selectedTrack}
          onSelectTrack={setSelectedTrack}
          hasSearched={hasSearched}
          isTrackSaved={(trackId) => isTrackInLibrary(library, trackId)}
          onAddToLibrary={handleAddToLibrary}
        />

          <TrackDetails
            track={selectedTrack}
            isSaved={selectedTrack ? isTrackInLibrary(library, selectedTrack.trackId) : false}
            onAddToLibrary={handleAddToLibrary}
          />

          <Library library={library} onUpdateRating={handleUpdateRating} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121318'
  },
  content: {
    padding: 20,
    paddingBottom: 40
  },
  section: {
    gap: 16
  },
  errorMessage: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    color: '#ffd7df',
    backgroundColor: 'rgba(226, 58, 111, 0.22)'
  },
  loader: {
    marginBottom: 14
  },
});
