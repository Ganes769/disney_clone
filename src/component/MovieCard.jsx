/* eslint-disable react/prop-types */
import { IMAGE_URL } from "./Slider";

export default function MovieCard({ movie }) {
  return (
    <section className="hover:scale-100 transition-all duration-150 ease-out">
      <img
        className="w-[110px] rounded-lg md:w-[220px] hover:border-[3px] border-gray-300 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in-out"
        src={IMAGE_URL + movie.poster_path}
      />
      <h2 className="w-[160px] md:w-[280px] text-white mt-2">{movie.title}</h2>
    </section>
  );
}
