
import { useState } from 'react';
import './App.css';
import GridCardSection from './Components/GridCardSection';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import axios from 'axios';
import FilterSection from './Components/FilterSection';

const ENDPOINT='https://qtify-backend-labs.crio.do'
function App() {
  
  const [topAlbum,setTopalbum]=useState([]);
  const [newAlbum,setNewalbum]=useState([]);
  const[songs,setSongs]=useState([]);
  const[filterSongs,setFilterSongs]=useState([]);
  const [genres,setGenres]=useState([]);

  useEffect(()=>{
    axios.get(`${ENDPOINT}/albums/top`).then(({data})=>{
      setTopalbum(data);
    })
    axios.get(`${ENDPOINT}/albums/new`).then(({data})=>{
      setNewalbum(data);
    })
    axios.get(`${ENDPOINT}/songs`)
    .then(({ data }) => {
      setSongs(data);
      setFilterSongs(data);
    })
    .catch(error => {
      console.error("Error fetching songs:", error);
      setSongs([]);
      setFilterSongs([]);
    });
    axios.get(`${ENDPOINT}/genres`).then(({data})=>{
      setGenres([{"key":"all","label":"ALL"},...data.data])
    })
  },[])
  return (
    <div className='app'>
      <Navbar/>
      <HeroSection/>
      <GridCardSection navId="ta" albumName={"Top Album"} data={topAlbum}/>
      <GridCardSection navId="na" albumName={"New Album"} data={newAlbum}/>
      <FilterSection albumName={"Songs"} data={filterSongs} filter={genres}
      executeFilter={(genres)=>{
          if(genres ==="all"){
            setFilterSongs(songs);
          }else{
              setFilterSongs(songs.filter(song => song.genre.key === genres));
          }
          
      }}
      />
    </div>
  );
}

export default App;
