interface EmailTemplateProps {
  confirmLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmLink,
}) => {
  return(
    <div>
      <h2>Click <a href={confirmLink}>to confirm email</a></h2>
    </div>
  )
};

export default EmailTemplate;