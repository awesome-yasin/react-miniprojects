import { useEffect, useState } from 'react'
import axios from 'axios'


// query will be used in input box for searching and constantly updating user input
// pageNumber will show page number of the of the query result in infinte scroll
export default function (query, pageNumber){

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    //Every single time we change the value the previous value should be gone
    useEffect(() => {
        setBooks([])
      }, [query])
    
        useEffect(() =>{

            setLoading(true)  // Everytime we make a reuqest we want set loadint to true and error to be false
            setError(false)

            let cancel //TO cancel our request
            axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      
      // cancelToken is axios function used to cancel the input generated value from the result field 
      cancelToken : new axios.CancelToken(c => cancel = c)
            }).then(res =>{
                console.log(res.data)
            
                
                // TO load new book every time user gets to bottom
                setBooks(prevBooks => {
                    return ([...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])])
                  })
                  setHasMore(res.data.docs.length > 0) // TO see more books are there or not
                  setLoading(false)
            })
            .catch(e => {                     //To catch the error if we passes a error
                if(axios.isCancel(e))
                 return;
                 setError(true)
            })

            return () => cancel()

        },[query,pageNumber])

        return { loading, error, books, hasMore }
}
