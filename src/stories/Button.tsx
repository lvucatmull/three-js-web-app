import './button.css';

interface ButtonProps {
  primary : boolean,
  backgroundColor: string,
  size: string, 
  label: string,
}

/** Primary UI component for user interaction */
export const Button = ({ primary, backgroundColor, size, label, ...props }:ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

