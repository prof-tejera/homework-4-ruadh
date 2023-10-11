const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: 70,
        textAlign: "right",
        marginBottom: 10,
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
