export default function Even({ elements }) { //props.elements
    console.log(elements);
    return (
        <>
            <h1>Even Number</h1>
            <h3>
                {elements.filter((element) => element % 2 === 0)}
            </h3>
        </>
    )
}