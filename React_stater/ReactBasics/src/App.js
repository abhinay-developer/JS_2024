
//const h1 = React.createElement("h1", { className: "title" }, "Hello World");

const div = React.createElement("div", { className: "title" },
    React.createElement("h1", { className: 'heading1' }, "Hello World"),
    React.createElement("h2", { className: 'heading2' }, "Welcome to JavaScript")
)
{/* <div>
    <h1>Hello World</h1>
    <h2>Welcome to Javascript</h2>
    </div> */}
/**
 *  1.TagName  2.Attributes  3.Text Content/children
 * 
 * **/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
