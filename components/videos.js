

function Videos(){
    return(
        <>
            <div className="videos">
                <div>
                    <iframe width={530} height={315} src="https://www.youtube.com/embed/_n7sOxSJxlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video-frame"></iframe>
                </div>
                <div>
                    <iframe width={530} height={315} src="https://www.youtube.com/embed/LOVqI6ijTmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video-frame"></iframe>
                </div>
            </div>
        </>
    )
}

export default Videos


