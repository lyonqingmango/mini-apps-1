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
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, " email name password create "), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "name", /*#__PURE__*/React.createElement("input", {
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
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, " ship to address (line 1, line 2, city, state, zip code) and phone number. create "), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "address", /*#__PURE__*/React.createElement("input", {
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
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, " credit card #, expiry date, CVV, and billing zip code. create "), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "creditcard", /*#__PURE__*/React.createElement("input", {
      name: "credit",
      type: "text",
      value: this.state.credit,
      onChange: this.handleInputChange,
      required: "required"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "city:", /*#__PURE__*/React.createElement("input", {
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

function Purchase(props) {
  return /*#__PURE__*/React.createElement("div", null, "helllo");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      f1: false,
      f2: false,
      f3: false
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " check out Form "), this.state.checkout && /*#__PURE__*/React.createElement("button", {
      type: "button"
    }, "check out"), this.state.f1 && /*#__PURE__*/React.createElement(Form1, null), this.state.f2 && /*#__PURE__*/React.createElement(Form1, null), this.state.f2 && /*#__PURE__*/React.createElement(Form1, null), /*#__PURE__*/React.createElement(Purchase, null));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtMSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJGb3JtMiIsImFkZHJlc3MiLCJjaXR5IiwiemlwY29kZSIsInBob25lbnVtYmVyIiwiRm9ybTMiLCJjcmVkaXQiLCJleHBpcmUiLCJjdnYiLCJiaWxsaW5nIiwiUHVyY2hhc2UiLCJBcHAiLCJjaGVja291dCIsImYxIiwiZjIiLCJmMyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5jbGFzcyAgRm9ybTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICBuYW1lOicnLFxuICAgICAgZW1haWw6JycsXG4gICAgICBwYXNzd29yZDonJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID10aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgfVxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz4gZW1haWwgbmFtZSBwYXNzd29yZCBjcmVhdGUgPC9oMz5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgcGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+KVxuICB9XG59XG5cbmNsYXNzICBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIGFkZHJlc3M6JycsXG4gICAgICBjaXR5OicnLFxuICAgICAgc3RhdGU6JycsXG4gICAgICB6aXBjb2RlOicnLFxuICAgICAgcGhvbmVudW1iZXI6JycsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPXRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+IHNoaXAgdG8gYWRkcmVzcyAobGluZSAxLCBsaW5lIDIsIGNpdHksIHN0YXRlLCB6aXAgY29kZSkgYW5kIHBob25lIG51bWJlci4gY3JlYXRlIDwvaDM+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD0gXCJyZXF1aXJlZFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgY2l0eTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgc3RhdGU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9IFwicmVxdWlyZWRcIi8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgemlwIGNvZGU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiemlwY29kZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56aXBjb2RlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgcGhvbmUgbnVtYmVyIGZvcm1hdCAwMDAtMDAwLTAwMDA6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwicGhvbmVudW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZW51bWJlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBwYXR0ZXJuPVwiWzAtOV17M30tWzAtOV17M30tWzAtOV17NH1cIiByZXF1aXJlZD0gXCJyZXF1aXJlZFwiLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj4pXG4gIH1cbn1cblxuXG5jbGFzcyAgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICBjcmVkaXQ6JycsXG4gICAgICBleHBpcmU6JycsXG4gICAgICBjdnY6JycsXG4gICAgICBiaWxsaW5nOicnLFxuXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPXRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+IGNyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlLiBjcmVhdGUgPC9oMz5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBjcmVkaXRjYXJkXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiY3JlZGl0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNyZWRpdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD0gXCJyZXF1aXJlZFwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgY2l0eTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJleHBpcmVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXhwaXJlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIENWVjpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3Z2fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIGJpbGxpbmcgemlwIGNvZGU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiYmlsbGluZ1wiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iaWxsaW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkPSBcInJlcXVpcmVkXCIvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PilcbiAgfVxufVxuXG5mdW5jdGlvbiBQdXJjaGFzZSAocHJvcHMpe1xuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgIGhlbGxsb1xuICAgIDwvZGl2PlxuXG4gIClcblxuXG5cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrb3V0OiB0cnVlLFxuICAgICAgZjE6ZmFsc2UsXG4gICAgICBmMjpmYWxzZSxcbiAgICAgIGYzOmZhbHNlLFxuXG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gY2hlY2sgb3V0IEZvcm0gPC9oMT5cbiAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tvdXQgJiYgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgY2hlY2sgb3V0XG4gICAgICAgIDwvYnV0dG9uPn1cbiAgICAgIHt0aGlzLnN0YXRlLmYxICYmIDxGb3JtMS8+fVxuICAgICAge3RoaXMuc3RhdGUuZjIgJiYgPEZvcm0xLz59XG4gICAgICB7dGhpcy5zdGF0ZS5mMiAmJiA8Rm9ybTEvPn1cbiAgICAgIDxQdXJjaGFzZS8+XG4gICAgPC9kaXY+KVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLE1BQU9BLEtBQVAsU0FBcUJDLEtBQUss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