import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [userConnected,setUserConnected]=useState(false)
  const [usergood,setUsergood]=useState(false)
  const [checked,setChecked]=useState(false)


  
 const onHandleUser = (e) => {
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailValid=reg.test(this.state.email)
    if(usergood)
   {  
    setUsername( e.target.value );
    setUsergood( true)
  }
    else
    {
      setUsergood( true)
    }
 };
 const onHandlePassword = (e) => {
  if (password.length >=5)
  { passgood=true;
  setUsername( e.target.value );
  };

  const onHandleremember = (e) => {
   setChecked(e.target.value);
  };
 

  
 const  canBeSubmitted=()=> {
    let emailValid =username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  return (  emailValid &&  password.length >=5  );
  }

  
   const handleSubmit = (e) => {
      if (!canBeSubmitted()) {
        e.preventDefault();
        return;
      }
     e.preventDefault();
    if (username === "mathilde.bertrand@konexio.eu" 
    && password === "123456") {
     setUserConnected( true);
      if(checked===true)
      {
       username ="mathilde.bertrand@konexio.eu";
       password = "123456"
      }
    } else {
     setUserConnected(false );
    }
  }


  return (
   renderHeader(),
    renderContent()
  );

 }



