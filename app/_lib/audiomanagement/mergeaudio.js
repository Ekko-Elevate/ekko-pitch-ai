const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = path.resolve(process.cwd(), 'node_modules', '@ffmpeg-installer', 'win32-x64', 'ffmpeg.exe');
ffmpeg.setFfmpegPath(ffmpegPath);


export async function mergeAudio(voicepath, musicpath, outputpath, duration, voicedelay = "0", musicdelay = "0"){ 
    return new Promise((resolve, reject) => {
        let command = ffmpeg()
        .input(voicepath)
        .input(musicpath)
        .complexFilter([
            {
                filter: "adelay",
                options: voicedelay,
                inputs: "0:a",
                outputs: "voice_filter"
            },
            {
                filter: "adelay",
                options: musicdelay,
                inputs: "1:a",
                outputs: "music_filter"
            },
            {
                filter: "amix",
                options: {
                    inputs: 2,
                    duration: "longest"
                },
                inputs: ['voice_filter', 'music_filter'],
                outputs: "mixed"
            }
        ])
        .map("mixed")
        .output(outputpath)

        .on("error", (err) => {
            console.log("Audio Merge Failed");
            reject(err);
        })
        .on("end", () => {
            resolve();
        });

        command.run();

    });
    
}