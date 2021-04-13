import {Component} from "react";

class Title extends Component {
    render() {
      const backend = [
        {
            nama: "john",
            address: 'manado',
        },
        {
            nama:"eben",
            address:'bitung',
        },
        {
          nama:"ricky",
          address:'lembe',
        }
      ]
      let fullName = "Doe";
      return (
        <div>
        <h1>Back end programming class</h1>
        <li>john</li>
        <li>eben</li>
        <li>ricky</li> 
        </div>
      );
    }
  }

  export default Title;