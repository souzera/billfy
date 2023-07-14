import axios from "axios"
import { useEffect, useState } from "react"
import { AccessTokenProps } from "../routes/playlist/playlist"
import { CardPlaylist, PlaylistProps } from "./playlist-container"

interface ListPlaylistProps extends AccessTokenProps {
    title: string,
}

export function ListPlaylist(props: ListPlaylistProps) {

    const [playlists, setPlaylists] = useState<PlaylistProps[]>([])

    const authorization = `${props.token_type} ${props.access_token}`

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await axios.get('https://api.spotify.com/v1/me/playlists',
                {
                    headers: {
                        Authorization: authorization,
                        "Content-Type": "application/json"
                    }
                })
            setPlaylists(responseData.data.items)
            console.log(playlists)
        }

        fetchData()
    })

    return (
        <>
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <div className="grid grid-cols-4 gap-4">
                {playlists.map((playlist, index) => {

                    let subdesc = playlist.description
                    if (subdesc.length > 64) {
                        subdesc = `${playlist.description.substring(0, 42)} ...`
                    }

                    let nameAdapter = playlist.name
                    if (nameAdapter.length > 18) {
                        nameAdapter = `${playlist.name.substring(0, 18)} ...`
                    }
                    return (
                        <div>
                            <CardPlaylist
                                name={nameAdapter}
                                image={playlist.images[0].url}
                                href={playlist.external_urls.spotify}
                                desc={subdesc} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}