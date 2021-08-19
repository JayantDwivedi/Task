import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Home from "./Components/Landing";

import Signin from "./Components/SignIn";
import ForgotPass from "./Components/ForgotPass";
import ResetPass from "./Components/ResetPass";
import Jobpost from "./Components/PostJob";
import Signup from "./Components/Signup";
import Sucess from "./Components/Dashboard";
import Candidate from "./Components/Cadidatesignup";
import { isLoggedin } from "./utils/comman";

function App() {
  return (
    <div className="App">
      <Router history={Sucess}>
        <Navbar />
        <Main />

        <Switch>
          {/* <Form /> */}
          {/* <ForgotPass/> */}
          {/* <ResetPass/> */}
          {/* <Jobpost/> */}
          {/* <Signup/> */}
          <Route path="/" exact component={Home} />
          {isLoggedin() ? (
            <>
              <Route path="/dashboard" exact component={Sucess} />
              <Route path="/dashboard/jobpost" exact component={Jobpost} />
            </>
          ) : (
            <>
              <Route path="/login" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/forgot-pass" exact component={ForgotPass} />
              <Route path="/reset-pass" exact component={ResetPass} />
              <Route path="/candidate-signup" exact component={Candidate} />
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
