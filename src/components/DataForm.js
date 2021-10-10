import React, { useReducer } from 'react';
// import {useState} from 'react';
import SMCR from '../imgs/SMCR.png';

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.payload
  };
}

// const [fNameErrMsg, setFNameErrMsg] = useState("");
// const [lNameErrMsg, setLNameErrMsg] = useState("");
// const [emailErrMsg, setEmailErrMsg] = useState("");

// const [fNameErrChk, setFNameErrChk] = useState(true);
// const [lNameErrChk, setLNameErrChk] = useState(true);
// const [emailErrChk, setEmailErrChk] = useState(true);

// const handleName = (e) => {

//   if (e.target.alt === "First Name") {
//     setFirstName(e.target.value);
//     if (e.target.value.length < 1) { setFNameErrMsg(`${e.target.alt} is required!`); }
//     else if (e.target.value.length < 2) { setFNameErrMsg(`${e.target.alt} must be 2 characters or longer!`); }
//     else { setFNameErrMsg(""); setFNameErrChk(false); }
//   }
//   else if (e.target.alt === "Last Name") {
//     setLastName(e.target.value);
//     if (e.target.value.length < 1) { setLNameErrMsg(`${e.target.alt} is required!`); }
//     else if (e.target.value.length < 2) { setLNameErrMsg(`${e.target.alt} must be 2 characters or longer!`); }
//     else { setLNameErrMsg(""); setLNameErrChk(false); }
//   }
//   errChk(e.target.value);
// }

// const handleEmail = (e) => {
//   setUserEmail(e.target.value);
//   if (validateEmail(userEmail)) { setEmailErrMsg(""); setEmailErrChk(false) }
//   else { setEmailErrMsg(`Not a valid ${e.target.alt}`) }
//   errChk(e.target.value);
// }

// const errChk = (chk) => {
//   if (!fNameErrChk && !lNameErrChk && !emailErrChk) {
//     document.getElementById('submitBtn').disabled = false;
//   } else {
//     document.getElementById('submitBtn').disabled = true;
//   }
// }

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const newUser = (e) => {
  e.preventDefault();
  // const newUser = { firstName, lastName, userEmail }
}

const DataForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: value
    });
  }

  return (
    <div className="user">
      {JSON.stringify(state)}
      <div className='form-wrapper'>
        <img src={SMCR} alt="S.M.C.R. Logo"></img>
        <form onSubmit={newUser}>
          <div className='form-group'>

            <label htmlFor='fname-input'>
              <span>irst Name: </span>{' '}
              <input
                name='firstName'
                alt='First Name'
                className='form-control-sm'
                type="text"
                value={state.firstName}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* <p id='NameErr'>{fNameErrMsg}</p> */}

          <div className='form-group'>
            <label>
              <span>Last Name: </span>{' '}
              <input
                name='lastName'
                alt='Last Name'
                className='form-control-sm'
                type="text"
                value={state.lastName}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* <p id='NameErr'>{lNameErrMsg}</p> */}

          <div className='form-group'>
            <label>
              <span>Email Address:</span>{' '}
              <input
                name='email'
                alt='Email'
                className='form-control-sm'
                type="text"
                value={state.email}
                onChange={handleChange} />
            </label>
          </div>

          {/* <p id='NameErr'>{emailErrMsg}</p> */}

          <input
            id='submitBtn'
            className='btn btn-light btn-outline-dark'
            type="submit"
            value="Create User"
            disabled
          />
        </form>
      </div>

    </div>
  );
}
export default DataForm;
{/* <div className='userData'>
        <h2>You're Entering: </h2>
        <h4 id='fname'>First Name: {firstName}</h4>
        <h4 id='lname'>Last Name: {lastName}</h4>
        <h4 id='email'>Email: {userEmail}</h4>
      </div> */}