import React, { useEffect } from 'react'
import Header from './Header'
import SongCard from './SongCard'
import { useStateValue } from '../context/StateProvider';
import { getAllSongs } from '../api';
import { actionType } from '../context/reducer';
import HomeSongCard from './HomeSongCard';

const Home = () => {
  const[{allSongs}, dispatch] = useStateValue();
  
  useEffect(() => {
    if(!allSongs){
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs : data.songs,
        })
      })
    }
  }, [])
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-primary">
      <Header />
      <div className='relative w-full h-full my-4 p-4 py-16 border border-gray-800 rounded-md'>
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