import { ElevenLabsClient, ElevenLabs } from "elevenlabs";
import fs from 'fs'; //file system
import dotenv from 'dotenv';
dotenv.config();

const client = new ElevenLabsClient({ apiKey: process.env.ELEVEN_API_TOKEN });

const audioStream = await client.textToSpeech.convert("bIHbv24MWmeRgasZH58o", { // set voice id here
    optimize_streaming_latency: ElevenLabs.OptimizeStreamingLatency.Zero,
    output_format: ElevenLabs.OutputFormat.Mp32205032,
    text: "bang shabanh",
    voice_settings: {
        stability: 0.1,
        similarity_boost: 0.3,
        style: 0.2
    }
});

//name audio file, write stream emites finish or error
const writeStream = fs.createWriteStream('voice.mp3');

//save audio
audioStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('saved');
});

writeStream.on('error', (err) => {
    console.error('Error, not saved', err);
});
