interface ClientAuthProps {
    client_id: string,
    redirect_uri: string,
    scope: string,
    client_secret?: string,
}

export function login(props: ClientAuthProps) {
    location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${props.client_id}&scope=${props.scope}&redirect_uri=${props.redirect_uri}`
}
