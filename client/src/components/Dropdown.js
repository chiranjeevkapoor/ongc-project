import * as React from "react";
import {Context_data} from "../../context/context";
import { useContext } from "react";

const Dropdown = () => {
/** "selected" here is state variable which will hold the
* value of currently selected dropdown.
*/
const [selected, setSelected] = React.useState("");
const {setregiondropdown, setcitydropdown} = useContext(Context_data);


/** Function that will set different values to state variable
* based on which dropdown is selected
*/
const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
    setregiondropdown(event.target.value)
    //console.log(event.target.value)
};
const changecityOptionHandler = (event) => {
   // console.log(event.target.value);
    setcitydropdown(event.target.value);
}

/** Different arrays for different dropdowns */
const northindia = [
	"Delhi",
    "Jaipur",
    "Lucknow",
    "kanpur"
];
const southindia = ["Mysuru", "bengaluru"];
const eastindia = ["kolkata", "siliguri"];
const westindia = ["mumbai","udaipur"];

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
let options = null;

/** Setting Type variable according to dropdown */
if (selected === "northindia") {
	type = northindia;
} else if (selected === "southindia") {
	type = southindia;
} else if (selected === "eastindia") {
	type = eastindia;
} else if (selected === "westindia"){
    type = westindia;
}

/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
if (type) {
	options = type.map((el) => <option key={el} value={el}>{el}</option>);
}
return (
	<div
	style={{
		padding: "16px",
		margin: "16px",
	}}
	>
	<form>
		<div>
		{/** Bind changeSelectOptionHandler to onChange method of select.
		* This method will trigger every time different
		* option is selected.
		*/}
        <label>Region : </label>
		<select onChange={changeSelectOptionHandler}>
			<option>Choose...</option>
			<option value="northindia">northindia</option>
			<option value="southindia">southindia</option>
			<option value="eastindia">eastindia</option>
            <option value="westindia">westindia</option>
		</select>
		</div>
		<div>
            <label>cities : </label>
		<select onChange={changecityOptionHandler}>
			{
			/** This is where we have used our options variable */
			options
			}
		</select>
		</div>
	</form>
	</div>
);
};

export default Dropdown;
