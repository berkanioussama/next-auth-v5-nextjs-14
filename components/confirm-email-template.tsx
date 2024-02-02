interface EmailTemplateProps {
  confirmLink: string;
}

export const ConfirmEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmLink,
}) => {
  return(
    <div>
      <h2>Click <a href={confirmLink}>to confirm email</a></h2>
    </div>
  )
};

export default ConfirmEmailTemplate;