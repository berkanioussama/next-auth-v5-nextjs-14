import LoginForm from '@/components/auth/LoginForm'
import CardWrapper from '@/components/auth/CardWrapper'

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