import React, {Component} from "react";
import "./Profile.css"
import axios from "axios";

const request = require('superagent');

class Profile extends Component{
    state = {

    };

    componentDidMount() {
    let newCode = '';
        axios.get("http://localhost:3000/user/signin/callback")
            .then(res => {
                const {query} = res;
                const {code} = query;
                if (!code){
                    return res.send({
                        success: false,
                        message: 'Error: no code'
                    });
                }
                newCode = code;
                console.log('code', code);
            })
            .catch(err => {
                console.log(err);
            });

/*        request
            .post('https://github.com/login/oauth/access_token')
            .send({
                client_id: 'ea2821dabc4bfb770c7f',
                client_secret: '6f0690bc5a77ee79c4e42e23a060ff871a3d3936',
                code: newCode }) // sends a JSON post body
            .set('Accept', 'application/json')
            .then(function(result) {
                const data = result.body;
                result.send(data);
            });*/
/*        axios({
            method: 'get',
            url: 'https://github.com/user',
        });
        request
            .get('https://github.com/user')
            .set('Authorization: token ' + "6acae86bf340111df2ae04654cf27f2052e1dcfc")
            .then(function(result) {
                result.send(result.body);
            });
            //Access token: 6acae86bf340111df2ae04654cf27f2052e1dcfc*/
    }

    render() {
        return(
        <div>
            <a href="http://localhost:8081/user/">Login Using Github</a>
        </div>
        )
    }
}

export default Profile;