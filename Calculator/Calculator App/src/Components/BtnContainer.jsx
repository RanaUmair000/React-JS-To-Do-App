let BtnContainer = ({ values, calInput }) => {
    return (
      <div className="btns-container">
        {values.map((item, index) =>
          item !== "" ? (
            <button className="btn" onClick={() => calInput(item)} key={index}>
              {item}
            </button>
          ) : (
            <div key={index}></div>
          )
        )}
      </div>
    );
  };
  
  export default BtnContainer;
  