import React ,{useState} from 'react'

const Profile = () => {

const [profile, setPofile]= useState({
    name: "",
    age: "",
})

const handleChange = (e) =>{
    const{name, value} = e.target


    setPofile((prevProfile)=>({
        ...prevProfile, [name]: value
    }))
}


  return (
    <div>
        <h2>User Profile</h2>
        <div>
            <label> Name:
                <input type="text" name="name" value={profile.name} onChange={handleChange} />
            </label>
        </div>

        <div>
            <label>Age:
                <input type="number" name="age" value={profile.age} onChange={handleChange} />
            </label>
        </div>

        <h3>Profile Information: </h3>
        <p>Name:{profile.name}</p>
        <p>Age:{profile.age}</p>
    </div>
  )
}


export default Profile