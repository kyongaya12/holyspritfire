import React from 'react'

const usecount = () => {

    const []=useState();
    const options=[
        {id:"Red", name:1},
        {id:"Green", name:2},
        {id:"Yellow", name:4}
    ]

  return (
    <div className="d-flex justify-contenyt-center mt-5">
        <div className="w-50 p-3 border rounded">
            <h4>React-Dropdown-select</h4>
            <Select 
            name="select"
            options={options}
            labelField="id"
            valueField="name"
            multionChange={value=>setValue(value)}></Select>
        </div>
      
    </div>
  )
}

export default usecount


