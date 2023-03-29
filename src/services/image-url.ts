import imageUrl from "./../assets/no-image-placeholder.webp";

const getCroppedImage = (url: string) => {
  if (!url) return imageUrl;
  const index = url.indexOf("media/") + "media/".length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;
