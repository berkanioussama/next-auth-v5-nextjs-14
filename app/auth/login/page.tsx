import LoginForm from '@/components/auth/Login-Form'
import CardWrapper from '@/components/auth/Card-Wrapper'

const LoginPage = () => {
    return (
        <CardWrapper 
            headerLabel={'Welcome back'}
            backButtonLabel={'Don`t have an account?'} backButtonHref={'/auth/register'} 
            showSocial
        >
            <LoginForm/>
        </CardWrapper>
    );
}
 
export default LoginPage;