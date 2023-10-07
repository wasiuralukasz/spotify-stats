import React from "react";
import styled from "styled-components";
import useUserData from "../../hooks/useUserData";

export const Wrapper = styled.div`
    width: 80%;
`

export const Artist = styled.div`
    width: 100px;
    height: 100px;
    padding: 0;
    display: inline-flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
    justify-content: center;
`
export const ArtistImage = styled.img`
    width: 100%;
    height: 100%;
`

export const ArtistText = styled.p`
    font-size: 10px;
    margin: 5px;
`



const Main = () => {
    const URL_ARTISTS = "https://api.spotify.com/v1/me/top/artists";
    const URL_TRACKS =  "https://api.spotify.com/v1/me/top/tracks";
    const topArtists = useUserData(URL_ARTISTS);
    console.log(topArtists);
    const topTracks = useUserData(URL_TRACKS);

    return(
        <Wrapper>
            <h2>Top Artist:</h2>
                {topArtists ? (
                    topArtists.items.map((item, i) => {
                        if(i < 5) {
                            return (
                                <Artist>
                                    <ArtistImage src={item.images[1].url} alt="Artist Image" />
                                    <ArtistText>{item.name}</ArtistText>
                                </Artist>
                            )
                        }
                    })
                    ) : (
                    <ArtistImage />
                )}
            <h2>Top Tracks:</h2>
                {topTracks ? (
                    topTracks.items.map((item, i) => {
                        if(i < 5) {
                            return (
                                <Artist>
                                    <ArtistImage src={item.album.images[1].url} alt="Artist Image" />
                                </Artist>
                            )
                        }
                    })
                    ) : (
                    <ArtistImage />
                )}
            <h2>Top Tracks - List</h2>
        </Wrapper>
    );
};

export default Main;