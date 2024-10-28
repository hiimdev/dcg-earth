import React, { useEffect, useRef } from 'react';

import { Gradient } from './Gradient.js';

const Canvas = (props) => {
  const canvasRef2 = useRef(null);
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient('#gradient-canvas');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas className={props.className} id="gradient-canvas" ref={canvasRef2} {...props} data-transition-in />;
};

export default Canvas;
