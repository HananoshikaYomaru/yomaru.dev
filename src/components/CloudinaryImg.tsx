/**
 * from https://github.com/theodorusclarence/theodorusclarence.com/blob/38c5c66e3535313ac2bd2cac82d71e19dc2c267d/src/components/images/CloudinaryImg.tsx
 */

import { buildUrl } from "cloudinary-build-url";

import Image from "next/image";

type Props = {
  publicId: string;
  height?: string | number;
  width?: string | number;
  alt?: string;
  aspect?: {
    height: number | string;
    width: number | string;
  };
};

/**
 * default `height` and `width` is 300px
 */
const CloudinaryImg = ({
  publicId,
  aspect,
  width = 300,
  height = 300,
  alt,
}: Props) => {
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: "yomaru",
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });

  return (
    <Image width={width} height={height} src={url} alt={alt} title={alt} />
  );
};

export default CloudinaryImg;
