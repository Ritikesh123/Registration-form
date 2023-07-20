import React, { useEffect, useState } from 'react'


const Form = () => {
  const data={name:"", email:"", password:"", confirm_password: ""};
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag]= useState(false);
  useEffect(() => {
    console.log("Registered")
  }, [flag])

    const handleData =(e) =>{
      setInputData({...inputData, [e.target.name]:[e.target.value]})
        console.log(inputData)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
          alert("All fileds are mandatory to fill");
        }else{
          setFlag(true);
        }
      }
  return (
    <>
    
    <pre>{(flag)?<h2 className='ui-defined text-center font-bold mt-5 bg-green-500 text-xl '
    >Hello {inputData.name}, yo've successfully registered 🤗
    </h2>:""}</pre>

    
    <form className="container rounded- justify-center" onSubmit={handleSubmit}>
        <div className=" w-full px-10 py-5  text-4xl font-serif bg-blue-900 min-h-min rounded-lg">
            <h1 className=" italic text-center font-serif
             text-white ">
              Registration form
            </h1>
        </div>


        <div className='w-full '>
          <input type='text' 
          className=' px-20 py-2 m-2 inline-block rounded box-border min-h-min' 
          placeholder='Enter your name' 
          name='name' 
          value={inputData.name} 
          onChange={handleData}>
          </input>
        </div>



        <div>
          <input type='text' 
          className='px-20 py-2 m-2 inline-block rounded box-border' 
          placeholder='Enter your email' 
          name='email' 
          value={inputData.email} 
          onChange={handleData}>
          </input>
        </div>



        <div>
          <input type='text' 
          className='px-20 py-2 m-2  inline-block rounded box-border' 
          placeholder='Enter your password' 
          typeof="password"
          autoComplete="off"
          name='password' 
          value={inputData.password} 
          onChange={handleData}>
          </input>
        </div>



        <div>
          <input type='text' 
          className='px-20 py-2 m-2 inline-block rounded box-border' 
          placeholder='Enter your confirm passward'
          typeof="password"
          autoComplete="off" 
          name='confirm_password' 
          value={inputData.confirm_password} 
          onChange={handleData}>
          </input>
        </div>



        <div className='text-center'>
          <button type='submit' 
          className='bg-green-700 px-6 py-3 m-2 inline-block rounded box-border cursor-pointer'>
            Submit
          </button>
        </div>



    </form>
    </>
  )
}

export default Form
