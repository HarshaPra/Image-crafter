interface ResizeFileCrop {
  file: File;
  width: number;
  height: number;
  imageName: string;
}

export async function resizeFile({
  file,
  width,
  height,
  imageName,
}: ResizeFileCrop): Promise<File | undefined> {

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const imgUrl = event?.target?.result;
      const img = document.createElement('img');

      if (typeof imgUrl === 'string') {
        img.src = imgUrl;
      }

      img.onload = async () => {
        const canvas = document.createElement('canvas');
        const targetHeight = height;
        const targetWidth = width;

        const sourceAspectRatio = img.width / img.height;
        const targetAspectRatio = targetWidth / targetHeight;

        let sourceX = 0;
        let sourceY = 0;
        let sourceWidth = img.width;
        let sourceHeight = img.height;

        if (sourceAspectRatio > targetAspectRatio) {
         
          sourceWidth = img.height * targetAspectRatio;
          sourceX = (img.width - sourceWidth) / 2;
        } else {
          
          sourceHeight = img.width / targetAspectRatio;
          sourceY = (img.height - sourceHeight) / 2;
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const context = canvas.getContext('2d');

        context?.drawImage(
          img,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          0,
          0,
          targetWidth,
          targetHeight,
        );

        const resizedImgUrl = context?.canvas.toDataURL('image/jpeg', 90);

        if (resizedImgUrl) {
          const fileName = imageName;
          const response = await fetch(resizedImgUrl);
          const blob = await response.blob();
          const resizedImageFile = new File([blob], fileName, {
            type: blob.type,
          });
          resolve(resizedImageFile);
        } else {
          resolve(undefined);
        }
      };
    };

    reader.readAsDataURL(file);
  });
}