import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Friends from '../Friends/Friends'
import Group from '../Group/Group'
import Home from '../Home/Home'
import Marketplace from '../Marketplace/Marketplace'
import Video from '../Video/Video'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/main' element={<Layout />}>
                <Route path='/main/home' element={<Home />}/>
                <Route path='/main/friends' element={<Friends />}/>
                <Route path='/main/video' element={<Video />}/>
                <Route path='/main/marketplace' element={<Marketplace />}/>
                <Route path='/main/group' element={<Group />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default RouterPage