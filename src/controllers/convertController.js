const youtubeURL = require('../services/getYoutubeUrlService')
const convertService = require('../services/convertService')
const path = require("path")

module.exports = async function convertRequestController(req, res){
    const artist_or_music = req.params.artist_or_music
    if(artist_or_music.length > 50){
        return res.status(400).json({error:"titulo muito grande!"})
    }
    const video_id = await youtubeURL(artist_or_music)
    await convertService(video_id, artist_or_music)
    setTimeout(async () => {
        await res.sendFile(path.resolve(__dirname,`../../mp3/${artist_or_music}.mp3`));
    }, 4000)
}