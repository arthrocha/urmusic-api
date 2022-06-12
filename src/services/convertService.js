const path = require("path");

const YoutubeMp3Downloader = require("youtube-mp3-downloader");

const convertService = async (video_id, artist_or_music) => {
    const YD = new YoutubeMp3Downloader({
        "ffmpegPath": path.resolve(__dirname, '../../ffmpeg/bin/ffmpeg.exe'),        // FFmpeg binary location
        "outputPath": path.resolve(__dirname, '../../mp3'),    // Output file location (default: the home directory)
        "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
        "queueParallelism": 2,                  // Download parallelism (default: 1)
        "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
        "allowWebm": false                      // Enable download from WebM sources (default: false)
    });

    YD.download(video_id, `${artist_or_music}.mp3`);

    YD.on("finished", function(err, data) {
        return  JSON.stringify(data)
    });

    YD.on("error", function(error) {
        console.log(error);
    });

    YD.on("progress", function(progress) {
        return  JSON.stringify(progress)
    });
}

module.exports = convertService