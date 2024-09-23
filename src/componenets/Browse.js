import Header from './Header';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import useNowPlayingMovies from"../hooks/useNowPlayingMovie";
import  usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usetop_Rated from '../hooks/usetop_Rated';



const Browse =() => {

  const showGptSearch =useSelector((store) =>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  usetop_Rated();
 
  return (
    <div>
      <Header />
      {showGptSearch?(<GptSearch />):(
        <>
       <MainContainer />
        <SecondaryContainer />
        </>)}
        </div>
  );
};

export default Browse;