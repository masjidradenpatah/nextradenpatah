"use client";
import React, { ReactNode } from "react";
import { ImageKitProvider } from "imagekitio-next";
import config from "@/lib/config";

const urlEndpoint = config.env.imageKit.urlEndpoint;

const ImageKitProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>{children}</ImageKitProvider>
  );
};
export default ImageKitProviderWrapper;
