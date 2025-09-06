"use client";
import React, { ReactNode } from "react";
import { IKImage, ImageKitProvider as ImageKit } from "imagekitio-next";
import config from "@/lib/config";
import { ImageProps } from "next/image";
import IKImageProps from "imagekitio-next/src/components/IKImage/props";
import ImageKitProviderProps from "imagekitio-next/src/components/ImageKitProvider/props";
import { useQuery } from "@tanstack/react-query";
import { getImagePathById } from "@/actions/image";
import { LoaderCircle } from "lucide-react";

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

export const ImageKitImage = (
  props: Omit<ImageProps, "src" | "loading" | "loader"> &
    IKImageProps &
    ImageKitProviderProps &
    ImageKitImageProps,
) => <IKImage {...props} className={props.className} />;

export const ImageKitImageById = (
  props: Omit<ImageProps, "src" | "loading" | "loader"> &
    Omit<IKImageProps, "path"> &
    ImageKitProviderProps &
    Omit<ImageKitImageProps, "path"> & { id: string },
) => {
  const { data: path, isFetching } = useQuery({
    queryKey: ["image", props.id],
    queryFn: () => getImagePathById(props.id),
    initialData: "",
  });

  if (isFetching) {
    return (
      <div
        className={
          "relative flex aspect-square items-center justify-center rounded-2xl border-2 border-white bg-[#ededed]"
        }
      >
        <LoaderCircle
          className={"size-12 animate-spin text-gray-400 lg:size-16"}
        />
      </div>
    );
  }

  return (
    <IKImage
      {...props}
      loading={"lazy"}
      className={props.className}
      path={path}
    />
  );
};
