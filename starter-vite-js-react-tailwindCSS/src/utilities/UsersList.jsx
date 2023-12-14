const UsersList = (users, handleDeleteBtn) => {
  return (
    <div>
      {users.map((user) => (
        <div className="Card" key={user.id}>
          <p className="Name">
            {user.first_name + " " + user.last_name}
            <br />
            <div className="linea"></div>
          </p>
          <button onClick={() => handleDeleteBtn(user.id)} className="delete">
            <img src="/img/trash-2 1.png" alt="" />
          </button>
          <button className="edit">
            <img src="/img/edit-2 1.png" alt="" />
          </button>
          <div className="email">
            <p>Email</p>
            <p>{user.email}</p>
          </div>
          <div className="birthday">
            <p>Birthday</p>
            <p>{user.birthday}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UsersList;
