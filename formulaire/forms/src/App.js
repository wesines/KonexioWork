import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      checked: false,
      userConnected: false,
      usergood:false,
      passgood:false
    };
  }
  onHandleUser = (e) => {
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailValid=reg.test(this.state.email)
   // let emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    if(this.state.usergood)
   {  
     this.setState({ username: e.target.value });
     this.setState({usergood: true })
  }
    else
    {
      this.setState({usergood: true })
    }
 };
  onHandlePassword = (e) => {
  if (this.state.password.length >=5) this.state.passgood=true;
    this.setState({ password: e.target.value });
  };

  onHandleremember = (e) => {
    this.setState({ checked: e.target.value });
  };
 

  
  canBeSubmitted() {
    let emailValid =this.state.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  return (  emailValid &&  this.state.password.length >=5  );
  }

  
    handleSubmit = (e) => {
      if (!this.canBeSubmitted()) {
        e.preventDefault();
        return;
      }
     e.preventDefault();
    if (this.state.username === "mathilde.bertrand@konexio.eu" 
    && this.state.password === "123456") {
      this.setState({ userConnected: true });
      if(this.state.checked===true)
      {this.state.username ="mathilde.bertrand@konexio.eu";
        this.state.password = "123456"
      }
    } else {
      this.setState({ userConnected: false });
    }
  };
  renderForm(){
    const isEnabled = this.canBeSubmitted();

    return(
     
    <div className=" align-items-center">
              <div className="col-8">
              <form className="form-group"  
               className="needs-validation" onSubmit={this.handleSubmit}>
                <div className="col-8">
                   <label htmlFor="">Email adress</label> 
                  <input  
                   className={this.state.usergood ? 
                    "form-control is-valid" : 
                    "form-control is-invalid"}
                     type="email" 
                    placeholder=" enter email ..."
                    name="username"
                    value={this.state.username}
                    onChange={this.onHandleUser}
                  />
              </div>
    
              <div className="col-8">
                  <label>Password</label>
                  <input 
                  className={this.state.passgood ? 
                    "form-control is-valid" : 
                    "form-control is-invalid"}
                    type="password" 
                    name="password"
                    placeholder="enter password ..."
                    required
                     value={this.state.password}
                    onChange={this.onHandlePassword}
                  />
                
              </div>
              <div className="col-8">
                   <input
                      name="remember"
                      type="checkbox" 
                       value=""
                      checked={this.state.remember}
                      onChange={this.onHandleremember}
                    />
                  <label>  Remember me
                  </label>
               </div>
              <div className="col-8">
                <input type="submit"  disabled={!isEnabled}
                value="Connexion"   className="btn btn-primary"/>
             </div>

            </form>  
             </div>
           
            </div>
           
          
    )
  }
  renderSubmitted() {
    return (

        <div className="row  text-center">
          <div className="col-6  bg-secondary text-black"><h1>Submitted</h1>
          </div>
        </div>
        
   
    );
  }
  renderHeader(){
    return(
      <div className="container">
      <div className=" align-items-center">
         <div className="col-6 text-center">
        <h1>Login</h1>
        </div>
      </div>
      </div>
    )
  }
  renderContent() {
    return (<div  className="container">
        { 
					(this.state.userConnected)
						? <div>{this.renderSubmitted()}</div>
		        : <div>{this.renderForm()}</div>
        }
        </div>
    )
}
  render() {
    return(
      <div>
      {this.renderHeader()}
      {this.renderContent()}
      </div>
    )
     
    }
  
}

export default App;
