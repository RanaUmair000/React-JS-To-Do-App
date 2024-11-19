import List from "./List";

let MainList = ({items}) =>{
    return <>
        <ul>
            {items.map((food) => (
                <List itemm={food} />
            ))}
        </ul>
    </>
}

export default MainList;