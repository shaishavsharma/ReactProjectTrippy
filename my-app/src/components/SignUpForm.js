import "./SignUpStyles.css";

function SignUpForm(){
    return(
        <div className="form-container">
          <h1>Sign Up</h1>
          <p>Already a member?<i>Log In</i></p>
          <form>
            <input placeholder="Email"/>
            <input type="Password" placeholder="Password"/>
            <button>Sign Up</button>
            <p>----------- or sign up with -----------</p>
            <div className="tt">
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            </div>
          </form>
        </div>
    )
}

export default SignUpForm;