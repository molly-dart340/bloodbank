class BloodDonationForm extends React.Component {

    constructor(props) {
       super(props)
 
       this.state = {
          value: "",
          bloodtypeIndex: 0,
          types: [],
          dayIndex: 0,
          days: [],
          //an array of what the person has ordered and starts as an empty array
          times: [],
          appointment: [],
          selectedIndices: [],
          isLoading: true,
          done: false
       }
 
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handleBloodTypeChange = this.handleBloodTypeChange.bind(this);
       this.handleDayChange = this.handleDayChange.bind(this);
    }
 
    handleNameChange = e => {
       this.setState({ value: e.target.value })
    }
 
    handleBloodTypeChange = e => {
       this.setState({ bloodtypeIndex: e.target.value });
    }
 
    handleDayChange = e => {
       this.setState({ dayIndex: e.target.value });
    }
 
    handleTimeChange = e => {
       let copy = this.state.selectedIndices;
       if (e.target.checked) {
          //add to selectedIndices
          copy.push(e.target.value);
          copy.sort(function (a, b) { return a - b });
       } else {
          //remove from selectedIndices
          copy = copy.filter(function (element) {
             return element != e.target.value;
          });
       }
       this.setState({ selectedIndices: copy });
 
    }
 
    addPossibleAppointment = e => {
       let copy = this.state.appointment; //this copies the appointment array that will hold all your information
       let name = this.state.value;
       // this gives the selected blood type from the dropdown 
       let toAdd = (this.state.types[this.state.bloodtypeIndex].type);
       // this gives the selected day options from the radio buttons
       toAdd += " " + (this.state.days[this.state.dayIndex].day);
       // this gives the selected checkboxes of possible times
       for (let i = 0; i < this.state.selectedIndices.length; i++) {
          toAdd += " " + (this.state.times[this.state.selectedIndices[i]].time) + ",";
       }
 
     
       // copy.push(this.state.selectedIndices.length);
       console.log(toAdd)
       //Uses a substitued form of string manipulation as you allowed me to do and it makes uses of the JavaScript String length property
          if (this.state.selectedIndices.length <= 2) {
             alert("Please select more than two time options.") //This line sends an alert because the .length property is less than or equal to two selected time options
          }
          else if (this.state.selectedIndices.length > 2) {
             alert("The blood bank will get back to you with a confirmed time. Here is the selections you made.") //You get this alert if you selected greater than two options and it uses the .length property
             if (copy.indexOf(toAdd) == -1) {
                copy.push(name + `\n` + toAdd)
                this.setState({ appointment: copy })
                this.setState({done: true})
          }
       }
    }
 
    componentDidMount() {
       //this.setState({ isLoading: true });
       fetch('donationform.json')
          .then(response => response.json())
          .then(data => this.setState({ types: data["bloodtype"], days: data["donationDay"], times: data["donationTimes"], isLoading: false }));
    }
 
    render() {
 
       return (
          <>
             <div className="box">
                <h2>Enter your name</h2>
                <input type="text" value={this.state.value} onChange={this.handleNameChange} />
             </div>
             <div className="box">
                <h2>Blood Type</h2>
                <select value={this.state.bloodtypeIndex} onChange={this.handleBloodTypeChange}>
                   {this.state.types.map((type, i) => {
                      return (
                         <option key={"option_" + i} value={i}>
                            {type.type}
                         </option>
                      )
                   }
                   )
                   }
                </select>
             </div>
             <div className="box3">
                <h2>Day Options</h2>
                {
                   this.state.days.map((day, i) => {
                      return (
                         <div key={"div_1_" + i}>
                            <input key={"day_" + i} id={"day_" + i} type="radio"
                               name="day" value={i} onChange={this.handleDayChange} />
                            <label key={"label_day_" + i} htmlFor={"day_" + i}>
                               {day.day}
                            </label>
                         </div>
                      )
 
                   }
                   )
                }
 
             </div>
             <div className="box" style={{ gridColumn: "1 / span 3" }}>
                <h2>Time Options</h2>
                {
                   this.state.times.map((time, i) => {
                      return (
                         <div key={"div_check_" + i}>
                            <input key={"check_" + i} id={"time_" + i} type="checkbox" name="time" class="checkboxes" value={i} onChange={this.handleTimeChange} />
                            <label key={"label_time_" + i} htmlFor={"time_" + i}>
                               {time.time}
                            </label>
                         </div>
                      )
 
                   }
                   )
                }
 
             </div>
             <div className="box" style={{ gridColumn: "1 / span 3" }}>
                <input type="button" id="scheduleBtn" value="Schedule Possibilities" onClick={this.addPossibleAppointment} disabled={this.state.done} />
             </div>
             <div className="box" style={{ gridColumn: "1 / span 3" }}>
               
               {this.state.appointment.map((item, i) => {
                  return (
                     <div key={"div_3_" + i}>
                        <span><h2>Appointment Details</h2></span>
                        <span key={"span_" + i}>{item}</span>
                     </div>
                  )
               }

               )}
      </div>
          
          </>
       ) //match return
    } //match render
 } //end class
 
 ReactDOM.render(<BloodDonationForm />, document.querySelector('#divBloodFormOrder'))