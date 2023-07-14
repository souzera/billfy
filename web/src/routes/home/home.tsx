export function Home() {


    return (

        <div className="flex flex-1 flex-col gap-3 bg-black h-screen  font-bold justify-center items-center text-3xl">
                <a className="text-spotify hover:text-green-700" href="/login">Login</a>
                <a className="text-spotify hover:text-green-700" href="/playlists">Playlists</a>
        </div>

    )
}