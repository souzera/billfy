
export interface PlaylistProps{
    images: [{
        url: string
    }],
    name:string,
    description: string,
    external_urls:{
        spotify:string
    }
}

interface CardPlaylistProps{
    name: string,
    image:string,
    href:string,
    desc?:string
}

export function CardPlaylist(props:CardPlaylistProps) {

    return (
        <>
            <a href={props.href} target="_blank">
                <div className="flex flex-1 w-52 h-86 flex-col justify-center items-start bg-[#121212] hover:bg-[#202020] hover:scale-110 p-4 rounded-xl transition ease-out gap-3">
                    <div className="rounded-xl">
                        <img className="rounded-xl" src={props.image} alt="aldebaram hits" />
                    </div>
                    <div className="flex flex-col h-20 overflow-hidden">
                        <strong className="font-bold text-lg">{props.name}</strong>
                        <span className="font-semibold text-sm text-zinc-600">{(props.desc)}</span>
                    </div>
                </div>
            </a>
        </>
    )
}