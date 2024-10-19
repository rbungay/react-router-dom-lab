import { Link } from "react-router-dom";

export const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox.boxholder}>
            <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxholder}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
