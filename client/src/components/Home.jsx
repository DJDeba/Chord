import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useStateValue } from '../context/StateProvider';
import { getAllSongs } from '../api';
import { actionType } from '../context/reducer';
import HomeSongCard from './HomeSongCard';
import { Rockbg } from '../assets/img';
import SearchBar from './SearchBar';

const Home = () => {
  const[{allSongs}, dispatch] = useStateValue();
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (term) => {
    console.log('Searching for:', term);
  };
  
  useEffect(() => {
    if(!allSongs){
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs : data.songs,
        })
      })
    }
  }, [dispatch])
  return (
    <div className="relative w-screen h-screen">
      <Header />
      <img src={Rockbg} type="image/jpg" className="w-full h-full object-cover"/>
      <div className='absolute top-40 w-full flex items-center justify-center bg-none rounded-md'>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className='absolute w-full top-52 flex items-center justify-center bg-none rounded-md'>
        <SongContainer  data={allSongs}/>
      </div>
    </div>
  );
};
export default Home



export const SongContainer = ({data}) => {
  return(
    <div className='w-full flex flex-wrap gap-3 items-center justify-center'>
      {data && data.map((song, i) => 
        <HomeSongCard key={song._id} data={song} index={i} type={"song"}/>
      )}
    </div>
  )
}