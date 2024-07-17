import Button from "./Button";

function Card(props) {
    return <>
        <div className="card" style={{ backgroundColor: props.cssColor }}>
            <h1 style={{ color: 'black' }}>{props.name}</h1>
            <Button buttonName="View" />
            <Button buttonName="Submit" />
            <Button buttonName="Share" />
            {/* <button type="button">View</button>
        <button type="button">Submit</button> */}
        </div>
    </>
}

export default Card;