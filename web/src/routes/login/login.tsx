import { license } from "../../connection/license"


const client_id = license.client_id
const redirect_uri = license.redirect_uri
const scope = license.scope

export function Login() {

    return (

        <div className='flex flex-1 h-screen bg-black'>
            <div className='flex h-screen w-[65%]'>
                <div className='h-[100%] w-[100%]'>
                    <img className='object-cover w-full h-full' src="https://cdna.artstation.com/p/assets/images/images/064/562/054/large/porforever-03-secret-aquarium.jpg?1688217216" alt="ilustracao" />
                </div>
            </div>

            <div className='flex flex-1 flex-col h-100 w-100 gap-7 justify-center items-center'>

                <div className='w-[50%] h-auto'>
                    <img src="./src/assets/img/logo/spotify-green.svg" alt="logo spotify" />
                </div>


                <div className='w-[50%] h-auto'>
                    <p className='font-bold text-white text-sm'>
                        Compartilhe e descubra playlists incríveis na nossa plataforma!
                    </p>
                </div>

                <div className='bg-spotify py-3 p-5 font-bold rounded-full'>
                    <button type="button" onClick={() => {
                        location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`
                    }
                    }> Logar com Spotify</button>
                </div>

            </div>
        </div>
    )
}