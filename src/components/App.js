import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends Component {
    state={vidoes:[],selectedVideo:null, comment:''}

    componentDidMount(){
        this.onTermSubmit('buildingss')
    }

    onTermSubmit= async(term)=>{
      const response= await youtube.get('/search',{
            params:{
                q:term
            }
        });
        
        this.setState({
            vidoes:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }
    render() {
        return (
            <div className="ui container">
              <SearchBar onFormSubmit={this.onTermSubmit}/>
              <div className="ui grid">
                  <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail 
                        video={this.state.selectedVideo}
                        comments={this.state.comment}
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.vidoes}/>   
                    </div>
                  </div>   
              </div>
                     
            </div>
        )
    }
}
