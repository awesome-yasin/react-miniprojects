import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./gallery.css";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("code");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const client_id = "JiaIpewOWk7Z1Ohap64VbCQ9WwzHXLyEKJIHUGmVwp4";
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;

  const fetchImages = () => {
    axios
      .get(fetchUrl)
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  };
  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setData([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <div className="gallery-App gallery-flex">
      <input className= "gallery-input"
        type="text"
        onKeyDown={(e) => searchImages(e)}
        placeholder="Search For Images 🔎"
      />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchImages}
        hasMore={hasMore}
        loader={<p>Load more...</p>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="gallery-main gallery-flex">
          {data.map((data, key) => (
            <div className="gallery-container" key={key}>
              <img
                src={data.urls.small}
                className="gallery-image"
                alt={data.alt_description}
              />
              <h4 className = "gallery-head">Photo by {data.description}</h4>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Gallery;