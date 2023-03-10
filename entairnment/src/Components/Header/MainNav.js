import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import Search from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

export default function MainNav() {
  const [value, setValue] = React.useState(0);
const history = useNavigate();
React.useEffect(()=>{
     if(value===0) history("/")
     else if(value===1) history("/movies")
     else if(value===2) history("/tvshows")
     else if(value===3) history("/search")
},[value,history])
  return (
     <>
       <div className='BottomNavigation'>
          <Box sx={{ width: "100%",backgroundColor:'#2d313d'}}>
               <BottomNavigation
               showLabels
               value={value}
               onChange={(event, newValue) => {
                    setValue(newValue);
               }}
               >
               <BottomNavigationAction style={{color:"black"}} label="Trending" icon={<WhatshotIcon />} />
               <BottomNavigationAction style={{color:"black"}} label="Movies" icon={<MovieIcon />} />
               <BottomNavigationAction style={{color:"black"}} label="TV Series" icon={<TvIcon />} />
               <BottomNavigationAction style={{color:"black"}} label="Search" icon={<Search />} />
               </BottomNavigation>
          </Box>
       </div>
    </>
  );
}