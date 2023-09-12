import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";

const TopNav = ({ isScrolled }) => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv show" },
    { name: "Movies", link: "/movies" },
    { name: "News & Popular", link: "/news" },
    { name: "My List", link: "/mylist" },
    { name: "Browse by Language", link: "/Browse" },

    
  ];

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="logo"
            />
          </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="end">
        <AiOutlineSearch className="search-icon" />
        <span className="children-text">Children</span>
        
      </div>  
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  nav{
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0.3s ease-in;
    

    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 5rem;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10rem;
        height: 2rem;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
        }
        .end {
    display: flex;
    align-items: center;

    .search-icon {
      margin: 0px 15px;
      cursor: pointer;
    }

    .children-text {
      color: white;
      cursor: pointer;
    }

    .profile-image {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      object-fit: cover;
      cursor: pointer;
    }
  }
      }
    }
  }
`;

export default TopNav;





