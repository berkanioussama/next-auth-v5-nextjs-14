import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Settings = async () => {

    const session = await auth()

    return (
        <div className="">
            Settings page must be protected redircrt to it whene login
            <p>the session {JSON.stringify(session)}</p>
            <form 
                action={async ()=>{
                    'use server'

                    await signOut()
                }}
            >
                <Button type="submit">
                    Sign Out
                </Button>
            </form>
        </div>
    );
}
 
export default Settings;