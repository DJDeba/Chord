import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ContactUs, Dashboard, Home, Login, MusicPlayer, Premium } from './components'
import { app } from './config/firebase.config'
import { getAuth } from 'firebase/auth'
import { AnimatePresence, motion } from 'framer-motion'
import { getAllSongs, validateUser } from './api'
import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'

const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const [{ allSongs, user, isSongPlaying }, dispatch] =useStateValue();

  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true");
  
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if(userCred){
        userCred.getIdToken().then((token) => {
        //  console.log(token);
        validateUser(token).then((data) => {
          dispatch({
            type: actionType.SET_USER,
            user: data,
          })
        });
        });
      }
      else{
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
        dispatch({
          type: actionType.SET_ISSONG_PLAYING,
          isSongPlaying: false,
        });
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (!allSongs) {
      getAllSongs()
        .then((data) => {
          dispatch({
            type: actionType.SET_ALL_SONGS,
            allSongs: data.songs,
          });
        })
        .catch((error) => {
          console.error('Error fetching songs:', error);
        });
    }
  }, []);

  return (
    <AnimatePresence>
      <div className="h-screen min-w-[680px] bg-primary flex justify-center items-center">
        <Routes>
            <Route path='/login' element={<Login setAuth={setAuth} />} />
            <Route path='/*' element={<Home />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/premium' element={<Premium />} />
        </Routes>
        {isSongPlaying && (
          <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} className={`fixed min-w-[700px] h-26 inset-x-0 bottom-0 bg-primary bg-opacity-70 drop-shadow-2xl backdrop-blur-md flex items-center justify-center`}>
            <MusicPlayer />
          </motion.div>
        )}
    </div>
    </AnimatePresence>
    
  )
}

export default App