/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HRMovieCard from "./HRMovieCard";
const screenWidth = window.innerWidth;
export default function MoviesList({ genreId, index_ }) {
  const elementRef = useRef();
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  const [movieList, setMovieList] = useState([]);
  useEffect(
    function () {
      async function getMovieByGenereId() {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=5b86e1eed20a73b8766e07d21a423011&with_genres=${genreId}`
        );
        const data = await res.json();
        const moviedata = await data.results;
        console.log(moviedata);
        setMovieList(moviedata);
      }
      getMovieByGenereId();
    },
    [genreId]
  );

  return (
    <div>
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className="text-white text-[40px] mx-2 left-0 absolute mt-[50px] cursor-pointer md:mt-[170px]"
      />

      <div
        ref={elementRef}
        className="scroll-smooth flex gap-6 overflow-auto scrollbar-hide pt-5 px-3 pb-8 py-5"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 === 0 ? (
              <HRMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
        <HiChevronRight
          onClick={() => slideRight(elementRef.current)}
          className="text-white text-[40px] absolute mx-8 right-0 mt-[30px] cursor-pointer md:mt-[150px]"
        />
      </div>
    </div>
  );
}
