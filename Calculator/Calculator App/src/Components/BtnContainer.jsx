let BtnContainer = ({values}) => {
    return <>
        <div class="btns-container">
            {values.map((item, index) =>
                <button key={index}>{item}</button>
            )}
        </div>
    </>
    
}

export default BtnContainer;