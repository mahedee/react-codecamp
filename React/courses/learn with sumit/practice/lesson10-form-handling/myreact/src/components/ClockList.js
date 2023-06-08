// Functional component

import Clock from "./Clock";

// will receive list of clock as props
// set default value of quantities. so that it doesn't fail to work with map 
export default function ClockList({ quantities = [] }) {
    return (
        <div>
            {/* Feature of jsx: jsx can rander array of element one by one like below */}
            {quantities.map((key) => (
                <Clock key = {key} />
            ))} 
           

            {/* {quantities.map(() => (
                <Clock key={Math.random()} />
            ))} */}
        </div>
    );
}