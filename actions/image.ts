"use server";
import ImageKit from "imagekit";

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

export async function getImagePathById(fileId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    /* eslint-disable no-console */
    console.log(
      `process.env.IMAGEKIT_PRIVATE_KEY = ${process.env.IMAGEKIT_PRIVATE_KEY}`,
    );
    /* eslint-disable no-console */
    console.log(
      `process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY = ${process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}`,
    );
    /* eslint-disable no-console */
    console.log(
      `process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT = ${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}`,
    );
    imageKit.getFileDetails(fileId, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        const path = result?.filePath || "";
        resolve(path);
      }
    });
  });
}
