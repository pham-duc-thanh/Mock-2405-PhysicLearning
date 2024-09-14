import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <h1>Xảy ra lỗi</h1>;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onError: handleOnError
        })
      )}
    </React.Fragment>
  );
};

export default ErrorBoundary;