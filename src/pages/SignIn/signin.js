const SignIn = () => {
    return (
        <>
            <div className="w-full h-screen mx-auto text-center flex flex-col justify-center">
                <div className="justify-center flex-inline align-middle bg-slate-300">
                    <h1 className="text-5xl">Sign In</h1>
                    <input
                        placeholder="Email Address"
                    />

                    <input
                        placeholder="Password"
                    />

                    <p>Forgot Password?</p>

                    <button>Sign In</button>

                    <p>Don't have an account? Register Now</p>
                </div>
            </div>
        </>
    );
}
 
export default SignIn;