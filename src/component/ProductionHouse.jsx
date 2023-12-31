import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import national from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";
import disneyVideo from "../assets/video/disney.mp4";
import marvelideo from "../assets/video/marvel.mp4";
import nationalVideo from "../assets/video/national-geographic.mp4";
import pixarVideo from "../assets/video/pixar.mp4";
import starwarvideo from "../assets/video/star-wars.mp4";

export default function ProductionHouse() {
  const producionList = [
    {
      id: 1,
      image: disney,
      video: disneyVideo,
    },
    {
      id: 2,
      image: marvel,
      video: marvelideo,
    },
    {
      id: 3,
      image: starwar,
      video: starwarvideo,
    },
    {
      id: 4,
      image: pixar,
      video: pixarVideo,
    },
    {
      id: 5,
      image: national,
      video: nationalVideo,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-8 p-2 px-5 md:px-16">
      {producionList.map((item) => (
        <div
          key={item.id}
          className="shadow-xl shadow-black cursor-pointer flex border-[2px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg border-gray-400 relative"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="w-full h-full top-0  object-fill absolute rounded-md  opacity-0 hover:opacity-50"
          />
          <img className="w-full opacity-100" src={item.image} />
        </div>
      ))}
    </div>
  );
}
