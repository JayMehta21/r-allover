import {useState} from 'react'

const Web = () => {

    //brute force approach to handle form data
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

    //better approach to handle form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    console.log(formData)
  return (
    <div className=' flex flex-col gap-7 bg-color-red w-[200px]'>
      <input type="text"  placeholder='Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
      <input type="text" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
      <input type="text" placeholder='Message' value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
      <button>Submit</button>
    </div>
  )
}

export default Web
