import React from 'react'
import { imgUrl } from '../../../helper/imgUrl'
import {Link} from 'react-router-dom'




export default function Person({item}) {
  return (
    <Link to={`/people/${item.id}`}>
    <div className='flex gap-2 items-center'>
        <img  className="object-cover w-11 h-11 rounded-md" src={item.profile_path ? imgUrl(item.profile_path,"w45") : '/profile.png'} alt="" />
        <p>{item.name}</p>
    </div>
     </Link>
  )
}
