import React from 'react';

const Typography = ({
  variant = 'p',
  weight = 'regular',
  color = 'text-main',
  children,
  className = '',
  ...props
}) => {
  const Component = variant;

  const weights = {
    regular: 400,
    medium: 500,
    bold: 700
  };

  const style = {
    fontWeight: weights[weight] || 400,
    color: color === 'text-main' ? 'var(--text-main)' : color === 'muted' ? 'var(--text-muted)' : color,
    margin: 0,
    fontFamily: "'Poppins', sans-serif"
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'h1': return { fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2, fontFamily: "'Poppins', sans-serif" };
      case 'h2': return { fontSize: '2.25rem', marginBottom: '0.75rem', lineHeight: 1.3, fontFamily: "'Poppins', sans-serif" };
      case 'h3': return { fontSize: '1.5rem', marginBottom: '0.5rem', lineHeight: 1.4, fontFamily: "'Poppins', sans-serif" };
      case 'p': return { fontSize: '1rem', marginBottom: '1rem', lineHeight: 1.6, fontFamily: "'Poppins', sans-serif" };
      case 'span': return { fontSize: 'inherit', marginBottom: 0, fontFamily: "'Poppins', sans-serif" };
      default: return {};
    }
  };

  return (
    <Component
      style={{ ...style, ...getVariantStyles() }}
      className={`typography-${variant} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
