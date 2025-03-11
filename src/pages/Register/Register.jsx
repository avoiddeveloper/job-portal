import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimation from '../../assets/lottie/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';
// import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = form.get('email');
        const pass = form.get('pass');
        createUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                // updateProfile(user, {
                //     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
                // })
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <section className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='pass' className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;