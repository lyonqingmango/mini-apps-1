// import React from 'react';
// import ReactDOM from 'react-dom';
class  Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name:'',
      email:'',
      password:''
    };

    this.handleInputChange =this.handleInputChange.bind(this);

  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div>
        <h3> email name password create </h3>
        <form>
        <label>
          name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} required= "required" />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <br />
        <label>
          password:
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <input type="submit" value="Next" />
        </form>
      </div>)
  }
}

class  Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      address:'',
      city:'',
      state:'',
      zipcode:'',
      phonenumber:'',
    };

    this.handleInputChange =this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div>
        <h3> ship to address (line 1, line 2, city, state, zip code) and phone number. create </h3>
        <form>
        <label>
          address
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleInputChange} required= "required" />
        </label>
        <br />
        <label>
          city:
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <br />
        <label>
          state:
          <input
            name="state"
            type="text"
            value={this.state.state}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <br />
        <label>
          zip code:
          <input
            name="zipcode"
            type="text"
            value={this.state.zipcode}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <label>
          phone number format 000-000-0000:
          <input
            name="phonenumber"
            type="tel"
            value={this.state.phonenumber}
            onChange={this.handleInputChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required= "required"/>
        </label>
        <input type="submit" value="Next" />
        </form>
      </div>)
  }
}


class  Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      credit:'',
      expire:'',
      cvv:'',
      billing:'',

    };

    this.handleInputChange =this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div>
        <h3> credit card #, expiry date, CVV, and billing zip code. create </h3>
        <form>
        <label>
          creditcard
          <input
            name="credit"
            type="text"
            value={this.state.credit}
            onChange={this.handleInputChange} required= "required" />
        </label>
        <br />
        <label>
          city:
          <input
            name="expire"
            type="text"
            value={this.state.expire}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <br />
        <label>
          CVV:
          <input
            name="cvv"
            type="text"
            value={this.state.cvv}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <br />
        <label>
          billing zip code:
          <input
            name="billing"
            type="text"
            value={this.state.billing}
            onChange={this.handleInputChange} required= "required"/>
        </label>
        <input type="submit" value="Next" />
        </form>
      </div>)
  }
}

function Purchase (props){

  return(
    <div>
    helllo
    </div>

  )



}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      f1:false,
      f2:false,
      f3:false,

    }

  }

  render () {
    return (
    <div>
      <h1> check out Form </h1>
        {this.state.checkout && <button type="button">
          check out
        </button>}
      {this.state.f1 && <Form1/>}
      {this.state.f2 && <Form1/>}
      {this.state.f2 && <Form1/>}
      <Purchase/>
    </div>)
  }
}










ReactDOM.render(<App />, document.getElementById('app'));