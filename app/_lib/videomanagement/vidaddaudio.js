const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = path.resolve(process.cwd(), 'node_modules', '@ffmpeg-installer', 'win32-x64', 'ffmpeg.exe');
ffmpeg.setFfmpegPath(ffmpegPath);

export async function vidAddAudio(videopath, audiopath, outputpath, audiodelay = 0){ 
    return new Promise((resolve, reject) => {
        let command = ffmpeg()
        .input(videopath)
        .input(audiopath)
        .complexFilter([
            {
                filter: "adelay",
                options: audiodelay,
                inputs: "1:a",
                outputs: "audio_filter"
            }
        ])

        .outputOptions([
            "-map 0:v",
            "-map [audio_filter]"
        ])
        .output(outputpath)
        .output(outputpath)

        .on("error", (err) => {
            console.log("Video/Audio Merge Failed");
            reject(err);
        })
        .on("end", () => {
            resolve();
        });

        command.run();

    });
    
}