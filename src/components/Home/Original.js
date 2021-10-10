import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Original() {
    const movies=useSelector(selectMovies)
    return (
        <Container>
            <h4>
                Originals
            </h4>
            <Content>
                {movies && movies.map((movie,index)=>{
                    if(movie.type!=="original")return null;
                    return (<Wrap key={index}>
                        <Link to={`/detail/${index}`}>
                        <img src={movie.cardImg} alt=""/>
                        </Link>
                    
                    </Wrap>)
                })}
                
            </Content>
        </Container>
    )
}

export default Original

const Container=styled.div`

`

const Content=styled.div`

    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding:30px 0 26px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }

`

const Wrap=styled.div`
    
    border:3px solid rgba(249, 249, 249, 0.1);
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.45,0.46,0.94) 0s;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform:scale(1.05);
        cursor:pointer;
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color:rgba(249, 249, 249, 0.8);
    }
`