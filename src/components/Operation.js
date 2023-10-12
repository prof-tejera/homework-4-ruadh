const Operation = ({ value, onClick, classes }) => {
  return (
    <div
      // Moved styling to index.css
      className={`key ${classes}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Operation;
