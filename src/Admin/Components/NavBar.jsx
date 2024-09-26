import React from "react";
import menu from "../Images/menu-fill.png";
import search from "../Images/search.png";
import addBtn from "../Images/addBtn.png";
import share from "../Images/share.png";
import check from "../Images/check.png";
import photo from "../Images/photo.png";
import watch from "../Images/watch.png";
import ring from "../Images/ring.png";

const NavBar = () => {
  return (
    <div className="min-h-screen w-[100%]  flex items-center justify-between border-b shadow-sm">
      <div className="flex items-center gap-4 relative">
        <img className="ml-6" src={menu} alt="menu" />
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

      <div className="flex items-center gap-4 mr-7">
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
