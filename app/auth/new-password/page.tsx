import CardWrapper from '@/components/auth/CardWrapper'
import { NewPasswordForm } from '@/components/auth/new-password-form';

const NewPasswordPage = () => {
    return (
        <CardWrapper 
            headerLabel={'Enter a new password'}
            backButtonLabel={'Back to login'}
            backButtonHref={'/auth/login'}
        >
            <NewPasswordForm/>
        </CardWrapper>
    );
}
 
export default NewPasswordPage;