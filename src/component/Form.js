import React, { Component } from 'react'
import './signin.css'
import InputField from './common/Input'

export default class Form extends Component {

    state = {
        data: {},
        notfound: false,
        error: {}
    }

    onChange(e) {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        let {data, error} = {...this.state};
            data[name] = value;
        error[name] = ""
        this.setState({data, error});
    }

    onSubmit(e) {
        e.preventDefault();
        let data = {...this.state.data}
        this.setState({
            data:data
        })
       alert(this.state.data.username + this.state.data.password + this.state.data.email)
        
    }

    
    render() {
        let{data, error} = this.state
        
        let inputs = [
            {
                name: 'username',
                placeholder: 'Userame',
                value: data.username,
                type: 'text',
                error: error.username,
                required: true,
            }, {
                name: 'password',
                placeholder: 'Password',
                value: data.password,
                type: 'password',
                error: error.password,
                required: true,
            }, {
                name: 'email',
                placeholder: 'Email',
                value: data.email,
                type: 'email',
                error: error.email,
                required: true,
            },
            {
                name: 'address',
                placeholder: 'Address',
                value: data.address,
                type: 'text',
                error: error.address,
                required: true,
            },
        ]

        return (
            <div className="mt-5">
                <h3 className="text-center mt-5">Common Input field</h3>
                <main className="form-signin">
                    <form>
                        <div className="mb-3">
                            {
                                inputs.map((o, i) => {
                                if (!o.hide)
                                return <InputField key={i} input={o} onChange={this.onChange.bind(this)}/>
                                }
                            )}
                        </div>
                        <button onClick={(e) => this.onSubmit(e)} className="btn btn-primary">Submit</button>
                    </form>
                </main>
            </div>
        )
    }
}
