const Operation = ({ value, onClick, classes }) => {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
      }}
      className={classes}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Operation;
