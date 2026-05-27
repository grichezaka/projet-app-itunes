const ITUNES_SEARCH_URL = 'https://itunes.apple.com/search';

export async function searchTracks(searchTerm, searchType) {
  const params = new URLSearchParams({
    term: searchTerm,
    media: 'music',
    entity: 'song',
    limit: '24',
    attribute: searchType === 'artist' ? 'artistTerm' : 'songTerm'
  });

  const response = await fetch(`${ITUNES_SEARCH_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('La recherche iTunes a échoué.');
  }

  const data = await response.json();
  return data.results || [];
}
