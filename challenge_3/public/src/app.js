// import React from 'react';
// import ReactDOM from 'react-dom';
class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {};
    data.email = this.state.email;
    data.name = this.state.name;
    data.password = this.state.password;
    console.log('data in F1' + data.password);
    this.props.handleF1(data);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, " email name password create "), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "name", /*#__PURE__*/React.createElement("input", {
      name: "name",
      type: "text",
      value: this.state.name,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
      name: "email",
      type: "email",
      value: this.state.email,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "password:", /*#__PURE__*/React.createElement("input", {
      name: "password",
      type: "text",
      value: this.state.password,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
  }

}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phonenumber: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {};
    data.address = this.state.address;
    data.city = this.state.city;
    data.state = this.state.state;
    data.zipcode = this.state.zipcode;
    data.phonenumber = this.state.phonenumber;
    console.log('data in F2' + data);
    this.props.handleF2(data);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, " ship to address (line 1, line 2, city, state, zip code) and phone number. create "), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "address", /*#__PURE__*/React.createElement("input", {
      name: "address",
      type: "text",
      value: this.state.address,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "city:", /*#__PURE__*/React.createElement("input", {
      name: "city",
      type: "text",
      value: this.state.city,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "state:", /*#__PURE__*/React.createElement("input", {
      name: "state",
      type: "text",
      value: this.state.state,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "zip code:", /*#__PURE__*/React.createElement("input", {
      name: "zipcode",
      type: "text",
      value: this.state.zipcode,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("label", null, "phone number format 000-000-0000:", /*#__PURE__*/React.createElement("input", {
      name: "phonenumber",
      type: "tel",
      value: this.state.phonenumber,
      onChange: this.handleInputChange,
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
      required: "required"
    })), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
  }

}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: '',
      expire: '',
      cvv: '',
      billing: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {};
    data.credit = this.state.credit;
    data.expire = this.state.expire;
    data.cvv = this.state.cvv;
    data.billing = this.state.billing;
    console.log('data in F3' + data);
    this.props.handleF3(data);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, " credit card #, expiry date, CVV, and billing zip code. create "), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "creditcard", /*#__PURE__*/React.createElement("input", {
      name: "credit",
      type: "text",
      value: this.state.credit,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "expire:", /*#__PURE__*/React.createElement("input", {
      name: "expire",
      type: "text",
      value: this.state.expire,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "CVV:", /*#__PURE__*/React.createElement("input", {
      name: "cvv",
      type: "text",
      value: this.state.cvv,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "billing zip code:", /*#__PURE__*/React.createElement("input", {
      name: "billing",
      type: "text",
      value: this.state.billing,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
  }

}

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleComfirm();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, " Confirm Your Information:"), /*#__PURE__*/React.createElement("h3", null, "account infomation: "), /*#__PURE__*/React.createElement("p", null, " ", this.props.info.name), /*#__PURE__*/React.createElement("p", null, "email: ", this.props.info.email), /*#__PURE__*/React.createElement("h3", null, "shipping infomation: "), /*#__PURE__*/React.createElement("p", null, " Address: ", this.props.info.address), /*#__PURE__*/React.createElement("p", null, "City: ", this.props.info.city), /*#__PURE__*/React.createElement("p", null, "State:", this.props.info.state), /*#__PURE__*/React.createElement("p", null, "Zip code: ", this.props.info.zipcode), /*#__PURE__*/React.createElement("p", null, "Phone number: ", this.props.info.phonenumber), /*#__PURE__*/React.createElement("h3", null, "billing infomation: "), /*#__PURE__*/React.createElement("p", null, "Credit card: ", this.props.info.credit), /*#__PURE__*/React.createElement("p", null, "Expire date: ", this.props.info.expire), /*#__PURE__*/React.createElement("p", null, "CVV: ", this.props.info.cvv), /*#__PURE__*/React.createElement("p", null, "Billing zip code: ", this.props.info.billing), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: this.props.handleComfirm
    }, "Confirm"));
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      f1: false,
      f2: false,
      f3: false,
      display: false,
      info: {}
    };
    this.checkOut = this.checkOut.bind(this);
    this.handleF1 = this.handleF1.bind(this);
    this.handleF2 = this.handleF2.bind(this);
    this.handleF3 = this.handleF3.bind(this);
    this.handleComfirm = this.handleComfirm.bind(this);
  }

  checkOut() {
    this.setState({
      checkout: false
    });
    this.setState({
      f1: true
    });
    axios.post('/user/id', {}).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  display() {
    axios.get('/user/form').then(response => {
      // handle success
      console.log("inside display response" + response.data[0].name); // this.setState({name:response.data[0].name})
      // this.setState({email:response.data[0].email})
      // this.setState({address:response.data[0].address})

      this.setState({
        info: response.data[0]
      });
    }).catch(function (error) {
      // handle error
      console.log("err inside client display " + error);
    });
  }

  handleF1(data) {
    this.setState({
      f1: false
    });
    this.setState({
      f2: true
    });
    console.log('F1 data in APP:  ' + data.name);
    axios.post('/user/form1', {
      name: data.name,
      email: data.email,
      password: data.password
    }).then(response => {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleF2(data) {
    this.setState({
      f2: false
    });
    this.setState({
      f3: true
    });
    console.log('F2 data in APP:  ' + data.address);
    axios.post('/user/form2', {
      address: data.address,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      phonenumber: data.phonenumber
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleF3(data) {
    this.setState({
      f3: false
    });
    this.setState({
      display: true
    });
    console.log('F3 data in APP:  ' + data.cvv);
    axios.post('/user/form3', {
      credit: data.credit,
      expire: data.expire,
      cvv: data.cvv,
      billing: data.billing
    }).then(response => {
      console.log(response);
      this.display();
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleComfirm() {
    this.setState({
      display: false
    });
    this.setState({
      checkout: true
    });
    this.setState({
      info: {}
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " check out Form "), this.state.checkout && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: this.checkOut
    }, "check out"), this.state.f1 && /*#__PURE__*/React.createElement(Form1, {
      handleF1: this.handleF1
    }), this.state.f2 && /*#__PURE__*/React.createElement(Form2, {
      handleF2: this.handleF2
    }), this.state.f3 && /*#__PURE__*/React.createElement(Form3, {
      handleF3: this.handleF3
    }), this.state.display && /*#__PURE__*/React.createElement(Purchase, {
      info: this.state.info,
      handleComfirm: this.handleComfirm
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtMSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRjEiLCJyZW5kZXIiLCJGb3JtMiIsImFkZHJlc3MiLCJjaXR5IiwiemlwY29kZSIsInBob25lbnVtYmVyIiwiaGFuZGxlRjIiLCJGb3JtMyIsImNyZWRpdCIsImV4cGlyZSIsImN2diIsImJpbGxpbmciLCJoYW5kbGVGMyIsIlB1cmNoYXNlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDb21maXJtIiwiaW5mbyIsIkFwcCIsImNoZWNrb3V0IiwiZjEiLCJmMiIsImYzIiwiZGlzcGxheSIsImNoZWNrT3V0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImdldCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5jbGFzcyAgRm9ybTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICBuYW1lOicnLFxuICAgICAgZW1haWw6JycsXG4gICAgICBwYXNzd29yZDonJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID10aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPXRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cbiAgfVxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgZGF0YSA9e307XG4gICAgZGF0YS5lbWFpbD0gdGhpcy5zdGF0ZS5lbWFpbDtcbiAgICBkYXRhLm5hbWUgPSB0aGlzLnN0YXRlLm5hbWU7XG4gICAgZGF0YS5wYXNzd29yZCA9dGhpcy5zdGF0ZS5wYXNzd29yZDtcbiAgICBjb25zb2xlLmxvZygnZGF0YSBpbiBGMScrZGF0YS5wYXNzd29yZClcbiAgICB0aGlzLnByb3BzLmhhbmRsZUYxKGRhdGEpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+IGVtYWlsIG5hbWUgcGFzc3dvcmQgY3JlYXRlIDwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0ID17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD0gXCJyZXF1aXJlZFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PilcbiAgfVxufVxuXG5jbGFzcyAgRm9ybTIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICBhZGRyZXNzOicnLFxuICAgICAgY2l0eTonJyxcbiAgICAgIHN0YXRlOicnLFxuICAgICAgemlwY29kZTonJyxcbiAgICAgIHBob25lbnVtYmVyOicnLFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID10aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPXRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBkYXRhID17fTtcbiAgICBkYXRhLmFkZHJlc3M9IHRoaXMuc3RhdGUuYWRkcmVzcztcbiAgICBkYXRhLmNpdHk9IHRoaXMuc3RhdGUuY2l0eTtcbiAgICBkYXRhLnN0YXRlID10aGlzLnN0YXRlLnN0YXRlO1xuICAgIGRhdGEuemlwY29kZSA9dGhpcy5zdGF0ZS56aXBjb2RlO1xuICAgIGRhdGEucGhvbmVudW1iZXIgPXRoaXMuc3RhdGUucGhvbmVudW1iZXI7XG4gICAgY29uc29sZS5sb2coJ2RhdGEgaW4gRjInK2RhdGEpXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVGMihkYXRhKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPiBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXIuIGNyZWF0ZSA8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIGNpdHk6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHN0YXRlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHppcCBjb2RlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInppcGNvZGVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwY29kZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD0gXCJyZXF1aXJlZFwiLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHBob25lIG51bWJlciBmb3JtYXQgMDAwLTAwMC0wMDAwOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInBob25lbnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVudW1iZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcGF0dGVybj1cIlswLTldezN9LVswLTldezN9LVswLTldezR9XCIgcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+KVxuICB9XG59XG5cblxuY2xhc3MgIEZvcm0zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgY3JlZGl0OicnLFxuICAgICAgZXhwaXJlOicnLFxuICAgICAgY3Z2OicnLFxuICAgICAgYmlsbGluZzonJyxcblxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID10aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPXRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBkYXRhID17fTtcbiAgICBkYXRhLmNyZWRpdD0gdGhpcy5zdGF0ZS5jcmVkaXQ7XG4gICAgZGF0YS5leHBpcmU9IHRoaXMuc3RhdGUuZXhwaXJlO1xuICAgIGRhdGEuY3Z2ID10aGlzLnN0YXRlLmN2djtcbiAgICBkYXRhLmJpbGxpbmcgPXRoaXMuc3RhdGUuYmlsbGluZztcbiAgICBjb25zb2xlLmxvZygnZGF0YSBpbiBGMycrZGF0YSk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVGMyhkYXRhKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPiBjcmVkaXQgY2FyZCAjLCBleHBpcnkgZGF0ZSwgQ1ZWLCBhbmQgYmlsbGluZyB6aXAgY29kZS4gY3JlYXRlIDwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBjcmVkaXRjYXJkXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiY3JlZGl0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNyZWRpdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD0gXCJyZXF1aXJlZFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgZXhwaXJlOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cImV4cGlyZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5leHBpcmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgQ1ZWOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdnZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgYmlsbGluZyB6aXAgY29kZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJpbGxpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+KVxuICB9XG59XG5cbmNsYXNzICBQdXJjaGFzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID17XG4gICAgbmFtZTonJyxcbiAgICBlbWFpbDonJyxcblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblxuICB9XG4gIGhhbmRsZUNsaWNrKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlQ29tZmlybSgpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8aDI+IENvbmZpcm0gWW91ciBJbmZvcm1hdGlvbjo8L2gyPlxuICAgICAgPGgzPmFjY291bnQgaW5mb21hdGlvbjogPC9oMz5cbiAgICAgIDxwPiB7dGhpcy5wcm9wcy5pbmZvLm5hbWV9PC9wPlxuICAgICAgPHA+ZW1haWw6IHt0aGlzLnByb3BzLmluZm8uZW1haWx9PC9wPlxuICAgICAgPGgzPnNoaXBwaW5nIGluZm9tYXRpb246IDwvaDM+XG4gICAgIDxwPiBBZGRyZXNzOiB7dGhpcy5wcm9wcy5pbmZvLmFkZHJlc3N9PC9wPlxuICAgICA8cD5DaXR5OiB7dGhpcy5wcm9wcy5pbmZvLmNpdHl9PC9wPlxuICAgICA8cD5TdGF0ZTp7dGhpcy5wcm9wcy5pbmZvLnN0YXRlfTwvcD5cbiAgICAgPHA+WmlwIGNvZGU6IHt0aGlzLnByb3BzLmluZm8uemlwY29kZX08L3A+XG4gICAgIDxwPlBob25lIG51bWJlcjoge3RoaXMucHJvcHMuaW5mby5waG9uZW51bWJlcn08L3A+XG4gICAgIDxoMz5iaWxsaW5nIGluZm9tYXRpb246IDwvaDM+XG4gICAgIDxwPkNyZWRpdCBjYXJkOiB7dGhpcy5wcm9wcy5pbmZvLmNyZWRpdH08L3A+XG4gICAgIDxwPkV4cGlyZSBkYXRlOiB7dGhpcy5wcm9wcy5pbmZvLmV4cGlyZX08L3A+XG4gICAgIDxwPkNWVjoge3RoaXMucHJvcHMuaW5mby5jdnZ9PC9wPlxuICAgICA8cD5CaWxsaW5nIHppcCBjb2RlOiB7dGhpcy5wcm9wcy5pbmZvLmJpbGxpbmd9PC9wPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2sgPXt0aGlzLnByb3BzLmhhbmRsZUNvbWZpcm19PkNvbmZpcm08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrb3V0OiB0cnVlLFxuICAgICAgZjE6ZmFsc2UsXG4gICAgICBmMjpmYWxzZSxcbiAgICAgIGYzOmZhbHNlLFxuICAgICAgZGlzcGxheTpmYWxzZSxcbiAgICAgIGluZm86e30sXG4gICAgfVxuICAgIHRoaXMuY2hlY2tPdXQgPXRoaXMuY2hlY2tPdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUYxID0gdGhpcy5oYW5kbGVGMS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRjIgPSB0aGlzLmhhbmRsZUYyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGMyA9IHRoaXMuaGFuZGxlRjMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNvbWZpcm0gPXRoaXMuaGFuZGxlQ29tZmlybS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjaGVja091dCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNrb3V0OmZhbHNlfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZjE6dHJ1ZX0pXG4gICAgYXhpb3MucG9zdCgnL3VzZXIvaWQnLCB7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcblxuICB9XG4gIGRpc3BsYXkoKXtcbiAgICBheGlvcy5nZXQoJy91c2VyL2Zvcm0nKVxuICAgIC50aGVuKCAocmVzcG9uc2UpPT4ge1xuICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGRpc3BsYXkgcmVzcG9uc2VcIityZXNwb25zZS5kYXRhWzBdLm5hbWUpO1xuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7bmFtZTpyZXNwb25zZS5kYXRhWzBdLm5hbWV9KVxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7ZW1haWw6cmVzcG9uc2UuZGF0YVswXS5lbWFpbH0pXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHthZGRyZXNzOnJlc3BvbnNlLmRhdGFbMF0uYWRkcmVzc30pXG4gICAgICB0aGlzLnNldFN0YXRlKHtpbmZvOiByZXNwb25zZS5kYXRhWzBdfSlcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgY29uc29sZS5sb2coXCJlcnIgaW5zaWRlIGNsaWVudCBkaXNwbGF5IFwiK2Vycm9yKTtcbiAgICB9KVxuICB9XG5cblxuXG4gIGhhbmRsZUYxKGRhdGEpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2YxOmZhbHNlfSlcbiAgICB0aGlzLnNldFN0YXRlKHtmMjp0cnVlfSlcbiAgICBjb25zb2xlLmxvZygnRjEgZGF0YSBpbiBBUFA6ICAnK2RhdGEubmFtZSk7XG4gICAgYXhpb3MucG9zdCgnL3VzZXIvZm9ybTEnLCB7XG4gICAgICBuYW1lOmRhdGEubmFtZSxcbiAgICAgIGVtYWlsOmRhdGEuZW1haWwsXG4gICAgICBwYXNzd29yZDpkYXRhLnBhc3N3b3JkXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG5cbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcblxuICB9XG4gIGhhbmRsZUYyKGRhdGEpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2YyOmZhbHNlfSlcbiAgICB0aGlzLnNldFN0YXRlKHtmMzp0cnVlfSlcbiAgICBjb25zb2xlLmxvZygnRjIgZGF0YSBpbiBBUFA6ICAnK2RhdGEuYWRkcmVzcylcblxuICAgIGF4aW9zLnBvc3QoJy91c2VyL2Zvcm0yJywge1xuICAgICAgYWRkcmVzczpkYXRhLmFkZHJlc3MsXG4gICAgICBjaXR5OmRhdGEuY2l0eSxcbiAgICAgIHN0YXRlOmRhdGEuc3RhdGUsXG4gICAgICB6aXBjb2RlOmRhdGEuemlwY29kZSxcbiAgICAgIHBob25lbnVtYmVyOmRhdGEucGhvbmVudW1iZXIsXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcblxuICB9XG4gIGhhbmRsZUYzKGRhdGEpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2YzOmZhbHNlfSlcbiAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OnRydWV9KVxuICAgIGNvbnNvbGUubG9nKCdGMyBkYXRhIGluIEFQUDogICcrZGF0YS5jdnYpXG4gICAgYXhpb3MucG9zdCgnL3VzZXIvZm9ybTMnLCB7XG4gICAgICBjcmVkaXQ6ZGF0YS5jcmVkaXQsXG4gICAgICBleHBpcmU6ZGF0YS5leHBpcmUsXG4gICAgICBjdnY6ZGF0YS5jdnYsXG4gICAgICBiaWxsaW5nOmRhdGEuYmlsbGluZyxcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG5cblxuICB9XG4gIGhhbmRsZUNvbWZpcm0oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OmZhbHNlfSlcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja291dDp0cnVlfSlcbiAgICB0aGlzLnNldFN0YXRlKHtpbmZvOnt9fSlcblxuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gY2hlY2sgb3V0IEZvcm0gPC9oMT5cbiAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tvdXQgJiYgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljayA9e3RoaXMuY2hlY2tPdXR9ID5cbiAgICAgICAgICBjaGVjayBvdXRcbiAgICAgICAgPC9idXR0b24+fVxuICAgICAge3RoaXMuc3RhdGUuZjEgJiYgPEZvcm0xIGhhbmRsZUYxID17dGhpcy5oYW5kbGVGMX0gLz59XG4gICAgICB7dGhpcy5zdGF0ZS5mMiAmJiA8Rm9ybTIgaGFuZGxlRjIgPXt0aGlzLmhhbmRsZUYyfSAvPn1cbiAgICAgIHt0aGlzLnN0YXRlLmYzICYmIDxGb3JtMyBoYW5kbGVGMyA9e3RoaXMuaGFuZGxlRjN9IC8+fVxuICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgJiY8UHVyY2hhc2UgaW5mbz17dGhpcy5zdGF0ZS5pbmZvfSBoYW5kbGVDb21maXJtID17dGhpcy5oYW5kbGVDb21maXJtfS8+fVxuICAgIDwvZGl2PilcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSxNQUFPQSxLQUFQLFNBQXFCQyxLQUFLLENBQUNDLFNBQTNCLENBQXFDO0VBQ25DQyxXQUFXLENBQUNDLEtBQUQsRUFBUTtJQUNqQixNQUFNQSxLQUFOO0lBQ0EsS0FBS0MsS0FBTCxHQUFZO01BQ1ZDLElBQUksRUFBQyxFQURLO01BRVZDLEtBQUssRUFBQyxFQUZJO01BR1ZDLFFBQVEsRUFBQztJQUhDLENBQVo7SUFNQSxLQUFLQyxpQkFBTCxHQUF3QixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBeEI7SUFDQSxLQUFLQyxZQUFMLEdBQW1CLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQW5CO0VBRUQ7O0VBQ0RELGlCQUFpQixDQUFDRyxLQUFELEVBQVE7SUFDdkIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0lBQ0EsTUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQXJCO0lBQ0EsTUFBTVIsSUFBSSxHQUFHTyxNQUFNLENBQUNQLElBQXBCO0lBRUEsS0FBS1MsUUFBTCxDQUFjO01BQ1osQ0FBQ1QsSUFBRCxHQUFRUTtJQURJLENBQWQ7RUFHRDs7RUFFREgsWUFBWSxDQUFDQyxLQUFELEVBQU87SUFDakJBLEtBQUssQ0FBQ0ksY0FBTjtJQUNBLElBQUlDLElBQUksR0FBRSxFQUFWO0lBQ0FBLElBQUksQ0FBQ1YsS0FBTCxHQUFZLEtBQUtGLEtBQUwsQ0FBV0UsS0FBdkI7SUFDQVUsSUFBSSxDQUFDWCxJQUFMLEdBQVksS0FBS0QsS0FBTCxDQUFXQyxJQUF2QjtJQUNBVyxJQUFJLENBQUNULFFBQUwsR0FBZSxLQUFLSCxLQUFMLENBQVdHLFFBQTFCO0lBQ0FVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWFGLElBQUksQ0FBQ1QsUUFBOUI7SUFDQSxLQUFLSixLQUFMLENBQVdnQixRQUFYLENBQW9CSCxJQUFwQjtFQUNEOztFQUVESSxNQUFNLEdBQUk7SUFDUixvQkFDRSw4Q0FDRSwrREFERixlQUVFO01BQU0sUUFBUSxFQUFHLEtBQUtWO0lBQXRCLGdCQUNBLHdEQUVFO01BQ0UsSUFBSSxFQUFDLE1BRFA7TUFFRSxJQUFJLEVBQUMsTUFGUDtNQUdFLEtBQUssRUFBRSxLQUFLTixLQUFMLENBQVdDLElBSHBCO01BSUUsUUFBUSxFQUFFLEtBQUtHLGlCQUpqQjtNQUlvQyxRQUFRLEVBQUU7SUFKOUMsRUFGRixDQURBLGVBU0EsK0JBVEEsZUFVQSwwREFFRTtNQUNFLElBQUksRUFBQyxPQURQO01BRUUsSUFBSSxFQUFDLE9BRlA7TUFHRSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXRSxLQUhwQjtNQUlFLFFBQVEsRUFBRSxLQUFLRSxpQkFKakI7TUFJb0MsUUFBUSxFQUFFO0lBSjlDLEVBRkYsQ0FWQSxlQWtCQSwrQkFsQkEsZUFtQkEsNkRBRUU7TUFDRSxJQUFJLEVBQUMsVUFEUDtNQUVFLElBQUksRUFBQyxNQUZQO01BR0UsS0FBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0csUUFIcEI7TUFJRSxRQUFRLEVBQUUsS0FBS0MsaUJBSmpCO01BSW9DLFFBQVEsRUFBRTtJQUo5QyxFQUZGLENBbkJBLGVBMkJBO01BQU8sSUFBSSxFQUFDLFFBQVo7TUFBcUIsS0FBSyxFQUFDO0lBQTNCLEVBM0JBLENBRkYsQ0FERjtFQWlDRDs7QUFuRWtDOztBQXNFckMsTUFBT2EsS0FBUCxTQUFxQnJCLEtBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7RUFDbkNDLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0lBQ2pCLE1BQU1BLEtBQU47SUFDQSxLQUFLQyxLQUFMLEdBQVk7TUFDVmtCLE9BQU8sRUFBQyxFQURFO01BRVZDLElBQUksRUFBQyxFQUZLO01BR1ZuQixLQUFLLEVBQUMsRUFISTtNQUlWb0IsT0FBTyxFQUFDLEVBSkU7TUFLVkMsV0FBVyxFQUFDO0lBTEYsQ0FBWjtJQVFBLEtBQUtqQixpQkFBTCxHQUF3QixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBeEI7SUFDQSxLQUFLQyxZQUFMLEdBQW1CLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQW5CO0VBRUQ7O0VBRURELGlCQUFpQixDQUFDRyxLQUFELEVBQVE7SUFDdkIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0lBQ0EsTUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQXJCO0lBQ0EsTUFBTVIsSUFBSSxHQUFHTyxNQUFNLENBQUNQLElBQXBCO0lBRUEsS0FBS1MsUUFBTCxDQUFjO01BQ1osQ0FBQ1QsSUFBRCxHQUFRUTtJQURJLENBQWQ7RUFHRDs7RUFFREgsWUFBWSxDQUFDQyxLQUFELEVBQU87SUFDakJBLEtBQUssQ0FBQ0ksY0FBTjtJQUNBLElBQUlDLElBQUksR0FBRSxFQUFWO0lBQ0FBLElBQUksQ0FBQ00sT0FBTCxHQUFjLEtBQUtsQixLQUFMLENBQVdrQixPQUF6QjtJQUNBTixJQUFJLENBQUNPLElBQUwsR0FBVyxLQUFLbkIsS0FBTCxDQUFXbUIsSUFBdEI7SUFDQVAsSUFBSSxDQUFDWixLQUFMLEdBQVksS0FBS0EsS0FBTCxDQUFXQSxLQUF2QjtJQUNBWSxJQUFJLENBQUNRLE9BQUwsR0FBYyxLQUFLcEIsS0FBTCxDQUFXb0IsT0FBekI7SUFDQVIsSUFBSSxDQUFDUyxXQUFMLEdBQWtCLEtBQUtyQixLQUFMLENBQVdxQixXQUE3QjtJQUNBUixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFhRixJQUF6QjtJQUNBLEtBQUtiLEtBQUwsQ0FBV3VCLFFBQVgsQ0FBb0JWLElBQXBCO0VBQ0Q7O0VBRURJLE1BQU0sR0FBSTtJQUNSLG9CQUNFLDhDQUNFLHFIQURGLGVBRUU7TUFBTSxRQUFRLEVBQUcsS0FBS1Y7SUFBdEIsZ0JBQ0EsMkRBRUU7TUFDRSxJQUFJLEVBQUMsU0FEUDtNQUVFLElBQUksRUFBQyxNQUZQO01BR0UsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV2tCLE9BSHBCO01BSUUsUUFBUSxFQUFFLEtBQUtkLGlCQUpqQjtNQUlvQyxRQUFRLEVBQUU7SUFKOUMsRUFGRixDQURBLGVBU0EsK0JBVEEsZUFVQSx5REFFRTtNQUNFLElBQUksRUFBQyxNQURQO01BRUUsSUFBSSxFQUFDLE1BRlA7TUFHRSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXbUIsSUFIcEI7TUFJRSxRQUFRLEVBQUUsS0FBS2YsaUJBSmpCO01BSW9DLFFBQVEsRUFBRTtJQUo5QyxFQUZGLENBVkEsZUFrQkEsK0JBbEJBLGVBbUJBLDBEQUVFO01BQ0UsSUFBSSxFQUFDLE9BRFA7TUFFRSxJQUFJLEVBQUMsTUFGUDtNQUdFLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVdBLEtBSHBCO01BSUUsUUFBUSxFQUFFLEtBQUtJLGlCQUpqQjtNQUlvQyxRQUFRLEVBQUU7SUFKOUMsRUFGRixDQW5CQSxlQTJCQSwrQkEzQkEsZUE0QkEsNkRBRUU7TUFDRSxJQUFJLEVBQUMsU0FEUDtNQUVFLElBQUksRUFBQyxNQUZQO01BR0UsS0FBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV29CLE9BSHBCO01BSUUsUUFBUSxFQUFFLEtBQUtoQixpQkFKakI7TUFJb0MsUUFBUSxFQUFFO0lBSjlDLEVBRkYsQ0E1QkEsZUFvQ0EscUZBRUU7TUFDRSxJQUFJLEVBQUMsYUFEUDtNQUVFLElBQUksRUFBQyxLQUZQO01BR0UsS0FBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV3FCLFdBSHBCO01BSUUsUUFBUSxFQUFFLEtBQUtqQixpQkFKakI7TUFJb0MsT0FBTyxFQUFDLDRCQUo1QztNQUl5RSxRQUFRLEVBQUU7SUFKbkYsRUFGRixDQXBDQSxlQTRDQTtNQUFPLElBQUksRUFBQyxRQUFaO01BQXFCLEtBQUssRUFBQztJQUEzQixFQTVDQSxDQUZGLENBREY7RUFrREQ7O0FBekZrQzs7QUE2RnJDLE1BQU9tQixLQUFQLFNBQXFCM0IsS0FBSyxDQUFDQyxTQUEzQixDQUFxQztFQUNuQ0MsV0FBVyxDQUFDQyxLQUFELEVBQVE7SUFDakIsTUFBTUEsS0FBTjtJQUNBLEtBQUtDLEtBQUwsR0FBWTtNQUNWd0IsTUFBTSxFQUFDLEVBREc7TUFFVkMsTUFBTSxFQUFDLEVBRkc7TUFHVkMsR0FBRyxFQUFDLEVBSE07TUFJVkMsT0FBTyxFQUFDO0lBSkUsQ0FBWjtJQVFBLEtBQUt2QixpQkFBTCxHQUF3QixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBeEI7SUFDQSxLQUFLQyxZQUFMLEdBQW1CLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQW5CO0VBRUQ7O0VBRURELGlCQUFpQixDQUFDRyxLQUFELEVBQVE7SUFDdkIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0lBQ0EsTUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQXJCO0lBQ0EsTUFBTVIsSUFBSSxHQUFHTyxNQUFNLENBQUNQLElBQXBCO0lBRUEsS0FBS1MsUUFBTCxDQUFjO01BQ1osQ0FBQ1QsSUFBRCxHQUFRUTtJQURJLENBQWQ7RUFHRDs7RUFFREgsWUFBWSxDQUFDQyxLQUFELEVBQU87SUFDakJBLEtBQUssQ0FBQ0ksY0FBTjtJQUNBLElBQUlDLElBQUksR0FBRSxFQUFWO0lBQ0FBLElBQUksQ0FBQ1ksTUFBTCxHQUFhLEtBQUt4QixLQUFMLENBQVd3QixNQUF4QjtJQUNBWixJQUFJLENBQUNhLE1BQUwsR0FBYSxLQUFLekIsS0FBTCxDQUFXeUIsTUFBeEI7SUFDQWIsSUFBSSxDQUFDYyxHQUFMLEdBQVUsS0FBSzFCLEtBQUwsQ0FBVzBCLEdBQXJCO0lBQ0FkLElBQUksQ0FBQ2UsT0FBTCxHQUFjLEtBQUszQixLQUFMLENBQVcyQixPQUF6QjtJQUNBZCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFhRixJQUF6QjtJQUNBLEtBQUtiLEtBQUwsQ0FBVzZCLFFBQVgsQ0FBb0JoQixJQUFwQjtFQUNEOztFQUdESSxNQUFNLEdBQUk7SUFDUixvQkFDRSw4Q0FDRSxrR0FERixlQUVFO01BQU0sUUFBUSxFQUFFLEtBQUtWO0lBQXJCLGdCQUNBLDhEQUVFO01BQ0UsSUFBSSxFQUFDLFFBRFA7TUFFRSxJQUFJLEVBQUMsTUFGUDtNQUdFLEtBQUssRUFBRSxLQUFLTixLQUFMLENBQVd3QixNQUhwQjtNQUlFLFFBQVEsRUFBRSxLQUFLcEIsaUJBSmpCO01BSW9DLFFBQVEsRUFBRTtJQUo5QyxFQUZGLENBREEsZUFTQSwrQkFUQSxlQVVBLDJEQUVFO01BQ0UsSUFBSSxFQUFDLFFBRFA7TUFFRSxJQUFJLEVBQUMsTUFGUDtNQUdFLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVd5QixNQUhwQjtNQUlFLFFBQVEsRUFBRSxLQUFLckIsaUJBSmpCO01BSW9DLFFBQVEsRUFBRTtJQUo5QyxFQUZGLENBVkEsZUFrQkEsK0JBbEJBLGVBbUJBLHdEQUVFO01BQ0UsSUFBSSxFQUFDLEtBRFA7TUFFRSxJQUFJLEVBQUMsTUFGUDtNQUdFLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVcwQixHQUhwQjtNQUlFLFFBQVEsRUFBRSxLQUFLdEIsaUJBSmpCO01BSW9DLFFBQVEsRUFBRTtJQUo5QyxFQUZGLENBbkJBLGVBMkJBLCtCQTNCQSxlQTRCQSxxRUFFRTtNQUNFLElBQUksRUFBQyxTQURQO01BRUUsSUFBSSxFQUFDLE1BRlA7TUFHRSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXMkIsT0FIcEI7TUFJRSxRQUFRLEVBQUUsS0FBS3ZCLGlCQUpqQjtNQUlvQyxRQUFRLEVBQUU7SUFKOUMsRUFGRixDQTVCQSxlQW9DQTtNQUFPLElBQUksRUFBQyxRQUFaO01BQXFCLEtBQUssRUFBQztJQUEzQixFQXBDQSxDQUZGLENBREY7RUEwQ0Q7O0FBakZrQzs7QUFvRnJDLE1BQU95QixRQUFQLFNBQXdCakMsS0FBSyxDQUFDQyxTQUE5QixDQUF1QztFQUNyQ0MsV0FBVyxDQUFDQyxLQUFELEVBQU87SUFDaEIsTUFBTUEsS0FBTjtJQUNBLEtBQUtDLEtBQUwsR0FBWTtNQUNaQyxJQUFJLEVBQUMsRUFETztNQUVaQyxLQUFLLEVBQUM7SUFGTSxDQUFaO0lBS0EsS0FBSzRCLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnpCLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0VBRUQ7O0VBQ0R5QixXQUFXLENBQUN2QixLQUFELEVBQU87SUFDaEJBLEtBQUssQ0FBQ0ksY0FBTjtJQUNBLEtBQUtaLEtBQUwsQ0FBV2dDLGFBQVg7RUFFRDs7RUFFRGYsTUFBTSxHQUFHO0lBQ1Asb0JBQ0EsOENBQ0UsNkRBREYsZUFFRSx1REFGRixlQUdFLG9DQUFLLEtBQUtqQixLQUFMLENBQVdpQyxJQUFYLENBQWdCL0IsSUFBckIsQ0FIRixlQUlFLDBDQUFXLEtBQUtGLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0I5QixLQUEzQixDQUpGLGVBS0Usd0RBTEYsZUFNQyw2Q0FBYyxLQUFLSCxLQUFMLENBQVdpQyxJQUFYLENBQWdCZCxPQUE5QixDQU5ELGVBT0MseUNBQVUsS0FBS25CLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0JiLElBQTFCLENBUEQsZUFRQyx5Q0FBVSxLQUFLcEIsS0FBTCxDQUFXaUMsSUFBWCxDQUFnQmhDLEtBQTFCLENBUkQsZUFTQyw2Q0FBYyxLQUFLRCxLQUFMLENBQVdpQyxJQUFYLENBQWdCWixPQUE5QixDQVRELGVBVUMsaURBQWtCLEtBQUtyQixLQUFMLENBQVdpQyxJQUFYLENBQWdCWCxXQUFsQyxDQVZELGVBV0MsdURBWEQsZUFZQyxnREFBaUIsS0FBS3RCLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0JSLE1BQWpDLENBWkQsZUFhQyxnREFBaUIsS0FBS3pCLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0JQLE1BQWpDLENBYkQsZUFjQyx3Q0FBUyxLQUFLMUIsS0FBTCxDQUFXaUMsSUFBWCxDQUFnQk4sR0FBekIsQ0FkRCxlQWVDLHFEQUFzQixLQUFLM0IsS0FBTCxDQUFXaUMsSUFBWCxDQUFnQkwsT0FBdEMsQ0FmRCxlQWdCQTtNQUFRLElBQUksRUFBQyxRQUFiO01BQXNCLE9BQU8sRUFBRyxLQUFLNUIsS0FBTCxDQUFXZ0M7SUFBM0MsYUFoQkEsQ0FEQTtFQW9CRDs7QUF0Q29DOztBQXlDdkMsTUFBTUUsR0FBTixTQUFrQnJDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7RUFDaENDLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0lBQ2pCLE1BQU1BLEtBQU47SUFDQSxLQUFLQyxLQUFMLEdBQWE7TUFDWGtDLFFBQVEsRUFBRSxJQURDO01BRVhDLEVBQUUsRUFBQyxLQUZRO01BR1hDLEVBQUUsRUFBQyxLQUhRO01BSVhDLEVBQUUsRUFBQyxLQUpRO01BS1hDLE9BQU8sRUFBQyxLQUxHO01BTVhOLElBQUksRUFBQztJQU5NLENBQWI7SUFRQSxLQUFLTyxRQUFMLEdBQWUsS0FBS0EsUUFBTCxDQUFjbEMsSUFBZCxDQUFtQixJQUFuQixDQUFmO0lBQ0EsS0FBS1UsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNWLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7SUFDQSxLQUFLaUIsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNqQixJQUFkLENBQW1CLElBQW5CLENBQWhCO0lBQ0EsS0FBS3VCLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjdkIsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtJQUNBLEtBQUswQixhQUFMLEdBQW9CLEtBQUtBLGFBQUwsQ0FBbUIxQixJQUFuQixDQUF3QixJQUF4QixDQUFwQjtFQUVEOztFQUVEa0MsUUFBUSxHQUFFO0lBQ1IsS0FBSzdCLFFBQUwsQ0FBYztNQUFDd0IsUUFBUSxFQUFDO0lBQVYsQ0FBZDtJQUNBLEtBQUt4QixRQUFMLENBQWM7TUFBQ3lCLEVBQUUsRUFBQztJQUFKLENBQWQ7SUFDQUssS0FBSyxDQUFDQyxJQUFOLENBQVcsVUFBWCxFQUF1QixFQUF2QixFQUVDQyxJQUZELENBRU0sVUFBVUMsUUFBVixFQUFvQjtNQUN4QjlCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNkIsUUFBWjtJQUNELENBSkQsRUFLQ0MsS0FMRCxDQUtPLFVBQVVDLEtBQVYsRUFBaUI7TUFDdEJoQyxPQUFPLENBQUNDLEdBQVIsQ0FBWStCLEtBQVo7SUFDRCxDQVBEO0VBU0Q7O0VBQ0RQLE9BQU8sR0FBRTtJQUNQRSxLQUFLLENBQUNNLEdBQU4sQ0FBVSxZQUFWLEVBQ0NKLElBREQsQ0FDUUMsUUFBRCxJQUFhO01BQ2xCO01BQ0E5QixPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBMEI2QixRQUFRLENBQUMvQixJQUFULENBQWMsQ0FBZCxFQUFpQlgsSUFBdkQsRUFGa0IsQ0FHbEI7TUFDQTtNQUNBOztNQUNBLEtBQUtTLFFBQUwsQ0FBYztRQUFDc0IsSUFBSSxFQUFFVyxRQUFRLENBQUMvQixJQUFULENBQWMsQ0FBZDtNQUFQLENBQWQ7SUFDRCxDQVJELEVBU0NnQyxLQVRELENBU08sVUFBVUMsS0FBVixFQUFpQjtNQUN0QjtNQUNBaEMsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQTZCK0IsS0FBekM7SUFDRCxDQVpEO0VBYUQ7O0VBSUQ5QixRQUFRLENBQUNILElBQUQsRUFBTTtJQUNaLEtBQUtGLFFBQUwsQ0FBYztNQUFDeUIsRUFBRSxFQUFDO0lBQUosQ0FBZDtJQUNBLEtBQUt6QixRQUFMLENBQWM7TUFBQzBCLEVBQUUsRUFBQztJQUFKLENBQWQ7SUFDQXZCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFvQkYsSUFBSSxDQUFDWCxJQUFyQztJQUNBdUMsS0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxFQUEwQjtNQUN4QnhDLElBQUksRUFBQ1csSUFBSSxDQUFDWCxJQURjO01BRXhCQyxLQUFLLEVBQUNVLElBQUksQ0FBQ1YsS0FGYTtNQUd4QkMsUUFBUSxFQUFDUyxJQUFJLENBQUNUO0lBSFUsQ0FBMUIsRUFLQ3VDLElBTEQsQ0FLT0MsUUFBRCxJQUFhO01BQ2pCOUIsT0FBTyxDQUFDQyxHQUFSLENBQVk2QixRQUFaO0lBR0QsQ0FURCxFQVVDQyxLQVZELENBVU8sVUFBVUMsS0FBVixFQUFpQjtNQUN0QmhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0IsS0FBWjtJQUNELENBWkQ7RUFjRDs7RUFDRHZCLFFBQVEsQ0FBQ1YsSUFBRCxFQUFNO0lBQ1osS0FBS0YsUUFBTCxDQUFjO01BQUMwQixFQUFFLEVBQUM7SUFBSixDQUFkO0lBQ0EsS0FBSzFCLFFBQUwsQ0FBYztNQUFDMkIsRUFBRSxFQUFDO0lBQUosQ0FBZDtJQUNBeEIsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQW9CRixJQUFJLENBQUNNLE9BQXJDO0lBRUFzQixLQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLEVBQTBCO01BQ3hCdkIsT0FBTyxFQUFDTixJQUFJLENBQUNNLE9BRFc7TUFFeEJDLElBQUksRUFBQ1AsSUFBSSxDQUFDTyxJQUZjO01BR3hCbkIsS0FBSyxFQUFDWSxJQUFJLENBQUNaLEtBSGE7TUFJeEJvQixPQUFPLEVBQUNSLElBQUksQ0FBQ1EsT0FKVztNQUt4QkMsV0FBVyxFQUFDVCxJQUFJLENBQUNTO0lBTE8sQ0FBMUIsRUFPQ3FCLElBUEQsQ0FPTSxVQUFVQyxRQUFWLEVBQW9CO01BQ3hCOUIsT0FBTyxDQUFDQyxHQUFSLENBQVk2QixRQUFaO0lBQ0QsQ0FURCxFQVVDQyxLQVZELENBVU8sVUFBVUMsS0FBVixFQUFpQjtNQUN0QmhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0IsS0FBWjtJQUNELENBWkQ7RUFjRDs7RUFDRGpCLFFBQVEsQ0FBQ2hCLElBQUQsRUFBTTtJQUNaLEtBQUtGLFFBQUwsQ0FBYztNQUFDMkIsRUFBRSxFQUFDO0lBQUosQ0FBZDtJQUNBLEtBQUszQixRQUFMLENBQWM7TUFBQzRCLE9BQU8sRUFBQztJQUFULENBQWQ7SUFDQXpCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFvQkYsSUFBSSxDQUFDYyxHQUFyQztJQUNBYyxLQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLEVBQTBCO01BQ3hCakIsTUFBTSxFQUFDWixJQUFJLENBQUNZLE1BRFk7TUFFeEJDLE1BQU0sRUFBQ2IsSUFBSSxDQUFDYSxNQUZZO01BR3hCQyxHQUFHLEVBQUNkLElBQUksQ0FBQ2MsR0FIZTtNQUl4QkMsT0FBTyxFQUFDZixJQUFJLENBQUNlO0lBSlcsQ0FBMUIsRUFNQ2UsSUFORCxDQU1PQyxRQUFELElBQVk7TUFDaEI5QixPQUFPLENBQUNDLEdBQVIsQ0FBWTZCLFFBQVo7TUFDQSxLQUFLTCxPQUFMO0lBRUQsQ0FWRCxFQVdDTSxLQVhELENBV08sVUFBVUMsS0FBVixFQUFpQjtNQUN0QmhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0IsS0FBWjtJQUNELENBYkQ7RUFnQkQ7O0VBQ0RkLGFBQWEsR0FBRTtJQUNiLEtBQUtyQixRQUFMLENBQWM7TUFBQzRCLE9BQU8sRUFBQztJQUFULENBQWQ7SUFDQSxLQUFLNUIsUUFBTCxDQUFjO01BQUN3QixRQUFRLEVBQUM7SUFBVixDQUFkO0lBQ0EsS0FBS3hCLFFBQUwsQ0FBYztNQUFDc0IsSUFBSSxFQUFDO0lBQU4sQ0FBZDtFQUVEOztFQUdEaEIsTUFBTSxHQUFJO0lBQ1Isb0JBQ0EsOENBQ0UsbURBREYsRUFFSyxLQUFLaEIsS0FBTCxDQUFXa0MsUUFBWCxpQkFBdUI7TUFBUSxJQUFJLEVBQUMsUUFBYjtNQUFzQixPQUFPLEVBQUcsS0FBS0s7SUFBckMsZUFGNUIsRUFLRyxLQUFLdkMsS0FBTCxDQUFXbUMsRUFBWCxpQkFBaUIsb0JBQUMsS0FBRDtNQUFPLFFBQVEsRUFBRyxLQUFLcEI7SUFBdkIsRUFMcEIsRUFNRyxLQUFLZixLQUFMLENBQVdvQyxFQUFYLGlCQUFpQixvQkFBQyxLQUFEO01BQU8sUUFBUSxFQUFHLEtBQUtkO0lBQXZCLEVBTnBCLEVBT0csS0FBS3RCLEtBQUwsQ0FBV3FDLEVBQVgsaUJBQWlCLG9CQUFDLEtBQUQ7TUFBTyxRQUFRLEVBQUcsS0FBS1Q7SUFBdkIsRUFQcEIsRUFRSSxLQUFLNUIsS0FBTCxDQUFXc0MsT0FBWCxpQkFBcUIsb0JBQUMsUUFBRDtNQUFVLElBQUksRUFBRSxLQUFLdEMsS0FBTCxDQUFXZ0MsSUFBM0I7TUFBaUMsYUFBYSxFQUFHLEtBQUtEO0lBQXRELEVBUnpCLENBREE7RUFXRDs7QUFsSStCOztBQThJbENnQixRQUFRLENBQUMvQixNQUFULGVBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJnQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIifQ==