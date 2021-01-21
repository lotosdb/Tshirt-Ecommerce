import React from 'react';
import Button from './../forms/Button';

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Button onClick={() => onLoadMoreEvt()}>
      Cargar más...
    </Button>
  );
};

export default LoadMore;
