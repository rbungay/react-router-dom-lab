import { useParams } from "react-router-dom";

export const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const singleMailbox = mailboxes.find((m) => m._id === Number(mailboxId));

  return (
    <>
      <h1>Mailbox {singleMailbox._id}</h1>
      <dl>
        <dt>Name: {singleMailbox.boxholder}</dt>
        <dt>Size:{singleMailbox.boxSize}</dt>
      </dl>
    </>
  );
};
