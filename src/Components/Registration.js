import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./RegistrationStyle.css";
import axios from "axios";
const Registration = () => {
  const { num, name } = useParams();
  const navigate = useNavigate();
  const [loginErrorMsg, setLoginErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [registerErrorMsg, setRegisterErrorMsg] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [participantsData, setParticipantsData] = useState([
    ...Array(num).keys(),
  ]);

  // console.log([...Array(parseInt(num)).keys()])
  // console.log(process.env.REACT_APP_BACKEND_URL)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    const participants = [];
    let arrObject = {};
    for (const entry of formData.entries()) {
      arrObject[entry[0]] = entry[1];
      if (entry[0] == "year") {
        participants.push(arrObject);
        arrObject = {};
      }
    }

    // axios.post(`${process.env.BASE_URL}/register`, {})
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/hostel/psRegister`,
        { psName: name, participants },
        {
          headers: {
            authorization: localStorage.getItem("Kriti2024token"), //change to ${localStorage.getItem(token)} after login is implemented
          },
        }
      )
      .then((res) => {
        console.log(res);
        const stat = res.status;
        if (stat == 299) {
          console.log("err");
          setRegisterErrorMsg(true);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else if (stat >= 400) {
          setLoginErrorMsg(true);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else if (stat >= 200 && stat < 300) {
          setSuccessMsg(true);
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/hostel/find`,
        { psName: name },
        {
          headers: {
            authorization: localStorage.getItem("Kriti2024token"), //change to ${localStorage.getItem(token)} after login is implemented
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setRegistered(true);
          setParticipantsData(res.data.ps.studentsData);
        } else if (res.status === 400) {
          console.log("New Registration");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!registered ? (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          {/* <input name="ps-name" value={name} style={{visibility:"hidden"}}></input> */}
          <div className="PS-name">{name}</div>
          {[...Array(parseInt(num)).keys()].map((entry) => (
           entry===0? (<div className="registration-box" key={entry}>
              <h2>{`Participant ${entry + 1}`}</h2>
              <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="roll">Roll Number:</label>
                <input
                  type="text"
                  name="rollNo"
                  placeholder="Enter your roll Number"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your iitg email"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="year">Year:</label>
                <select name="year" required>
                  <option value="">Select Year</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>
              </div>
              {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
            </div>):
            (<div className="registration-box" key={entry}>
              <h2>{`Participant ${entry + 1}`}</h2>
              <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  
                />
              </div>
              <div className="input-group">
                <label htmlFor="roll">Roll Number:</label>
                <input
                  type="text"
                  name="rollNo"
                  placeholder="Enter your roll Number"
                  
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your iitg email"
                  
                />
              </div>

              <div className="input-group">
                <label htmlFor="year">Year:</label>
                <select name="year" >
                  <option value="">Select Year</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>
              </div>
              {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
            </div>)
          ))}
          {loginErrorMsg && (
            <p className="errorMsg">
              Login Session expired. Login and try again.
            </p>
          )}
          {registerErrorMsg && (
            <p className="errorMsg">
              Already Registered. Loading registered details.
            </p>
          )}
          {successMsg && <p className="successMsg">Registered Successfully.</p>}

          <button className="saveButton">Register</button>
        </form>
      ) : (
        <form className="form">
          {/* <input name="ps-name" value={name} style={{visibility:"hidden"}}></input> */}
          <div className="PS-name">{name}</div>
          {participantsData.map((entry, index) => (
            <div className="registration-box">
              <h2>{`Participant ${index + 1}`}</h2>
              <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={entry.name} readOnly />
              </div>
              <div className="input-group">
                <label htmlFor="roll">Roll Number:</label>
                <input
                  type="text"
                  name="rollNo"
                  value={entry.rollNo}
                  readOnly
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={entry.email} readOnly />
              </div>
              <div className="input-group">
                <label htmlFor="year">Year:</label>
                <input type="text" name="year" value={entry.year} readOnly />
              </div>
              {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
            </div>
          ))}
          <button className="saveButton" disabled>
            Cannot register again
          </button>
        </form>
      )}
    </div>
  );
};

export default Registration;
