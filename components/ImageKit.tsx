"use client";
import React, { ReactNode } from "react";
import { IKImage, ImageKitProvider as ImageKit } from "imagekitio-next";
import config from "@/lib/config";

const urlEndpoint = config.env.imageKit.urlEndpoint;

export const ImageKitProvider = ({ children }: { children: ReactNode }) => {
  return <ImageKit urlEndpoint={urlEndpoint}>{children}</ImageKit>;
};

interface ImageKitImageProps {
  path: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export const ImageKitImage = (props: ImageKitImageProps) => (
  <IKImage {...props} className={props.className} />
);
