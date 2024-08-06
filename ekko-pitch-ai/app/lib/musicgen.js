const Replicate = require("replicate");
const replicate = new Replicate();
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const input = {
    prompt: "upbeat hiphop instrumental",
    model_version: "stereo-large",
    output_format: "mp3",
    normalization_strategy: "peak",
    duration: 15
}

export async function api_call() {
    const output = await replicate.run("meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb", { input });
    console.log(output)
    const file = fs.createWriteStream("file.mp3");
    const request = https.get(output, function(response) {
    response.pipe(file);

    // after download completed close filestream
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
        });
    });
    //=> "https://replicate.delivery/pbxt/OeLYIQiltdzMaCex1shlEFy6...
}

// (async () => {
//     await api_call();
// })();