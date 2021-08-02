import React, { useState, useRef, useCallback } from 'react'
import useBookSearch from './useBookSearch'
const style = {
    display : 'block', width: '80%', padding: '10px', margin: '20px auto', textAlign: 'center', fontSize : '18px'
}
const Infinite = () =>{

   const [query, setQuery] = useState('')    // to change the value of input field
  const [pageNumber, setPageNumber] = useState(1)   // to change page number
//event to handle change in input field
  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)

  const observer = useRef()

// TO call out last book
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect() //It ill diconnect oberver to see new
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

    return (
        <>
        <h1>Search Bar with Infinite Scrolling</h1>
    <input style = {style} type="text" value={query} onChange={handleSearch}></input>
    
    {books.map((book, index) => {
        // TO see if there is more book then show or else dont show
        if (books.length === index + 1) {
          return <ul> <li ref={lastBookElementRef} key={book}>{book}</li> </ul>
        } else {
          return <ul><li key={book}>{book}</li></ul>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
        </>
    )
}

export default Infinite