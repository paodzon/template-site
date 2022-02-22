import React,{useState} from 'react';
import './Services.css'

const Services = () => {

    const [name,setName] = useState('');
    const [age, setAge] =useState('');
    const [data, setData] = useState([]);


    const onSubmitForm = (e) =>{
        e.preventDefault();
        setData(data.concat([{id:data.length+1 ,name,age}]))

    }

    const deleteData = (id) =>{
        const filterData = data?.filter((item) => item.id !== id)
        setData(filterData)
    }

    const toggleUp = (id) =>{

        const updatedData = data?.map((item) =>{
            if(item.id === id){
                return {id: item.id, name: "EDITED", age:item.age}
            }
            
            else{
                return item
            }
        })

        setData(updatedData)

    }

    const renderTableData = data?.sort((item) =>item.id).map((item) =>{
        return(<tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td><button onClick={() => toggleUp(item.id)}>UP</button><button>DOWN</button><button onClick={() =>deleteData(item.id)}>Delete</button></td>
        </tr>)
    })

    return (
      <div className="services">
        <div className="services__form">
          <h1>TODO FORM</h1>
          <form onSubmit={(e) => onSubmitForm(e)}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="services__list">
          <h1>TO LIST</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {renderTableData}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Services
