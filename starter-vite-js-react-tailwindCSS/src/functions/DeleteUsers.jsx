import axios from "axios";
import "/src/styles/App.css"

const Base_URL = "https://users-crud.academlo.tech";
const DeleteUsers = (userId) => {
    const cardId=userId;
    
    axios.delete(Base_URL + `/users/${cardId}/`) // Usar userId en la URL
          .then(() => alert("user deleted"))
          .catch((error) => console.log(error));
        


  return (
    <div>DeleteUsers</div>
  )
}
export default DeleteUsers