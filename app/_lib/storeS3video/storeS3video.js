import path from "path";
import AWS from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export default function storeS3video(id) {
    // Configure AWS
    AWS.config.update({
        region: 'us-east-1',
        accessKeyId: process.env.AWS_IAM_ACCESS_KEY,
        secretAccessKey: process.env.AWS_IAM_SECRET_KEY
    });

    // Create S3 service object
    const S3 = new AWS.S3();

    const filePath = path.join(__dirname, `./app/api/makegeneration/_output/${id}.mp4`);

    const uploadParams = {
        Bucket: 'ekkoads',
        Key: `${id}.mp4`,
        Body: fs.createReadStream(filePath)
    };

    // Upload the file
s3.upload(uploadParams, (err, data) => {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
    }
  });
  
}

storeS3video("sample_video_1");