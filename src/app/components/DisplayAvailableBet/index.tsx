const DisplayAvailableBet = (props: { availableBets?: any }) => {
  return (
    <div>
      {props.availableBets.forEach((element: any) => {
        <span>{element}</span>;
      })}
    </div>
  );
};

export default DisplayAvailableBet;
