import React , {useEffect , useState} from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiAutlineEdit } from 'react-icons/ai'
import  { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox , MdOutlineDelete } from 'react-icons/md'


export const Home = () => {
    const [books , setBooks] = UseState([]);
    const [loading , setLoading] =UseState(false);

    useEffect(() =>{
        axios
            .get('http://localhost:3000/books')
            .then((response) => {
                setBooks(response.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])


  return (
    <div>Home</div>
  )
}
export default Home