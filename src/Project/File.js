import React,{useEffect} from 'react';
import fs from 'fs'
import { useLocation } from "react-router-dom";
import FileAPI from 'file-api'

const { File } = FileAPI;



class Files extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getBase64(this.props.files.filebase64,this.props.files.filetype)
    }


    getBase64=(file,type, sliceSize=512)=>{
        const fs = require('browserify-fs');
        let base64File = file.split(';base64,').pop();
        let buff = new Buffer(base64File, 'base64');
        const name = this.props.files.filename;
        const newFile = new File({buffer:buff,name,type:type});
        //fs.writeFile(this.props.files.filetype,buff);
        console.log(newFile);
    }

    render() {


        return(
            <div>

                <p>{this.props.files.filename}</p>
            </div>
        )
    }


};

export default Files;