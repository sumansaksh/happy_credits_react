import React from "react";
import "./postCard.css";
import axios from "axios";
import { useAlert } from "react-alert";

const PostCard = ({ single }) => {
  const alert = useAlert();
  // const alert = useAlert();
  const vewUserHandler = async (id) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      alert.show(
        `name:${data.name} username:${data.username} email:${data.email} adress:${data.address.city},${data.address.street},${data.address.zipcode} company:${data.company.name},${data.company.email}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="postCardMain">
        <div className="postCardTop">
          <h5>{single.title}</h5>
          <p>{single.body}</p>
        </div>{" "}
        <button
          className="button"
          onClick={() => vewUserHandler(single.userId)}
        >
          Vew User
        </button>
      </div>
    </>
  );
};

export default PostCard;
