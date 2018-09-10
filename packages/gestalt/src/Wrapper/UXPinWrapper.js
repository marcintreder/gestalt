import React from 'react';

export default function UXPinWrapper({ children }) {
  const WrappedComponent = () => children;
  return <WrappedComponent {...children.props} />;
}
