interface ResetPasswordEmailTemplateProps {
  resetLink: string;
}

const ResetPasswordEmailTemplate: React.FC<Readonly<ResetPasswordEmailTemplateProps>> = ({
  resetLink
}) => {
  return(
    <div>
      <h2>Click <a href={resetLink}>to reset your password</a></h2>
    </div>
  )
};

export default ResetPasswordEmailTemplate;