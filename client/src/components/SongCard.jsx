import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoTrash } from 'react-icons/io5'
import { deleteAlbum, deleteArtist, deleteSong, getAllAlbums, getAllArtists, getAllSongs } from '../api';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../config/firebase.config';

const SongCard = ({data, index, type}) => {
    const [isDelete, setisDelete] = useState(false);
    const [{alertType, allArtists, allAlbums, allSongs, songIndex, isSongPlaying}, dispatch] = useStateValue();
    const deleteData = (data) => {
        if(type === "song"){
            const deleteRef = ref(storage, data.imageURL);
            deleteObject(deleteRef).then(() => {
              })
            deleteSong(data._id).then((res) => {
                if(res.data){
                    dispatch({
                        type: actionType.SET_ALERT_TYPE,
                        alertType: 'success',
                    })
                    setInterval(() => {
                        dispatch({
                            type: actionType.SET_ALERT_TYPE,
                            alertType: null,
                        })
                    }, 3000);

                    getAllSongs().then((data) => {
                        dispatch({
                          type: actionType.SET_ALL_SONGS,
                          allSongs : data.song,
                        })
                      })
                }
                else{
                    dispatch({
                        type: actionType.SET_ALERT_TYPE,
                        alertType: 'danger',
                    })
                    setInterval(() => {
                        dispatch({
                            type: actionType.SET_ALERT_TYPE,
                            alertType: null,
                        })
                    }, 3000);
                }
            })
        }
        if(type === "album"){
            const deleteRef = ref(storage, data.imageURL);
            deleteObject(deleteRef).then(() => {
              })
            deleteAlbum(data._id).then((res) => {
                if(res.data){
                    dispatch({
                        type: actionType.SET_ALERT_TYPE,
                        alertType: 'success',
                    })
                    setInterval(() => {
                        dispatch({
                            type: actionType.SET_ALERT_TYPE,
                            alertType: null,
                        })
                    }, 3000);

                    getAllAlbums().then(data => {
                        dispatch({
                            type: actionType.SET_ALL_ALBUMS,
                            allAlbums: data.album,
                        })
                    })
                }
                else{
                    dispatch({
                        type: actionType.SET_ALERT_TYPE,
                        alertType: 'danger',
                    })
                    setInterval(() => {
                        dispatch({
                            type: actionType.SET_ALERT_TYPE,
                            alertType: null,
                        })
                    }, 3000);
                }
            })
        }
        if(type === "artist"){
            const deleteRef = ref(storage, data.imageURL);
            deleteObject(deleteRef).then(() => {
              })
            deleteArtist(data._id).then((res) => {
                if(res.data){
                    dispatch({
                        type: actionType.SET_ALERT_TYPE,
                        alertType: 'success',
                    })
                    setInterval(() => {
                        dispatch({
                            type: actionType.SET_ALERT_TYPE,
                            alertType: null,
                        })
                    }, 3000);

                    getAllArtists().then(data => {
                        dispatch({
                            type: actionType.SET_ALL_ARTISTS,
                            allArtists: data.artist,
                        })
                    })
                }
                else{
                    dispatch({
                        type: actionType.SET_ALERT_TYPE,
                        alertType: 'danger',
                    })
                    setInterval(() => {
                        dispatch({
                            type: actionType.SET_ALERT_TYPE,
                            alertType: null,
                        })
                    }, 3000);
                }
            })
        }
    }
    const addToContext = () => {
        if(!isSongPlaying){
            dispatch({
                type: actionType.SET_ISSONG_PLAYING,
                isSongPlaying: true,
            })
        }
        if(songIndex !== index){
            dispatch({
                type: actionType.SET_SONG_INDEX,
                songIndex: index,
            })
        }
    }

  return (
    <motion.div className='relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:bg-card bg-black shadow-md rounded-lg flex flex-col items-center' onClick={type === 'song' && addToContext}>
        <div className='relative w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg overflow-hidden'>
            <motion.img whileHover={{scale: 1.05}} src={data.imageURL} className='w-full h-full rounded-lg object-cover'/>
        </div>
        <p className='text-base text-center text-textColor font-semibold my-2'>
            {data.name.length > 25 ? `${data.name.slice(0,25)}..` : data.name}
            {data.artist && (
                 <span className='block text-sm text-gray-400 my-1'>
                 {data.artist.length > 25 ? `${data.artist.slice(0,25)}...` : data.artist}
                 </span>
            )}
        </p>
        <div className='absolute w-full bottom-2 right-2 flex items-center justify-between px-4'>
            <motion.i whileTap={{ scale: 0.75 }} className='text-base text-red-400 drop-shadow-md hover:text-red-600' onClick={() => setisDelete(true)}>
                <IoTrash />
            </motion.i>
        </div>
     {isDelete && (
           <motion.div className='absolute inset-0 backdrop-blur-sm bg-cardOverlay flex flex-col items-center justify-center px-4 py-2 gap-2' initial={{ opacity: 0}} animate={{ opacity: 1}}>
           <p className='text-xl text-textColor font-semibold text-center'>Are you sure to delete</p>
           <div className='flex items-center gap-4'>
               <motion.button className='px-2 py-1 text-sm uppercase bg-green-400 rounded-md hover:bg-green-600 cursor-pointer' whileTap={{scale: 0.75}} onClick={deleteData(data)}>Yes</motion.button>
               <motion.button className='px-2 py-1 text-sm uppercase bg-red-400 rounded-md hover:bg-red-600 cursor-pointer' whileTap={{scale: 0.75}} onClick={() => setisDelete(false)}>No</motion.button>
           </div>
       </motion.div>
     )}
    </motion.div>
  )
}

export default SongCard