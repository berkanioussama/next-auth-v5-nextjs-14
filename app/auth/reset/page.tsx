import CardWrapper from "@/components/auth/CardWrapper";
import ResetForm from "@/components/auth/Reset-Form";

const Reset = () => {
    return (
        <CardWrapper
            headerLabel="Reset your password!"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <ResetForm/>
        </CardWrapper>
    );
}
 
export default Reset;