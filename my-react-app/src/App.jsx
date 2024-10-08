import Food from './Food.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Buttons from './Button/Buttons.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import Form from './Form.jsx'
import Login from './Login.jsx'


function App() {
    return (
      <div>
    <Header/>
    <Food/>
    <Footer/>
    <Card/>
    <Card/>
    {/* <Card/> */}
    {/* <Card/> */}
    {/* <Card/> */}
    <Button/>
    <Buttons/>

    <Student name="Lakshmi" age={30} isStudent={true}/>
      <Student name="Manju" age={42} isStudent={false}/>
      <Student name="Sunil" age={24} isStudent={true}/>
      <Student name="Akash" age={50} isStudent={false}/>
      <Student name="Mohan" age={56} isStudent={false}/>

      <UserGreeting isLoggedIn={false} username="manjula"/>
      <Form/>
      <Login/>

    
    </div>
  )
}

export default App