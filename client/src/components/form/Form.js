import React, { useState } from "react";
import '../../App.css';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';

const Form = ()=>{
    const handleSubmit = ()=>{
        console.log('This is handleSubmit');
    }

    const [postData, setPostData] = useState({
        creator: "", title: "", message:"", tags: "", selectedFiles: "",
    });

    const clear = ()=>{
        console.log("Clear")
    }
    return(
        <div className="form">
            <Paper>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">
                        Create a Memory...
                    </Typography>
                    <TextField name="creator" variant="outlined" label='Creator' fullWidth value={postData.creator} onChange={(e)=> setPostData({ ...postData, creator: e.target.value})}/>
                    <TextField name="title" variant="outlined" label='Title' fullWidth value={postData.title} onChange={(e)=> setPostData({ ...postData, title: e.target.value})}/>
                    <TextField name="message" variant="outlined" label='Message' fullWidth value={postData.message} onChange={(e)=> setPostData({ ...postData, message: e.target.value})}/>
                    <TextField name="tags" variant="outlined" label='Tags' fullWidth value={postData.tags} onChange={(e)=> setPostData({ ...postData, tags: e.target.value})}/>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFiles: base64 })}
                    />
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="warning" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>

            </Paper>
        </div>
    )
}
export default Form;