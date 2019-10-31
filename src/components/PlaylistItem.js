import React from 'react';
import StyledPlaylistitems from './styles/StyledPlaylistItem'


const PlaylistItem = ({video,active,played}) => (
  <StyledPlaylistitems active={active} played={played}>
    <div className="wbn-player__video-nr">{video.num}</div>
    <div className="wbn-player__video-name">{video.title}</div>
    <div className="wbn-player__video-time">{video.duration}</div>
  </StyledPlaylistitems>
)

export default PlaylistItem;