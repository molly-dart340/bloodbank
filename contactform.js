class ContactForm extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         name: "",
         email: "",
         subject: "",
         form: [],
         isLoading: true,
         done: false
      }

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSubjectChange = this.handleSubjectChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
   }

   handleNameChange = e => {
      this.setState({ name: e.target.value })
   }

   handleEmailChange = e => {
      this.setState({ email: e.target.value })
   }

   handleSubjectChange = e => {
      this.setState({ subject: e.target.value})
   }


   handleMessageChange = e => {
   this.setState({ message: e.target.value});
   }

   addSubmitForm = e => {
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.subject);
      console.log(this.state.message);
      alert('A message was submitted: ' + this.state.message);
    event.preventDefault();
   }

   render() {

      return (
         <>
            <div className="box">
               <h2>Name</h2>
               <input type="text" placeholder="Your first and last name..." value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div className="box">
               <h2>Email</h2>
               <input type="text" placeholder="Your email address..." value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div className="box">
               <h2>Subject</h2>
               <input type="text" placeholder="Your subject line..." value={this.state.subject} onChange={this.handleSubjectChange} />
            </div>
            <div className="box" style={{ gridColumn: "1 / span 3" }}>
               <h2>Message</h2>
               <textarea name="textarea" rows="5" cols="40" placeholder="Write your message here." value={this.state.message} onChange={this.handleMessageChange}>
               </textarea>

            </div>
            <div className="box" style={{ gridColumn: "1 / span 3" }}>
               <input type="button" id="scheduleBtn" value="Submit" onClick={this.addSubmitForm} disabled={this.state.done} />
            </div>
            <div className="box" style={{ gridColumn: "1 / span 3" }}>


            </div>

         </>
      ) //match return
   } //match render
} //end class

ReactDOM.render(<ContactForm />, document.querySelector('#divContactForm'))