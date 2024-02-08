import { useEffect } from 'react';

export function use3DEffect(photoContainerRef: React.RefObject<HTMLDivElement>) {
  const xOffset = 10;
  const yOffset = 10;
  const mouseEnterTransformTime = 0.1;
  const mouseLeaveTransformTime = 0.5;
  const perspective = 1200;

  const map = (value: number, iStart: number, iTop: number, oStart: number, oStop: number) => {
    return oStart + (oStop - oStart) * ((value - iStart) / (iTop - iStart));
  };

  useEffect(() => {
    if (!photoContainerRef.current) return;

    const photoContainer = photoContainerRef.current;
    const rectTransform = photoContainer.getBoundingClientRect();
    const perspectiveStyle = `perspective(${perspective}px)`;

    photoContainer.style.setProperty('transform-style', 'preserve-3d');

    const mouseEnterHandler = () => {
      photoContainer.style.setProperty('transition', `transform ${mouseEnterTransformTime}s`);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      const dy = e.clientY - rectTransform.top;
      const dx = e.clientX - rectTransform.left;
      const xRot = map(dx, 0, rectTransform.width, -xOffset, xOffset);
      const yRot = map(dy, 0, rectTransform.height, yOffset, -yOffset);

      photoContainer.style.setProperty(
        'transform',
        `${perspectiveStyle} rotateX(${yRot}deg) rotateY(${xRot}deg)`
      );
    };

    const mouseLeaveHandler = () => {
      photoContainer.style.setProperty('transition', `transform ${mouseLeaveTransformTime}s`);
      photoContainer.style.setProperty(
        'transform',
        `${perspectiveStyle} rotateX(0deg) rotateY(0deg)`
      );
    };

    photoContainer.addEventListener('mouseenter', mouseEnterHandler);
    photoContainer.addEventListener('mousemove', mouseMoveHandler);
    photoContainer.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      photoContainer.removeEventListener('mouseenter', mouseEnterHandler);
      photoContainer.removeEventListener('mousemove', mouseMoveHandler);
      photoContainer.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, [photoContainerRef]);
}
