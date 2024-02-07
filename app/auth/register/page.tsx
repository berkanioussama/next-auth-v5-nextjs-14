import RegisterForm from '@/components/auth/Register-Form'
import CardWrapper from '@/components/auth/Card-Wrapper'

const RegisterPage = () => {
    return (
        <CardWrapper 
            headerLabel={'Create new account'}
            backButtonLabel={'Already have an account? Login'} backButtonHref={'/auth/login'} 
            showSocial
        >
            <RegisterForm/>
        </CardWrapper>
    );
}
 
export default RegisterPage;