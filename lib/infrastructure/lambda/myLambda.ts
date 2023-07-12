import * as AWS from 'aws-sdk';

const S3 = new AWS.S3();
const S3_BUCKET_NAME = process.env.BUCKET_NAME as string;
const S3_FOLDER_NAME = process.env.FOLDER_NAME as string;

export const handler = async (filename: string): Promise<AWS.S3.PutObjectOutput> => {
    const filePath: string = `${S3_FOLDER_NAME}/${filename}`;
    const someDemoContent: string = "hi there!";
    return S3.putObject({ Bucket: S3_BUCKET_NAME, Key: filePath, Body: someDemoContent }).promise();
};
