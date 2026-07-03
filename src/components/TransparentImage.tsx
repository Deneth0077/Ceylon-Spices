'use client';

import React, { useState, useEffect } from 'react';

interface TransparentImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  threshold?: number;
  tintColor?: [number, number, number];
}

export default function TransparentImage({ 
  src, 
  threshold = 245, 
  tintColor,
  className, 
  alt = "", 
  ...props 
}: TransparentImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    setProcessedSrc(null);

    const img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setProcessedSrc(src);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Use the threshold prop to dynamically calculate range
        const tEnd = threshold;
        const tStart = Math.max(0, threshold - 45);

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const avg = (r + g + b) / 3;
          // If average brightness is high, treat it as white/light background
          if (avg >= tStart) {
            // Smooth alpha transition between tStart and tEnd
            const alphaRatio = Math.max(0, Math.min(1, (tEnd - avg) / (tEnd - tStart)));
            data[i + 3] = alphaRatio * 255;
            
            if (tintColor) {
               const tintWeight = Math.pow(1 - alphaRatio, 0.5); // non-linear to tint faster
               data[i] = r * (1 - tintWeight) + tintColor[0] * tintWeight;
               data[i + 1] = g * (1 - tintWeight) + tintColor[1] * tintWeight;
               data[i + 2] = b * (1 - tintWeight) + tintColor[2] * tintWeight;
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        setProcessedSrc(canvas.toDataURL());
      } catch (err) {
        console.error('Error processing transparent image:', err);
        setProcessedSrc(src);
      }
    };
    img.onerror = () => {
      setProcessedSrc(src);
    };
  }, [src, threshold]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={processedSrc || src}
      alt={alt}
      className={`${className} ${!processedSrc ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
      {...props}
    />
  );
}
