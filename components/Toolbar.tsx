import { FileContext } from '@/pages/context/FileContext';
import React, { useContext } from 'react';

const Toolbar = () => {
  const { annotations, setAnnotations } = useContext(FileContext);

  const addAnnotation = (type) => {
    setAnnotations([...annotations, { type }]);
  };

  return (
    <div className="toolbar d-flex justify-content-between p-2 bg-light border">
      <button className="btn btn-primary" onClick={() => addAnnotation('text')}>Add Text</button>
      <button className="btn btn-secondary" onClick={() => addAnnotation('circle')}>Add Circle</button>
      <button className="btn btn-info" onClick={() => addAnnotation('highlight')}>Add Highlight</button>
    </div>
  );
};

export default Toolbar;
