import axios from 'axios';



const API  =
  axios.create({
      baseURL: "http://127.0.0.1:8000/backend_api/books",
      headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
      }
  })


  const getCollections = () => {

  }

  const getCollection = () => {

  }

  const getLibrary = () => {

  }

  const updateCollection = () => {

  }

  const addBook = (params) => {

  }

export async function getBooks(){
  const response = await API.get('/books')
  await response
  // console.log(response)
  return response
}
export default API
