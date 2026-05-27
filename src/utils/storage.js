import AsyncStorage from '@react-native-async-storage/async-storage';

const LIBRARY_KEY = 'itunes-seeker-mobile-library';

export async function getLibrary() {
  const savedLibrary = await AsyncStorage.getItem(LIBRARY_KEY);

  if (!savedLibrary) {
    return [];
  }

  try {
    return JSON.parse(savedLibrary);
  } catch {
    return [];
  }
}

export async function saveLibrary(library) {
  await AsyncStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
}

export function isTrackInLibrary(library, trackId) {
  return library.some((track) => track.trackId === trackId);
}
