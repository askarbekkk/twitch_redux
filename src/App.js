import React, {useEffect} from 'react'
 import {useDispatch, useSelector} from "react-redux";
import {getChannels, getPeople, getPlanets, getVideos} from "./redux/actions";
import Header from "./components/Header"



function App() {
  const dispatch = useDispatch()
  const channel = useSelector((store) => store.channel)
 const video = useSelector((store) => store.video)
  useEffect( () => {
     if(channel){
       dispatch(getVideos(channel.id))
     }
  },[channel])
  return (
    <div className="App">
    <Header />
      {
        channel &&
        <img src={channel.profile_image_url} alt=""/>

      }
        {
            video && video.map(video =>
                <a href={video.url} key={video.id}>
                    <img src={video.thumbnail_url
                        .replace("%{width}", "400")
                        .replace("%{height}", "300")

                    } alt=""/>
                </a>
            )
        }
    </div>
  );
}

export default App;
