const Operation = ({ value, onClick, classes, operator }) => {
  return (
    <div
      // Moved styling to index.css
      className={`key ${classes} ${value === operator ? 'active-operator' : ''}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Operation;
