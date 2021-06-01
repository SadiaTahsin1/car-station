import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
       
        <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search for a service.." name="search" />
      <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  </div>
        
    
    );
};

export default Header;