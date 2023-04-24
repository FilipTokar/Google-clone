import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// import response from "../response";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Links from "../components/UI/Links";


export default function Search() {
  const [{term}, dispatch] = useStateValue()
  const {data} = useGoogleSearch(term)

  // const data = response;
  console.log(data);

  return (
    <div className="search-page">
      <div className="search-page__header">
        <Link to="/">
          <img
            className="search-page__header--logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="search-page__header--body">
          <Input hideButtons />
          <div className="search-page__options">
            <Links/>
          </div>
        </div>
      </div>
      <div className="search-page__results">
        {
          term ? <>
            <p className="search-page__results-count">
          About {data?.searchInformation.formattedTotalResults} results
          ({data?.searchInformation.formattedSearchTime} seconds)
            for{term}
          </p>
          {data?.items.map(item => (
                  <div className="search-page__result">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && 
                      (
                        <img src={item.pagemap?.cse_image[0]?.src} alt=""
                        className="search-page__result--img" />
                      )
                      }


                      {item.displayLink}
                      </a> 
                    <a className="search-page__result--title" href={item.link} target="_blank" rel="noreferrer">
                      <h2>{item.title}</h2>
                      </a>
                    <p className="search-page__result--Snippet">
                      {item.snippet}
                    </p>
                  </div>
                )
              )
            }
          </>
          :
          null
        }
            
      
        
      </div>
    </div>
  );
}
