import { auth } from "@/auth";

const Settings = async () => {

    const session = await auth()

    return (
        <div className="">
            Settings page must be protected redircrt to it whene login
            <p>the session {JSON.stringify(session)}</p>
        </div>
    );
}
 
export default Settings;