import React from 'react';
import VideoItemContainer from './video_item_container';
import VideoDetailContainer from './video_detail_container';

class VideoRows extends React.Component {

       constructor(props) {
              super(props) 
              this.state = {
                     tid: null,
                     mid: null,
              }
              this.setDropDown = this.setDropDown.bind(this)
       }


       setDropDown(id) {
              
              let that = this;
              return (videoId) => {
                     
                     that.setState({
                            tid: null,
                            mid: null
                     })
                     
                     that.setState({
                        [id]: videoId
                     })
                     
              };
       }



    render () {
           
       const { videos } = this.props;
       const { tid, mid } = this.state;

       let allTvShows;
       let allMovies;
       let allCartoon; 
       let allComedy;
       let allDocumentary;
       let allAction;
       let allHorror;
       let allMusical;

       allTvShows = videos.map((video, key) => {
              
              if (video.video_type === "tv show") {
                      let className;
                     if ( key < 3 ) {
                            return (
                                   <>
                                          <div className="container">
                                                 <VideoItemContainer setDropDown={this.setDropDown('tid')} video={video} key={key} muted={true} className={className} />
                                          </div>
                                          <VideoDetailContainer setDropDown={this.setDropDown('tid')} id={tid} /> 
                                   </>
                            )
                     } else if (key >= 3 && key < 6 ) {
                            return (
                                   <>
                                          <div className="container">
                                                 <VideoItemContainer setDropDown={this.setDropDown('tid')} video={video} key={key} muted={true} className={className} />
                                          </div>
                                          <VideoDetailContainer setDropDown={this.setDropDown('tid')} id={tid} />
                                   </>
                            )
                     } else {
                            return (
                                   <>
                                          <div className="container">
                                                 <VideoItemContainer setDropDown={this.setDropDown('tid')} video={video} key={key} muted={true} className={className} />
                                          </div>
                                          <VideoDetailContainer setDropDown={this.setDropDown('tid')} id={tid} />
                                   </>
                            )
                     }

                     // return (
                     //        <VideoItemContainer setDropDown={this.setDropDown('tid')} video={video} key={key} muted={true} className={className}/>
                     // )
              }
       })

       allMovies = videos.map((video, key) => {
              if (video.video_type === "movie") {
                     return (
                            <VideoItemContainer setDropDown={this.setDropDown('mid')} video={video} key={key} muted={true} />
                     )
              }
       })

       allCartoon = videos.map((video, key) => {
              if (video.genre === "Cartoon") {
                     return <VideoItemContainer video={video} key={key} muted={true}  />
              }
       })

       allComedy = videos.map((video, key) => {
              if (video.genre === "Comedy") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })

       allDocumentary = videos.map((video, key) => {
              if (video.genre === "Documentary") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })

       allAction = videos.map((video, key) => {
              if (video.genre === "Action") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })
       allHorror = videos.map((video, key) => {
              if (video.genre === "Horror") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })

       allMusical = videos.map((video, key) => {
              if (video.genre === "Musical") {
                     return <VideoItemContainer video={video} key={key} />
              }
       })
       debugger
       
       return (
              <>
                     <div className="category">TV Shows</div>
                     <div className="container">
                            {allTvShows} 
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('tid')} id={tid}/> 
                     
                     <div className="category">Movies</div>
                     <div className="container">
                            {allMovies} 
                     </div> 
                     <VideoDetailContainer setDropDown={this.setDropDown('mid')} id={mid} /> 
                     {/* <div className="category">Cartoon</div>
                     <div className="container">
                            {allCartoon}
                     </div> 
                     <div className="category">Comedy</div>
                     <div className="container">
                            {allComedy}
                     </div> 
                     <div className="category">Documentary</div>
                     <div className="container">
                            {allDocumentary}
                     </div> 
                     <div className="category">Action</div>
                     <div className="container">
                            {allAction}
                     </div> 
                     <div className="category">Horror</div>
                     <div className="container">
                            {allHorror}
                     </div> 
                     <div className="category">Muscial</div>
                     <div className="container">
                            {allMusical}
                     </div>  */}
              </>
                   
          )
       } 
};

export default VideoRows;