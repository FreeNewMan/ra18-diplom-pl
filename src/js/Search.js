import React  from 'react';

const Search = (props) => (
  <div className={`header-main__pic header-main__pic_search ${props.active}`}  onClick={() => {props.updateSearch()}}>
  </div>
) ;        

export default Search;