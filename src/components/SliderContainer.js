import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start, end)=>{
        return movies.slice(start, end)
    }

  return (
   <SliderWrapper>
      <MovieSlider data={getMoviesBetween(0,10)} title="Netflix Originals" />
      <MovieSlider data={getMoviesBetween(10,20)} title="Trending now" />
      <MovieSlider data={getMoviesBetween(20,30)} title="Top Rated " />
      <MovieSlider data={getMoviesBetween(30,40)} title="Popular Now" />
      <MovieSlider data={getMoviesBetween(40,50)} title="Action Movies" />
      <MovieSlider data={getMoviesBetween(50,60)} title="Documentaries" />
      <MovieSlider data={getMoviesBetween(60,70)} title="Horror Movies" />
   </SliderWrapper>
  )
}
const SliderWrapper = styled.div`

`

export default SliderContainer