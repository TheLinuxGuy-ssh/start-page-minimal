import { User } from "../assets/config"

const Greeting = () => {
    return (
        <div className="greeting">
            <h1 className="greet">Welcome, {User.username}</h1>
        </div>
    )
}

export default Greeting;