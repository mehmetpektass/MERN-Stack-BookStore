import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'


export const ShowBook = () => {
    const [books , setBooks] = useState({});
    const [loading , setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3000/books/${id}`)
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    },[])

  return (
    <div className='p-4'>
       <BackButton/>
       <h1 className='text-3xl my-4'>Show Book</h1>
       {loading ? (
        <Spinner/>
       ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[700px] p-4'>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Id:</span>
                <span className='text-xl'>{books._id}</span>
            </div>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Title:</span>
                <span className='text-xl'>{books.title}</span>
            </div>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Author:</span>
                <span className='text-xl'>{books.author}</span>
            </div>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Publish Year:</span>
                <span className='text-xl'> {books.publishYear}</span>
            </div>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Comment Title:</span>
                <span className='text-xl'> {books.commentTitle}</span>
            </div>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Comment Content:</span>
                <span className='text-xl'> {books.commentContent}</span>
            </div>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Create Time:</span>
                <span className='text-xl'>{new Date(books.createdAt).toString()}</span>
            </div>
            <div className='my-4'>
                <span className='text-2xl mr-4 text-gray-500'>Last Update Time:</span>
                <span className='text-xl'>{new Date(books.updatedAt).toString()}</span>
            </div>
        </div>
       )}
    </div>
  )
}
export default ShowBook