import React from 'react';
import { Redirect } from "react-router-dom";

import WanDiscover from "@/pages/discover"
import WanFriend from "@/pages/friend"
import WanMine from "@/pages/mine"


import WanRecom from "@/pages/discover/c-pages/recommend";
import WanRank from "@/pages/discover/c-pages/ranking";
import WanSong from "@/pages/discover/c-pages/songs";
import WanDjradio from "@/pages/discover/c-pages/djradio";
import WanArtist from "@/pages/discover/c-pages/artist";
import WanAlbum from "@/pages/discover/c-pages/album";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: WanDiscover,
    routes:[
      {
        path:"/discover",
        exact:true,
        render:()=>{
          <Redirect to="/discover/recommend" />
        }
      },
      {
        path: "/discover/recommend",
        component: WanRecom
      },
      {
        path: "/discover/ranking",
        component: WanRank
      },
      {
        path: "/discover/songs",
        component: WanSong
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: WanDjradio
      },
      {
        path: "/discover/artist",
        component: WanArtist
      },
      {
        path: "/discover/album",
        component: WanAlbum
      },
      // {
      //   path: "/discover/player",
      //   component: WanRecom
      // }
    ]
  },
  {
    path: "/mine",
    component: WanMine
  },
  {
    path: "/friend",
    component: WanFriend
  },
]

export default routes