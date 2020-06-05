import axios from 'axios'

const KEY='AIzaSyD9zrYHeQxWlKrwfwiRYyJ8VQKcvPRGWa0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResult:5,
        key:`${KEY}`
    }
})