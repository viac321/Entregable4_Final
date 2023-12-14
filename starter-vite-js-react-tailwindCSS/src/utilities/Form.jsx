//import "/src/styles/Register.css"
import "/src/styles/Register.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Base_URL = "https://users-crud.academlo.tech";

const Form = (handleCancelBtn) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(Base_URL + "/users/", data)
      .then(({ data: newUser }) => {
        reset();
        alert("user created");
        setUsers([...users, newUser]);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Trasfondo">
      <div className="Contenedor__Card">
        <div className="Head_Contenedor">
          <img className="Ellipse" src="/img/Ellipse 9.png" alt="" />
        </div>

        <form
          autoComplete="off"
          className="Body_Contenedor"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="name">
            {" "}
            {/* celda First Name */}
            <label htmlFor="">First Name</label>
            <input
              placeholder="Enter name"
              type="text"
              name="first_name"
              {...register("first_name", {
                required: true,
                maxLength: 25,
                minLength: 1,
              })}
            />
            {errors.first_name && errors.first_name.type === "required" && (
              <p className="text-red-500">first name is required</p>
            )}
            {errors.first_name && errors.first_name.type === "maxLength" && (
              <p className="text-red-500">first name is too long</p>
            )}
            {errors.first_name && errors.first_name.type === "minLength" && (
              <p className="text-red-500">first name is too short</p>
            )}
          </div>

          <div className="Last">
            {" "}
            {/* celda Last Name */}
            <label htmlFor="">Last Name</label>
            <input
              placeholder="Enter last name"
              type="text"
              name="last_name"
              {...register("last_name", {
                required: true,
                maxLength: 25,
                minLength: 1,
              })}
            />
            {errors.last_name && errors.last_name.type === "required" && (
              <p className="text-red-500">last name is required</p>
            )}
            {errors.last_name && errors.last_name.type === "maxLength" && (
              <p className="text-red-500">last name is too long</p>
            )}
            {errors.last_name && errors.last_name.type === "minLength" && (
              <p className="text-red-500">last name is too short</p>
            )}
          </div>

          <div className="Email">
            {" "}
            {/* celda Email */}
            <label htmlFor="">Email</label>
            <input
              placeholder="Enter email"
              type="text"
              name="email"
              {...register("email", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                required: true,
                maxLength: 30,
                minLength: 1,
              })}
            />
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-red-500">email is not valid</p>
            )}
            {errors.email && errors.email.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
            {errors.email && errors.email.type === "maxLength" && (
              <p className="text-red-500">email is too long</p>
            )}
          </div>

          <div className="Password">
            {" "}
            {/* celda Password */}
            <label htmlFor="">Password</label>
            <input
              placeholder="Enter password"
              type="text"
              name="password"
              {...register("password", {
                required: true,
                maxLength: 25,
                minLength: 1,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="text-red-500">password is required</p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <p className="text-red-500">password is too long</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="text-red-500">password is too short</p>
            )}
          </div>

          <div className="birthdays">
            {" "}
            {/* celda Birthday */}
            <label htmlFor="">Birthday</label>
            <input
              type="date"
              name="birthday"
              {...register("birthday", { required: true })}
            />
          </div>

          <div className="Botones">
            <button type="submit" value={"Submit"} className="btn__save">
              Save user
            </button>
            <button onClick={handleCancelBtn} className="btn__Cancel">
              Or Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
