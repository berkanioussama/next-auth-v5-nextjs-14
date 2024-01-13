import CardWrapper from '@/components/auth/CardWrapper';
import ErrorCard from '@/components/auth/ErrorCard'

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