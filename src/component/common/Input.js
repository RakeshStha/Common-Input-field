import React from 'react'

export default function Input(props) {
    let {key, name, value, placeholder, type, required,  error } = props.input


    function onChange(e, name, value){
        props.onChange(e, name, value)
    }

    // function onClick(name, value){
    //     props.onClick(name, value)
    // }

    if (type === 'text'){
        return <div className="row" key={key}>
            <div className="col-sm-12">
                <label htmlFor={name} className="basic">{placeholder}{required && ' *'}</label>
                <input 
                placeholder={placeholder} name={name}  
                type={type ? type : "text"}
                className={(error || (required && value === "")) ? "form-control is-invalid" : "form-control"}
                invalid={error || (required && value === "")}
                value={value ? value : ""} 
                onChange={e => {onChange(e)}}
                />
            </div>
        </div>
    }
    else if (type === 'email'){
        return <div className="row" key={key}>
            <div className="col-sm-12">
                <label htmlFor={name} className="basic">{placeholder}{required && ' *'}</label>
                <input 
                placeholder={placeholder} name={name}  
                type={type ? type : "email"}
                className={(error || (required && value === "")) ? "form-control is-invalid" : "form-control"}
                invalid={error || (required && value === "")}
                value={value ? value : ""} 
                onChange={e => {onChange(e)}}
                />
            </div>
        </div>
    }
    else if (type === 'password'){
        return <div className="row" key={key}>
            <div className="col-sm-12">
                <label htmlFor={name} className="basic">{placeholder}{required && ' *'}</label>
                <input 
                placeholder={placeholder} name={name}  
                type={type ? type : "password"}
                className={(error || (required && value === "")) ? "form-control is-invalid" : "form-control"}
                invalid={error || (required && value === "")}
                value={value ? value : ""} 
                onChange={e => {onChange(e)}}
                />
            </div>
        </div>
    }
    
    // else{
    //     return <div className="row" key={key}>
    //         <div className="col-sm-12">
    //             <label htmlFor={name} className="basic">{placeholder}{required && ' *'}</label>
    //             <input 
    //             placeholder={placeholder} name={name}  
    //             type={type ? type : "text"}
    //             className={(error || (required && value === "")) ? "form-control is-invalid" : "form-control"}
    //             invalid={error || (required && value === "")}
    //             value={value ? value : ""} 
    //             onChange={e => {onChange(e)}}
    //             />
    //         </div>
    //     </div>
    // }
    

}
