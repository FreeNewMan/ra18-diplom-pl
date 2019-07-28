import React, { Component }  from 'react';
import Search from './Search.js';
import Border from './Border.js';
import ProfileMenu from './ProfileMenu.js';
import Basket from './Basket.js';
import SearchForm from './SearchForm.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSearch: false 
    }
  }

  updateSearch = () => {
    this.setState({ activeSearch: !this.state.activeSearch })
  }


  render() {
  return (
    <div className="header-main__profile">
      <div className="header-main__pics">
        <Search updateSearch={this.updateSearch} active={this.state.activeSearch ? 'header-main__pic_search_is-hidden' : ''} />
        <Border />
        <ProfileMenu updateVisibleProfile={this.props.updateVisibleProfile} active={this.props.VisibleProfile ? 'header-main__pic_profile_menu_is-active' : ''}/>
        <Border />
        <Basket updateVisibleBasket={this.props.updateVisibleBasket} active={this.props.visibleBasket ? 'hidden-panel__basket_visible' : ''} />
      </div>
      <SearchForm updateSearch={this.updateSearch} active={this.state.activeSearch ? 'header-main__search_active' : '' } />
    </div>
   );
  }
}

export default Profile;