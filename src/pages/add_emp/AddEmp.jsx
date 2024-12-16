import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import ToJson from "./ToJson";
import ToXml from "./ToXml";



let renderCount = 0;
// Render count should increase only after page 
// change as then elements would be rerendered
// NOT when input is being typed.
// Reset on reload.

export const AddEmp = () => {
    const form = useForm();
    const { register, control, handleSubmit } = form;

    const onSubmit = (data) => {
        console.log('form submited\nform data=>', data)
        ToXml(data)
        ToJson(data)
    }

    renderCount++;
    return (
        <div className="form-container">
            <h2>Register new user</h2><br />
            {/* <p>Render count is {renderCount / 2}</p> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username")} />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")} />

                <label htmlFor="address">Address</label>
                <textarea type="text" id="address" {...register("address")} />

                <label htmlFor="role">Role</label>
                <select id="role" {...register("role")}>
                    <option value="">Select an option</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                </select>
                <label htmlFor="gender">Gender</label>
                <label>
                    <input {...register("gender")} type="radio" value="male" /> &nbsp; Male
                </label>
                <label>
                    <input {...register("gender")} type="radio" value="female" /> &nbsp; Female
                </label>
                <br />
                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    );
};
