const Number = ({ value, onClick }) => {

  return (
    <div
      // Moved styling to index.css
      className = {"key number-key"}
      onClick= {onClick}
    >
      {value}
    </div>
  );
};

export default Number;
