import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Insert = () => {
    const [uploding, setUploding] = useState(false)
    const [inputs, setInputs] = useState({});
    const [selectedImg, setSelectedImg] = useState(null);
    const handleInput = (e) => {
        const { name, value, type } = e.target;

        if (type == "file") {
            setSelectedImg(e.target.files[0])
        } else {
            setInputs((pre) => ({ ...pre, [name]: value }))
        }
        console.log(inputs);
        console.log(selectedImg);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploding(true)
        const formdata = new FormData();
        formdata.append("name", inputs.name);
        formdata.append("gender", inputs.gender);
        formdata.append("email", inputs.email);
        formdata.append("city", inputs.city);
        if (selectedImg) {
            formdata.append("img", selectedImg);
        }

        try {
            const res = await axios.post("http://localhost:3000/v1/insert", formdata)
            console.log(res.data);

        } catch (error) {
            console.log(error);

        } finally {
            setUploding(false);
        }
    }

    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" name="name" onChange={handleInput} /><br />
                <lable>Gender</lable>
                <input type="radio" name="gender" value="male" onChange={handleInput} /> Male<br />
                <input type="radio" name="gender" value="female" onChange={handleInput} /> Female<br />
                <input type="radio" name="gender" value="others" onChange={handleInput} /> Others<br />

                <label>Email</label>
                <input type="email" name="email" onChange={handleInput} /><br />
                <label>City</label>
                <select name="city" onChange={handleInput}>
                    <option value="" disabled selected hidden>Select City</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="indore">Indore</option>
                    <option value="uajjain">Uajjain</option>
                </select>

                <input type="file" name='img' onChange={handleInput} />
                {uploding ?
                    <button  style={{color:"white"}} disabled>Uploding...</button>
                    :
                    <button onClick={handleSubmit}>Submit</button>

                }

            </form>
        </div>
    )
}

export default Insert