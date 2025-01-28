import React, { useRef, useContext, useEffect } from 'react';
import { fabric } from 'fabric';
import { FileContext } from '@/pages/context/FileContext';

const AnnotationCanvas = () => {
  const canvasRef = useRef(null);
  const { annotations } = useContext(FileContext);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    annotations.forEach((annotation) => {
      if (annotation.type === 'text') {
        const text = new fabric.Textbox('Editable Text', {
          left: 50,
          top: 50,
          fill: 'black',
        });
        canvas.add(text);
      }

      if (annotation.type === 'circle') {
        const circle = new fabric.Circle({
          left: 100,
          top: 100,
          radius: 50,
          fill: 'transparent',
          stroke: 'blue',
        });
        canvas.add(circle);
      }

      if (annotation.type === 'highlight') {
        const rect = new fabric.Rect({
          left: 150,
          top: 150,
          width: 200,
          height: 100,
          fill: 'rgba(255,255,0,0.5)',
        });
        canvas.add(rect);
      }
    });
  }, [annotations]);

  return <canvas ref={canvasRef} width="800" height="600" className="border"></canvas>;
};

export default AnnotationCanvas;
