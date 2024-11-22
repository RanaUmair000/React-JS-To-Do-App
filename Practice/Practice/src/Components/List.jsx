let List = ({itemm}) =>{
    return <><li style={{"marginBottom": "20px"}} key={itemm}>{itemm}<button style={{"float" : "right"}} onClick={() => {console.log(`${itemm} clicked`);}} class="btn btn-warning ml-5">Buy</button></li></>
}

export default List;