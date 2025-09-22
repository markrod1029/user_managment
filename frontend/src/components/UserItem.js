
const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-item">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="user-actions">
        <button onClick={() => onEdit(user)} className="btn btn-edit">
          Edit
        </button>
        <button onClick={() => onDelete(user.id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;