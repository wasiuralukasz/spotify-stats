import React, { useState } from "react";
import styled from "styled-components";
import useUserData from "../../hooks/useUserData";
import arrow from "../../assets/images/arrow.svg";


export const Wrapper = styled.div`
    width: 80%;
    grid-column: 4 / 13;
`

export const Artist = styled.div`
    display: inline-flex;
    flex-direction: row;
    min-width: 48%;
    max-width: 50%;
    height: 70px;
    padding: 10px;
    justify-content: left;
    align-items: center;
    background-color: rgba(255,255,255,5%);
    border-radius: 5px;
    margin: 5px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const ArtistImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
`

export const ArtistText = styled.p`
    font-size: 10px;
    font-weight: 500;
    margin: 5px;
`

export const Track = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #414141;
    font-size: 12px;
`

export const ShowMoreArrow = styled.button`
    position: relative;
    background-color: transparent;
    border: 0;
    padding: 0;

    &:hover {
        cursor: pointer;
    }
`
export const ShowMoreImage = styled.img`
  width: 20px;
  margin: 20px auto;
`;

export const ShowLessImage = styled.img`
  width: 20px;
  margin: 20px auto;
  transform: rotate(180deg);
`;



const Main = () => {
    const URL_ARTISTS = "https://api.spotify.com/v1/me/top/artists";
    const URL_TRACKS =  "https://api.spotify.com/v1/me/top/tracks";
    const topArtists = useUserData(URL_ARTISTS);
    const topTracks = useUserData(URL_TRACKS);
    const [trackCount, setTrackCount] = useState(5);


    return(
        <Wrapper>
            <h2>Top Artist:</h2>
                {topArtists ? (
                    topArtists.items.map((item, i) => {
                        if(i < 4) {
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
            <section>
                <h2>Top Tracks:</h2>
                    {topTracks ? (
                        topTracks.items.slice(0, trackCount).map((track, index) => {
                            return (
                                <Track>
                                    <p style={{fontWeight: "600", minWidth: "10px", margin: "0px 15px 0px 10px"}}>{index + 1}.</p>
                                    <ArtistImage src={track.album.images[1].url} alt="Artist Image" style={{width: "20px", height: "20px", borderRadius: "100px", marginRight: "10px"}}/>
                                    <p style={{marginRight: "45px", minWidth: "150px"}}>{track.artists[0].name}</p>
                                    <p>{track.name}</p>
                                </Track>
                            )
                        })
                    ) : (<ArtistImage />)}

                    { trackCount === 5 ? (
                        <ShowMoreArrow onClick={() => setTrackCount(topTracks.length)}><ShowMoreImage src={arrow}/></ShowMoreArrow>
                    ) : (
                        <ShowMoreArrow onClick={() => setTrackCount(5)}><ShowLessImage src={arrow}/></ShowMoreArrow>
                    )}
            </section>
        </Wrapper>
    );
};

export default Main;