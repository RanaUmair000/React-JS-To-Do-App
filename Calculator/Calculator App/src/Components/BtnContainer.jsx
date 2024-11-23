let BtnContainer = ({values, calInput}) => {
    return <>
        <div class="btns-container">
            {values.map((item, index) =>
                <button onClick={() => calInput(item)} key={index}>{item}</button>
            )}
        </div>
    </>
    
}

export default BtnContainer;