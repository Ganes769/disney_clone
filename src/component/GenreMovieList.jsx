import GenereList from "../constants/GenresList";
import MoviesList from "./MoviesList";
export default function GenreMovieList() {
  return (
    <div className="p-8 px-8 md:px-16">
      {GenereList.genere.map((item, index) => (
        <>
          <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
          <MoviesList genreId={item.id} index_={index} />
        </>
      ))}
    </div>
  );
}
