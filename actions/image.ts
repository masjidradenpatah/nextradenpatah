"use server";
import ImageKit from "imagekit";

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

export async function getImagePathById(fileId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    imageKit.getFileDetails(fileId, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const path = result?.filePath || "";
        resolve(path);
      }
    });
  });
}
