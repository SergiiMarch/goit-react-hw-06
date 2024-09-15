import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import style from "./Contact.module.css";

const Contact = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <h2 className={style.name}>{value.name}</h2>
      <p className={style.number}>{value.number}</p>
      <button
        className={style.buttonDelete}
        onClick={() => dispatch(deleteContact(value.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
