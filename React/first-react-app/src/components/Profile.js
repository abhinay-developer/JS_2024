function Profile({ firstName, lastName, age }) {
    // console.log(props)
    return (
        <div>
            <h3>FirstName: {firstName}</h3>
            <h3>LastName:  {lastName}</h3>
            <h5>Age: {age}</h5>
        </div>
    )
}


// function Profile(props) {
//     // console.log(props)
//     return (
//         <div>
//             <h3>FirstName: {props.firstName}</h3>
//             <h3>LastName:  {props.lastName}</h3>
//             <h5>Age: {props.age}</h5>
//         </div>
//     )
// }
export default Profile;

// {firstName,lastName,age}=props;