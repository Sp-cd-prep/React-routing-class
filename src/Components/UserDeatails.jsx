import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDeatails = () => {

    const { id } = useParams(); // Get the id from the URL
    const navigate = useNavigate()
    const [user, setUser] = useState(null); // State to hold the user data
  
    useEffect(() => {
      // Simulate API call
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Using a placeholder API
        .then((response) => response.json())
        .then((data) => setUser(data)) // Set the fetched data to user state
        .catch((error) => console.error('Error fetching user:', error));
    }, [id]);
  
    if (!user) {
      return <div>Loading...</div>; // Show a loading message if the data is not yet loaded
    }
  
    return (
      <div>
        <h1>User Details</h1>
        <p><strong>User ID:</strong> {id}</p>
        <p><strong>Name:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <button onClick={()=>navigate(-1)}>Go back</button>
        <button onClick={()=>navigate('./Card')}>Redirect to Card page</button>
      </div>
    );
}

export default UserDeatails