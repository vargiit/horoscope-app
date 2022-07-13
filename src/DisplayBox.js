const DisplayBox = (props) => {
  // console.log(props.userInfo);
  return (
    <div className="display-card">
      <div className="display-div">
        <div>{props.userInfo.value1}</div>
        <div>{props.userInfo.sign}</div>
        <div>{props.sign.date_range}</div>
        <div>{props.sign.description}</div>
      </div>
    </div>
  );
};

export default DisplayBox;
