import { useId } from "react";
function UseID() {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <form>
      {/* You can check your unique ID to inspect elemet */}
      <div>
        <label htmlFor={usernameId}>Username:</label>
        <input type="text" id={usernameId} name="name" />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input type="password" id={passwordId} name="password" />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input type="text" id={emailId} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default UseID;
