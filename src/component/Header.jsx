import disneyLogo from "../assets/images/disney.png";
import { HiDotsVertical, HiHome } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { HiTv } from "react-icons/hi2";
import { HiPlayCircle } from "react-icons/hi2";
import HeaderItem from "./HaedaerItem";
import { useState } from "react";
function Header() {
  const [menuToogle, setmenuToogle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiSearch,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },

    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIE",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between ">
      <div className="flex gap-8">
        <img
          className=" mx-2 sm:w-[125px] w-[90px] md:w-[170px] object-cover"
          src={disneyLogo}
        />
        <div className="md:flex gap-8 hidden ">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
        <div className="md:hidden flex gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem name={""} Icon={item.icon} key={item.name} />
              )
          )}
          <div
            onClick={() => setmenuToogle(!menuToogle)}
            className="py-8 md:hiddden"
          >
            <HeaderItem name="" Icon={HiDotsVertical} />
            {menuToogle ? (
              <div className="absolute p-4  border-gray-700 bg-[#121212] mt-3 border-[1px] ">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        name={item.name}
                        Icon={item.icon}
                        key={item.name}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        className="w-[40px] sm:w-[60px] md:w-[70px] rounded-full "
        src="https://imgs.search.brave.com/8ouS34GfkxviDzlTPn9yExQViO54CQwDz3vuUet9O9o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YXR0aXR1ZGVzdGF0/dXMub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzEyLzIw/LTEwMjR4MTAyNC5q/cGc"
      />
    </div>
  );
}

export default Header;
