import { useParams } from "react-router-dom"

function UserDetails() {
  const { id } = useParams()

  return <h1>You are viewing user with ID: {id}</h1>
}

export default UserDetails;


//<Route path="/user/:id" element={<UserDetails />} />