const Number = ({ value, onClick }) => {

  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        
      }}
      className = {"number-key"}
      onClick= {onClick}
    >
      {value}
    </div>
  );
};

export default Number;
