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
    this.handleSubmit =this.handleSubmit.bind(this);

  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    var data ={};
    data.email= this.state.email;
    data.name = this.state.name;
    data.password =this.state.password;
    console.log('data in F1'+data.password)
    this.props.handleF1(data)
  }

  render () {
    return (
      <div>
        <h3> email name password create </h3>
        <form onSubmit ={this.handleSubmit}>
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
    this.handleSubmit =this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    var data ={};
    data.address= this.state.address;
    data.city= this.state.city;
    data.state =this.state.state;
    data.zipcode =this.state.zipcode;
    data.phonenumber =this.state.phonenumber;
    console.log('data in F1'+data)
    this.props.handleF2(data)
  }

  render () {
    return (
      <div>
        <h3> ship to address (line 1, line 2, city, state, zip code) and phone number. create </h3>
        <form onSubmit ={this.handleSubmit}>
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
    this.handleSubmit =this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    var data ={};
    data.credit= this.state.credit;
    data.expire= this.state.expire;
    data.cvv =this.state.cvv;
    data.billing =this.state.billing;
    console.log('data in F3'+data);
    this.props.handleF3(data);
  }


  render () {
    return (
      <div>
        <h3> credit card #, expiry date, CVV, and billing zip code. create </h3>
        <form onSubmit={this.handleSubmit}>
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
    helllo world
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
      form1Data:{},
      display:false,

    }
    this.checkOut =this.checkOut.bind(this);
    this.handleF1 = this.handleF1.bind(this);
    this.handleF2 = this.handleF2.bind(this);
    this.handleF3 = this.handleF3.bind(this);

  }

  checkOut(){
    this.setState({checkout:false});
    this.setState({f1:true})
    axios.post('/user/id', {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  handleF1(data){
    this.setState({f1:false})
    this.setState({f2:true})
    console.log('F1 data in APP:  '+data.name);
    axios.post('/user/id/form1', {
      name:data.name,
      email:data.email,
      password:data.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  handleF2(data){
    this.setState({f2:false})
    this.setState({f3:true})
    console.log('F2 data in APP:  '+data.address)

  }
  handleF3(data){
    this.setState({f3:false})
    this.setState({display:true})
    console.log('F3 data in APP:  '+data.cvv)


  }


  render () {
    return (
    <div>
      <h1> check out Form </h1>
        {this.state.checkout && <button type="button" onClick ={this.checkOut} >
          check out
        </button>}
      {this.state.f1 && <Form1 handleF1 ={this.handleF1} />}
      {this.state.f2 && <Form2 handleF2 ={this.handleF2} />}
      {this.state.f3 && <Form3 handleF3 ={this.handleF3} />}
      {this.state.display && <Purchase/>}
    </div>)
  }
}










ReactDOM.render(<App />, document.getElementById('app'));