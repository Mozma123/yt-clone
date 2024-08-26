

// export default Sidebar;
import React from 'react';
import { GoHome } from 'react-icons/go';
// import { SiYoutubegaming } from 'react-icons/si';
import { MdOutlineSubscriptions } from 'react-icons/md'; 
// import { FaChevronRight } from 'react-icons/fa6';
// import { FaYoutube } from 'react-icons/fa';
// import { SiYoutubestudio } from 'react-icons/si';
// import { SiYoutubekids } from 'react-icons/si';
// import { SiYoutubemusic } from 'react-icons/si';
 import { SiTrendmicro } from 'react-icons/si';
// import { HiOutlineShoppingBag } from 'react-icons/hi2';
// import {  PiMusicNoteLight } from 'react-icons/pi';
// import {PiFilmSlateLight } from 'react-icons/pi';
//  import { CgMediaLive } from 'react-icons/cg';
//  import { FaRegNewspaper } from 'react-icons/fa';
// import { TfiCup } from 'react-icons/tfi';
//  import {PiLightbulbLight} from 'react-icons/pi';
//   import {SiStylelint} from 'react-icons/si';
//   import { MdPodcasts } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";




function Sidebar() {
  console.log("Sidebar component is rendering");
  return (
    <div className='px-6 w-[15%]'>
        <div className='space-y-3 items-center'>
            {/* 1st */}
          <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <GoHome className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>Home</span></div>
  {/* 2nd */}
  <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <SiYoutubeshorts className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>Shorts</span></div>
            {/* 3rd  */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            < MdOutlineSubscriptions className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>subscriptions</span></div> 
          <br/>  <hr />
          <div className='flex items-center space-x-2'><h1>You </h1>
            <FaChevronRight/>
          </div>
            {/* 4rth */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            < FaHistory className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>history</span></div>
{/* 5th */}
<div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <MdPlaylistPlay className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>playlists</span></div>
            {/* 6th */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            < MdWatchLater className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>Watch later</span></div>
            {/* 7th */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            < AiOutlineLike className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>Liked videos</span></div>
            {/* 8th */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            < GoDownload className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>Downloads</span></div>
            <br/><hr/>
            <div>Subscriptions</div>
            {/* 9th */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            {/* <GoHome className='text-xl cursor-pointer'/> */}
           <img src="/6.png"   className='w-8 rounded-3xl'  alt=''/>
            <span className='cursor-pointer'>JavaScript Mastery</span></div>
            {/* 10th */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <img src="/2.png"   className='w-8 rounded-3xl'  alt=''/>
            <span className='cursor-pointer'>Apna College</span></div>
            {/* 11 */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <img src="/3.png"   className='w-8 rounded-3xl'  alt=''/>
            <span className='cursor-pointer'>CodeWithHarry</span></div>
            {/* 13 */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <img src="/4.png"   className='w-8 rounded-3xl'  alt=''/>
            <span className='cursor-pointer'>GreatStack </span></div>
            {/* 14 */}
            <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <img src="/5.png"   className='w-8 rounded-3xl'  alt=''/>
            <span className='cursor-pointer'>WsCube Tech </span></div>
            <br/><hr/>
            <div className='flex items-center space-x-2'><h1>Explore</h1>
          </div>
          {/* 15 */}
          <div className=' flex  items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'> 
            <SiTrendmicro  className='text-xl cursor-pointer'/>
            <span className='cursor-pointer'>Trending</span></div>
        </div>
    </div>
  );
}

export default Sidebar;
