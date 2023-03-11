import React from 'react'

export default function Music() {
    return (
        <div className=" w-full h-full">
            <div className="border-solid border-b border-lines p-5"></div>
            <div className="text-secondary-1 text-base p-10">
                <p>{'//'} one of my favorite playlists </p>
                <br></br>
                <iframe src="https://open.spotify.com/embed/playlist/2O5EdOh3pJaatizIjbGhAv?utm_source=generator&theme=0" width="100%" height="600" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    )
}
