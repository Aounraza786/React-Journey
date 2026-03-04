import { useId } from "react";
function SingleuseIdForMultipleInputs() {
  // Lets suppose we have 20 inputs fields then which methods is best. Rather than to create a variable and assign them id separately we have another method in which we need only one time to create useID hook and assing to all input fields

  const id = useId();
  return (
    <form>
      {/* You can check your unique ID to inspect elemet */}
      <div>
        <label htmlFor={id + "usernameId"}>Username:</label>
        <input type="text" id={id + "usernameId"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>Password:</label>
        <input type="password" id={id + "passwordId"} name="password" />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email:</label>
        <input type="text" id={id + "emailId"} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default SingleuseIdForMultipleInputs;
