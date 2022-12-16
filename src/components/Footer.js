import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <div style={{ backgroundColor: '#212121', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', position: 'fixed', bottom: 0, width: '100%' }}>
      <div>
        <p>Copyright 2022</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
      {/* <BottomNavigation > */}
      <ul>
        <BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon style={{ fill: "white" }} />} />
        <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon style={{ fill: "white" }} />} />
        <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon style={{ fill: "white" }} />} />
        <BottomNavigationAction label="YouTube" value="folder" icon={<YouTubeIcon style={{ fill: "white" }} />} />
      </ul>

      {/* </BottomNavigation> */}
    </div>
  )
}

export default Footer
