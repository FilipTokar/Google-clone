import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Links() {
  return (
    <>
      <div className="search-page__options--left">
        <div className="search-page__option">
          <SearchIcon />
          <Link to="/all">All</Link>
        </div>
        <div className="search-page__option">
          <DescriptionIcon />
          <Link to="/news">News</Link>
        </div>
        <div className="search-page__option">
          <ImageIcon />
          <Link to="/images">Images</Link>
        </div>
        <div className="search-page__option">
          <LocalOfferIcon />
          <Link to="/shopping">Shopping</Link>
        </div>
        <div className="search-page__option">
          <LocationOnIcon />
          <Link to="/maps">Maps</Link>
        </div>
        <div className="search-page__option">
          <MoreVertIcon />
          <Link to="/more">More</Link>
        </div>
      </div>
      <div className="search-page__options--right">
        <div className="search-page__option">
          <Link to="/more">Settings</Link>
        </div>
        <div className="search-page__option">
          <Link to="/more">Tools</Link>
        </div>
      </div>
    </>
  );
}
