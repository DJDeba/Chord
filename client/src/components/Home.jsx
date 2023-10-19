import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useStateValue } from '../context/StateProvider';
import { getAllSongs } from '../api';
import { actionType } from '../context/reducer';
import HomeSongCard from './HomeSongCard';
import { Rockbg } from '../assets/img';
import SearchBar from './SearchBar';

const Home = () => {
  const[{allSongs, allArtists, searchTerm}, dispatch] = useStateValue();
  const [filteredSongs, setFilteredSongs] = useState(null);
  
  useEffect(() => {
    console.log(searchTerm)
    if(!allSongs){
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs : data.song,
        })
      })
    }
  }, [])

  useEffect(() => {
    if (allSongs && searchTerm) {
      const filtered = allSongs.filter((song) =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(null);
    }
  }, [allSongs, searchTerm]);

  return (
    <div className="relative w-screen h-screen">
      <Header />
      <img src={Rockbg} type="image/jpg" className="w-full h-full object-cover"/>
      <div className='absolute top-40 w-full flex items-center justify-center bg-none rounded-md'>
        <SearchBar />
      </div>
      <div className='absolute w-full top-52 flex items-center justify-center bg-none rounded-md'>
        {searchTerm.length > 0 || !filteredSongs ? (<SongContainer data={filteredSongs || allSongs} />) : null}
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