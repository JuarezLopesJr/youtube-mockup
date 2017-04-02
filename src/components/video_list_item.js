import React from 'react'
import VideoList from './video_list'
// functional component, used to just return some JSX
const VideoListItem = ({video, onVideoSelect}) => {
// ({video})is from video={video} in video_list.js file, which means props
 // const video = props.video same as ({video})
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    //onClick(event handler) is a reserved react keyword,and it's receiving onVideoSelect()
    // function with video as argument
    <li onClick={() => {onVideoSelect(video)}} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
