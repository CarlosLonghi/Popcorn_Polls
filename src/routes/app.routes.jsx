import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { CreateMovie } from '../pages/CreateMovie'
import { PreviewMovie } from '../pages/PreviewMovie'
import { Profile } from '../pages/Profile'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create_movie' element={<CreateMovie/>}/>
      <Route path='/preview_movie/:id' element={<PreviewMovie/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}