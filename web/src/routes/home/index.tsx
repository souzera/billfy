import { BsSpotify } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export function Home() {

    const navigate = useNavigate()

    const handleLoginButton = () => {
        navigate("/login")
    }

    return (

        <div className="gap-3 bg-zinc-950 h-screen text-white font-bold justify-center items-center">

            <header className='fixed pt-2 bg-zinc-950 shadow-2xl shadow-zinc-950'>
                <div className=' flex w-screen h-[10vh] justify-evenly items-center'>
                    <div className='flex flex-1 h-[100%]  items-center gap-3 px-10'>
                        <a className="flex h-[60%] hover:scale-110 transition ease-out" href="/">
                            <img src="./src/assets/img/logo/billfy-green.svg" alt="logo billfy" />
                        </a>
                    </div>

                    <div className=' flex items-center px-10 gap-6'>
                        <span className='hover:scale-105 transition ease-out' onClick={handleLoginButton}>Login</span>
                        <a href="https://www.spotify.com/br-pt/signup">
                            <div className=' flex flex-1 bg-spotify scale-95 hover:scale-100 transition ease-out py-3 px-6 rounded-full text-zinc-950'>
                                Cadastrar-se
                            </div>
                        </a>
                    </div>
                </div>
            </header>

            <div>

                <main>
                    <div className='flex flex-1 justify-center items-center h-screen overflow-auto py-20 px-10'>
                        <div className='flex flex-1 mx-14 pt-5 px-6 gap-12 text-sm font-normal'>
                            <div className='flex flex-col gap-3 hover:scale-105 transition duration-1000 ease-in-out'>
                                <a href="https://open.spotify.com/intl-pt/album/5EAEpt26lzvDKNDFQD94b6?si=vR35x9AxRu6DsCSHlS0_8g">
                                    <img className='w-[80vw] rounded-xl' src="https://m.media-amazon.com/images/I/91GRY6FzEcL._AC_SX569_.jpg" alt="capa cd queen" />
                                    <div className='h-[3px] bg-zinc-900 rounded-full' />
                                </a>
                            </div>


                            <div className='flex flex-col gap-3 transition ease-in-out duration-1000 hover:scale-105'>
                                <p className='text-5xl font-bold'>
                                    Descubra uma nova forma de desfrutar da sua coleção de músicas.
                                </p>
                                <p>
                                    Organize e acesse suas músicas favoritas em um só lugar, crie playlists personalizadas para cada ocasião e deixe-se levar pela experiência de reprodução perfeita diretamente no seu navegador.
                                </p>

                                <div>
                                    <div onClick={handleLoginButton} className=' flex gap-4 items-center text-zinc-950 font-bold bg-spotify scale-95 hover:scale-100 transition ease-out py-3 px-6 rounded-full'>
                                        <BsSpotify size={24} />
                                        Logar com Spotify
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer>
                    <div className='bg-black flex h-auto text-zinc-600 font-normal px-10 py-5 '>

                        <div className='flex flex-col gap-2'>
                            <div className=' flex justify-center items-center gap-3 h-auto w-auto'>
                                <img className='w-10' src="./src/assets/img/logo/billfy-black.svg" alt="logo billfy" />
                                <strong className="text-zinc-900 text-xl">Billfy</strong>
                            </div>

                            <span className='text-zinc-900 text-xs'> © Billfy 2023 </span>
                        </div>

                    </div>
                </footer>
            </div>
        </div>

    )
}