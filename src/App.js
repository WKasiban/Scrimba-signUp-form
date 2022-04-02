import React from "react";
import "./style.css"

export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPass: "",
        newsletter: true
    })

    //console.log(formData)
    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setFormData(prevForm => {
            return ({
                ...prevForm,
                [name]: type === "checkbox" ? checked : value
            })
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formData.password === formData.confirmPass) {
            alert("Successfully signed up")
        } else {
            alert("Passwords do not match")
            return
        }
        
        if (formData.newsletter) {
            alert("Thanks for signing up fo our newsletter!")
        }
        console.log(formData)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up Form</h1>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    className="form-input"
                    name="confirmPass"
                    value={formData.confirmPass}
                    onChange={handleChange}
                />

                <div className="form-newsletter">
                    <input
                        type="checkbox"
                        id="getNewsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="getNewsletter">I want to join the newsletter</label>    
                </div>

                <button className="form-submit">Sign Up</button>

            </form>
        </div>
    )
}