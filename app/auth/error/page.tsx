import CardWrapper from '@/components/auth/Card-Wrapper';
import ErrorCard from '@/components/auth/Error-Card'

const AuthErrorPage = () => {
    return (
        <CardWrapper 
            headerLabel={'Oops! Somting went wrong'}
            backButtonLabel={'Back to login'} backButtonHref={'/auth/login'}
        >
            <ErrorCard/>
        </CardWrapper>
    );
}
 
export default AuthErrorPage;