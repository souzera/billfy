
import { license } from "../../connection/license"


const client_id = license.client_id
const redirect_uri = license.redirect_uri
const scope = license.scope

export function Login() {

    return (

        <div className='flex flex-1 h-screen bg-black'>
            <div id="image-login-container" className='flex h-screen w-[65%]'>
                <div className='h-[100%] w-[100%]'>
                    <img className='object-cover w-full h-full' src="https://cdna.artstation.com/p/assets/images/images/064/562/054/large/porforever-03-secret-aquarium.jpg?1688217216" alt="ilustracao" />
                </div>
            </div>

            <div className='flex flex-1 flex-col h-100 w-100 gap-7 justify-center items-center'>

                <div className='flex justify-center items-center gap-3 h-auto'>
                    <img className="w-[40%]" src="./src/assets/img/logo/billfy-green.svg" alt="logo billfy" />
                    <strong className="text-spotify text-5xl">Billfy</strong>
                </div>


                <div className='w-[60%] h-auto'>
                    <p className='font-bold text-white text-sm'>
                        Compartilhe e descubra playlists incríveis na nossa plataforma!
                    </p>
                </div>

                <div className='bg-spotify flex py-3 p-5 font-extrabold rounded-full'>
                    <button type="button" onClick={() => {
                        location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`
                    }
                    }> Logar com Spotify</button>
                </div>

            </div>
        </div>
    )
}