import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Getdata = () => {
    const [alldata, setAlldata] = useState([]);
    const [data, setData] = useState({})
    const [inputs, setInputs] = useState({});
    const [selectedImg, setSelectedImg] = useState(null);
    const [uploding, setUploding] = useState(false)



    const loadData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/v1/getdata");
            setAlldata(res.data.data);

        } catch (error) {
            console.log(error);

        }
    }

    const deleteData = async (id) => {

        const res = await axios.get(`http://localhost:3000/v1/deletedata/?id=${id}`);
        alert(res.data.message);
        loadData()
    }
    const getForUpdatData = async (id) => {

        const res = await axios.get(`http://localhost:3000/v1/viewdata/?id=${id}`);
        setData(res.data.data);

    }
    console.log(data);
    useEffect(() => { loadData() }, []);

    const handleInput = (e) => {
        const { name, value, type } = e.target;

        if (type == "file") {
            setSelectedImg(e.target.files[0])
        } else {
            setData((pre) => ({ ...pre, [name]: value }))
        }
        console.log(inputs);
        console.log(selectedImg);
    }

    const handleUpdate = async (e,id) => {
        e.preventDefault();
        setUploding(true)
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("gender", data.gender);
        formdata.append("email", data.email);
        formdata.append("city", data.city);
        formdata.append("_id", data._id);
        if (selectedImg) {
            formdata.append("img", selectedImg);
        }

        try {
            const res = await axios.post(`http://localhost:3000/v1/update`,formdata)
            console.log(res.data);

        } catch (error) {
            console.log(error);

        } finally {
            setUploding(false);
        }
    }

    const render = alldata.map((k, index) => {
        return (<div key={index}>
            <h1>{k.name}</h1>
            <h4>{k.gender}</h4>
            <img src={k.imgUrl} alt={k.name} width="500px" />
            <button onClick={() => { deleteData(k._id) }}>Delete</button>
            <button onClick={() => { getForUpdatData(k._id) }}>update</button>
        </div>)
    })

    return (
        <div>
            {render}
            <div style={data._id ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                <from>
                    <h1>Update Data</h1>

                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={handleInput} /><br />
                    <lable>Gender</lable>
                    <input type="radio" name="gender" checked={data.gender === "male"} value="male" onChange={handleInput} /> Male<br />
                    <input type="radio" name="gender" checked={data.gender === "female"} value="female" onChange={handleInput} /> Female<br />
                    <input type="radio" name="gender" checked={data.gender === "others"} value="others" onChange={handleInput} /> Others<br />

                    <label>Email</label>
                    <input type="email" name="email" value={data.email} onChange={handleInput} /><br />
                    <label>City</label>
                    <select name="city" value={data.city} onChange={handleInput}>
                        <option value="" disabled selected hidden>Select City</option>
                        <option value="bhopal">Bhopal</option>
                        <option value="indore">Indore</option>
                        <option value="uajjain">Uajjain</option>
                    </select>

                    <input type="file" name='img' onChange={handleInput} />
                    {uploding ?
                        <button style={{ color: "white" }} disabled>Uploding...</button>
                        :
                        <button onClick={(e)=>{handleUpdate(e,data._id)}}>Submit</button>

                    }
                </from>
            </div>
        </div>
    )
}

export default Getdata