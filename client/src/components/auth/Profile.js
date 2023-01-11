import { AuthConsumer } from "../../providers/AuthProvider";

const Profile = ({ user }) => {

  const { fname, lname, email, age, image } = user
  
  return (
    <>
      <img 
        src={image}
        alt='profile'
        width='300px'
      />
      <h1>{fname} {lname}</h1>
      <h3>Email: {email}</h3>
      <h3>Age: {age}</h3>
    </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value =>  <Profile {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedProfile;