import React from 'react'

const customer = () => {
 
    const [name, setName]=useState('');

    const onChange=(e)=>{
        const value=e.target.value;
        setName(value);
    }

    const showData=()=>{
        console.log('Name:',name);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="App">
      <header className="App-header">
        <form>
            <label>Name:<input name="name" onChange={onChange} /></label>
            <div>
            <button onClick={showData}>Submit</button>
            </div>
            <div>
                <button onClick={showData} >Show Down</button>
            </div>
        </form>
      </header>
    </div>
  )
}

export default customer


