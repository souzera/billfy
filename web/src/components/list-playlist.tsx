import axios from "axios"
import { useEffect, useState } from "react"
import { AccessTokenProps } from "../routes/playlist/playlist"
import { CardPlaylist, PlaylistProps } from "./playlist-container"
import { getSelectedPlaylist, setSelectedPlaylist } from "../util/selected-playlist"
import { usePlaylistContext } from "./context/playlist-context"

interface ListPlaylistProps extends AccessTokenProps {
    title: string,
    limit?: number,
    offset?: number,
}

export var exportIdPlaylist = 'undefined'

export function ListPlaylist(props: ListPlaylistProps) {

    const [playlists, setPlaylists] = useState<PlaylistProps[]>([])

    const authorization = `${props.token_type} ${props.access_token}`



    const fetchData = async () => {
        let limite = 40
        if (props.limit != null) {
            limite = props.limit
        }

        try {

            const responseData = await axios.get(`https://api.spotify.com/v1/me/playlists?limit=${limite}`,
                {
                    headers: {
                        Authorization: authorization,
                        "Content-Type": "application/json"
                    }
                })
            setPlaylists(responseData.data.items)
            console.log(responseData.data.items)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [authorization])

    const {setPlaylistSelected} = usePlaylistContext()

    return (
        <>
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1">
                {playlists.map((playlist, index) => {


                    let subdesc = playlist.description
                    if (subdesc.length > 64) {
                        subdesc = `${playlist.description.substring(0, 35)} ...`
                    }

                    let nameAdapter = playlist.name
                    if (nameAdapter.length > 17) {
                        nameAdapter = `${playlist.name.substring(0, 15)} ...`
                    }

                    return (
                        <div>

                            <button type="button" onClick={() => {
                                setPlaylistSelected(playlist.id)
                            }}>
                                <CardPlaylist
                                    name={nameAdapter}
                                    image={playlist.images[0].url}
                                    href={playlist.external_urls.spotify}
                                    desc={subdesc} />
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}