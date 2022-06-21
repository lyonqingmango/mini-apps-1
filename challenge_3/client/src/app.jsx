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
    console.log('data in F2'+data)
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
          expire:
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

class  Purchase extends React.Component{
  constructor(props){
    super(props);
    this.state ={
    name:'',
    email:'',

    };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(event){
    event.preventDefault();
    this.props.handleComfirm();

  }

  render() {
    return(
    <div>
      <h2> Confirm Your Information:</h2>
      <h3>account infomation: </h3>
      <p> {this.props.info.name}</p>
      <p>email: {this.props.info.email}</p>
      <h3>shipping infomation: </h3>
     <p> Address: {this.props.info.address}</p>
     <p>City: {this.props.info.city}</p>
     <p>State:{this.props.info.state}</p>
     <p>Zip code: {this.props.info.zipcode}</p>
     <p>Phone number: {this.props.info.phonenumber}</p>
     <h3>billing infomation: </h3>
     <p>Credit card: {this.props.info.credit}</p>
     <p>Expire date: {this.props.info.expire}</p>
     <p>CVV: {this.props.info.cvv}</p>
     <p>Billing zip code: {this.props.info.billing}</p>
    <button type="button" onClick ={this.props.handleComfirm}>Confirm</button>
    </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      f1:false,
      f2:false,
      f3:false,
      display:false,
      info:{},
    }
    this.checkOut =this.checkOut.bind(this);
    this.handleF1 = this.handleF1.bind(this);
    this.handleF2 = this.handleF2.bind(this);
    this.handleF3 = this.handleF3.bind(this);
    this.handleComfirm =this.handleComfirm.bind(this);

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
  display(){
    axios.get('/user/form')
    .then( (response)=> {
      // handle success
      console.log("inside display response"+response.data[0].name);
      // this.setState({name:response.data[0].name})
      // this.setState({email:response.data[0].email})
      // this.setState({address:response.data[0].address})
      this.setState({info: response.data[0]})
    })
    .catch(function (error) {
      // handle error
      console.log("err inside client display "+error);
    })
  }



  handleF1(data){
    this.setState({f1:false})
    this.setState({f2:true})
    console.log('F1 data in APP:  '+data.name);
    axios.post('/user/form1', {
      name:data.name,
      email:data.email,
      password:data.password
    })
    .then((response)=> {
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

    axios.post('/user/form2', {
      address:data.address,
      city:data.city,
      state:data.state,
      zipcode:data.zipcode,
      phonenumber:data.phonenumber,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  handleF3(data){
    this.setState({f3:false})
    this.setState({display:true})
    console.log('F3 data in APP:  '+data.cvv)
    axios.post('/user/form3', {
      credit:data.credit,
      expire:data.expire,
      cvv:data.cvv,
      billing:data.billing,
    })
    .then((response)=>{
      console.log(response);
      this.display();

    })
    .catch(function (error) {
      console.log(error);
    });


  }
  handleComfirm(){
    this.setState({display:false})
    this.setState({checkout:true})
    this.setState({info:{}})

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
       {this.state.display &&<Purchase info={this.state.info} handleComfirm ={this.handleComfirm}/>}
    </div>)
  }
}










ReactDOM.render(<App />, document.getElementById('app'));