import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
// REGEX
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  // useState
  // User
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  // Password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  // Match Password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  // Error Message/Success
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Hooks

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // setValidName(USER_REGEX.test(user));
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    // setValidPwd(PWD_REGEX.test(pwd));
    // setValidMatch(pwd === matchPwd);
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
      </form>
    </section>
  );
};

Register.propTypes = {
  user: PropTypes.string.isRequired,
  setUser: PropTypes.func.isRequired,

  validName: PropTypes.bool.isRequired,
  setValidName: PropTypes.func.isRequired,

  userFocus: PropTypes.bool.isRequired,
  setUserFocus: PropTypes.func.isRequired,

  pwd: PropTypes.string.isRequired,
  setPwd: PropTypes.func.isRequired,

  validPwd: PropTypes.bool.isRequired,
  setValidPwd: PropTypes.func.isRequired,

  pwdFocus: PropTypes.bool.isRequired,
  setPwdFocus: PropTypes.func.isRequired,

  matchPwd: PropTypes.string.isRequired,
  setMatchPwd: PropTypes.func.isRequired,

  validMatch: PropTypes.bool.isRequired,
  setValidMatch: PropTypes.func.isRequired,

  matchFocus: PropTypes.bool.isRequired,
  setMatchFocus: PropTypes.func.isRequired,

  errMsg: PropTypes.string.isRequired,
  setErrMsg: PropTypes.func.isRequired,

  success: PropTypes.bool.isRequired,
  setSuccess: PropTypes.func.isRequired,
};

export default Register;
