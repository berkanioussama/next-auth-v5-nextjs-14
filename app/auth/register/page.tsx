import RegisterForm from '@/components/auth/RegisterForm'
import CardWrapper from '@/components/auth/CardWrapper'

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