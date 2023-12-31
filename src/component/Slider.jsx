/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const baseURL = "https://api.themoviedb.org/";
const api_key = "5b86e1eed20a73b8766e07d21a423011";
const screenWidth = window.innerWidth;
const getPopular =
  "https://api.themoviedb.org/3/movie/popular?api_key=5b86e1eed20a73b8766e07d21a423011";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
export default function Slider() {
  const elementRef = useRef();
  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const [movieList, setMovieList] = useState([]);
  async function fetchPopularMovie() {
    const response = await fetch(getPopular);
    const data = await response.json();
    const movie = data.results;
    setMovieList(movie);
  }
  useEffect(function () {
    fetchPopularMovie();
  }, []);

  return (
    <div>
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className="text-white text-[40px] absolute mx-8 mt-[130px] cursor-pointer"
      />
      <HiChevronRight
        onClick={() => slideRight(elementRef.current)}
        className="text-white text-[40px] absolute mx-8 right-0 mt-[125px] cursor-pointer"
      />
      <div
        ref={elementRef}
        className="bg-fit scroll-smooth scrollbar-hide flex overflow-x-auto w-full px-16 py-10"
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            className="hover:border-[4px] border-gray-400 transition-all duration-150 ease-in-out rounded-md object-left-top  mr-5 min-w-full md:h-[310px] object-cover"
            src={IMAGE_URL + item.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
}
