/**
 * from https://github.com/theodorusclarence/theodorusclarence.com/blob/38c5c66e3535313ac2bd2cac82d71e19dc2c267d/src/components/images/CloudinaryImg.tsx
 */

import { buildUrl } from "cloudinary-build-url";

import Image from "next/image";

export const extractPublicId = (url: string): string => {
  return /yomaru.dev\/(.*?)+/.exec(url)?.[0] || "";
};

type Props = {
  publicId: string;
  height?: string | number;
  width?: string | number;
  layout?: string;
  alt?: string;
  x?: number;
  y?: number;
};

/**
 * if you only have the link, you need to use the `extractPublicId` methods
 */
const CloudinaryImg = ({
  publicId,
  width,
  height,
  x,
  y,
  layout,
  alt,
}: Props) => {
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: "yomaru",
    },
    transformations: {
      resize:
        width && height
          ? {
              type: "fill",
              width: width,
              height: height,
              aspectRatio: `${width}:${height}`,
            }
          : undefined,
      position:
        x && y
          ? {
              x: x,
              y: y,
            }
          : undefined,
    },
  });

  return (
    <div className="relative h-full w-full">
      {width && height && layout != "fill" ? (
        <Image width={width} height={height} src={url} alt={alt} title={alt} />
      ) : (
        <Image layout="fill" src={url} alt={alt} objectFit="cover"></Image>
      )}
    </div>
  );
};

export default CloudinaryImg;
