import React from 'react';

const ProfileMenu = (props) => (
  <div className="header-main__pic header-main__pic_profile" onClick={() => {props.updateVisibleProfile()}}>
    <div className={`header-main__pic_profile_menu ${props.active}`}></div>
  </div>
) ;        
export default ProfileMenu;