interface AudioContainerProps{
    href: string
}

export function AudioContainer({href}:AudioContainerProps){
    

    return (
        <>
            <iframe className="my-4 rounded-xl h-[70vh] w-full" src={href} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </>
    )

}