import React  from 'react';

const SearchForm = (props) => (
   <form className={`header-main__search ${props.active}`} action="#"  >
     <input placeholder="Поиск"/>
     <i className="fa fa-search" aria-hidden="true"></i>
   </form>
) ;        

export default SearchForm;