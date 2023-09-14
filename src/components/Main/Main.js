import React from "react";
import styled from "styled-components";
import useUserData from "../../hooks/useUserData";

export const Wrapper = styled.div`
    width: 80%;
`

export const Artist = styled.div`
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
    padding: 0;
    display: inline-block;
`
export const ArtistImage = styled.img`
    width: 100%;
    height: 100%;
`

const Main = () => {
    const URL = "https://api.spotify.com/v1/me/top/artists";
    const topItem = useUserData(URL);

    return(
        <Wrapper>
            <h2>Top Artist:</h2>
                {topItem ? (
                    topItem.items.map((item) => {
                        return (
                            <Artist>
                                <ArtistImage src={item.images[1].url} alt="Artist Image" />
                            </Artist>
                        )
                    })
                    ) : (
                    <ArtistImage />
                )}
        </Wrapper>
    );
};

export default Main;