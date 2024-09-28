import React from "react";
import menu from "../../Assets/Images/menu-fill.png";
import search from "../../Assets/Images/search.png";
import addBtn from "../../Assets/Images/addBtn.png";
import share from "../../Assets/Images/share.png";
import check from "../../Assets/Images/check.png";
import photo from "../../Assets/Images/photo.png";
import watch from "../../Assets/Images/watch.png";
import ring from "../../Assets/Images/ring.png";

const NavBar = ({handleToggleSideBar,toggleSideBar}) => {

    return (
    <div className={`w-[100%] h-auto md:h-[60px] md:flex  items-center justify-between border-b shadow-sm `}>
      <div className="flex items-center gap-4 relative">
        <button onClick={handleToggleSideBar}>
        <img className="ml-6" src={menu} alt="menu" />
        </button>
        <input
          className="h-[42px] w-[370px] pl-3 bg-[#F4F5F9] rounded-md border-[#DBDCDE] border"
          type="text"
          placeholder="Search...."
        />
        <img className="absolute left-[25.5rem]" src={search} alt="search" />
  
        <div>
          <img src={addBtn} alt="" />
        </div>
      </div>

      <div className=" items-center gap-4 mr-7 flex ml-3">
        <img src={share} alt="" />
        <img src={check} alt="" />
        <img src={photo} alt="" />
        <div className="border">
          <img src={watch} alt="" />
        </div>
        <div className="border">
          <img src={ring} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;