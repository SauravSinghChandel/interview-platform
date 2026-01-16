import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";
import toast from "react-hot-toast";

function HomePage() {
    return (
        <div>
            <button className="btn btn-secondary" onClick={() => toast.success("This is a success toast")}>
                ClickMe
            </button>

            <SignedOut>
                <SignInButton mode="modal" />
                <button>Login</button>
            </SignedOut>

            <SignedIn>
                <SignOutButton />
            </SignedIn>
        </div>

    )
}

export default HomePage
