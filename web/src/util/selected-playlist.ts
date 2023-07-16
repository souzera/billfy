
var url_selected_playlist = 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0FOF1IUWK1W'


export function getSelectedPlaylist(){
    return url_selected_playlist
}

export function setSelectedPlaylist(id_playlist: string){
    url_selected_playlist = `https://open.spotify.com/embed/playlist/${id_playlist}`
}