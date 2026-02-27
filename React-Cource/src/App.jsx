import "./App.css";
import Navbar from "./Components/NAvbar";
import ProfileCard from "./Components/ProfileCard";
import HeroSection from "./Components/HeroSection";
import ServiceSection from "./Components/ServiceSection";
import Footer from "./Components/Footer";
import { useState } from "react";
import CounterDashboard from "./Components/CounterDashboard";
import DarkAndLightTheme from "./Components/DarkAndLightTheme";
import ShowHidePassword from "./Components/ShowHidePassword";
import LikeButton from "./Components/LikeButton";
import ToDoListPractice from "./Components/ToDoListPractice";
import TodoApp from "./Components/ToDOApp";
import ControlledComponents from "./Components/Day 05/Controlled-Components";
import FormVlidation from "./Components/Day 05/Form-Validation";
import Signup from "./Components/Day 05/Handling-Multiple-inputs";
import Signup01 from "./Components/Day 05/Handling-multiple-validation-part2";
import Counter from "./Components/Day 06/UseEffectBasics";
import ReactUseEffect from "./Components/Day 06/Timer";
import Challenge from "./Components/Day 06/UseEffectChallenge";
import CleanUp from "./Components/Day 06/CleanUpFunction";
import Task from "./Components/Day 06/AnotherChallenge";
import AutoCounter from "./Components/Day 06/Task";
import AssessmentTask from "./Components/Day 06/AssessmentTask";
import HowToNotFetchDataInReact from "./Components/Day 07/Day07-Part01";
import HowToFetchDataInReact from "./Components/Day 07/Day07-Part02";
import GetDataFromAnotherApi from "./Components/Day 07/Day07-Part03";
import LoadingAndErrorState from "./Components/Day 07/Day07-Part04";
function App() {
  /*   Day 01   */
  const users = [
    {
      id: 1,
      name: "Shoaib Anwar",
      age: 22,
      profession: "Front End Developer",
      isOnline: true,
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABAlBMVEXL4v////++2Pv/3c5KgKo2Xn3/y75AcJMrTWb0+//igIbk9v/dY27X7v/I4P/U6/9Ga4okSGFVd5RLaIDd4fDR5f+41Pvp+//p8v/v9v/ie4H33tYuWHjZ6f/f7f7/08T4z8kAPV3/5dQ+eaTgcXlznMLh6fDp9PbcWmY6ZYbipq1sjq+ivNkNT3XMvLi7sLKZmKGGi5lwf5Dq3+PAydeSprbU3uWGnK640e357emUttldjbXjtLvI3erjl53l09p1kqnfwcm0fYuTboFWY34ZXYbDeINvZX0AME1fdYp1doGLg4pla3jPrqnmv7XkzsRBWW2umZqlusqEpsSAaH68WmsOUoLNAAAKuUlEQVR4nL3ce1/aSBcA4IGCIYogaIxghCorGgHbKiDV2mK3l9fd7baL7vf/Ku9MrjOZM7eQ9fyza34anp45cyaECai0VtidzsGRgxrlMBoN5PR6Bx17vbOi/H/a6RFOGGUq9vexDh11XhplH/QIBzHByAKbc5AvZTlQNh6wLChiZVzl/TLq5ciYKco+EIAE+cKwRs80X2YoG+dIJhLlyzFLlwnqQENUSLr0UfokkFVu9ApHmZHgbJV1WXqojjEJZjX0aksHZR/lIZHgxnAf6bA0ULhP5jRBpaUzhkpUvpGTJUs9hipUby0RzCofrYWy10yTQKWqLCmqU4CIBFBZB3lRvSLSJFLJhlCCyt0ItFT7jnjdEaMKKac0+Fw1jFHFlLhcVRaVuwilNjlOc1scTUdHJRhBGKWedg5a3C7bO2DUarXqcqGlgnMFomx1lsbtqud5VTBatVqr1Vo2c+cKQtn8PzJjGlcFniBqQbQe+dMArQHKFYRS1JPTXMpIMarWGmuNoB5KZWq05aYEVQMyDnQGfgR5lKpnNlWmGFU7BoodGEBHjVKtLY5i7ChUa8zXOtTbuRUni+qoTGOlKUXNAJTO6pxBKZtBU0lKUbXqotnku6i6MWRQ6mYwMUC1frWXNwuOxaOQDKW8WGm0TTIVNNH/jbL1riwrBqVcXZyFholGBbBqQ6lieyiDUg0ecm7VZc6haq129jxAtxKh1Feaql4Oo/jeDgxgD0YpZx5C26N8KG5xlg8ghdK4/N1WdnMY1d7Onkk6A9P/VbVNEuolBkbtcl0UGMADAKWscg4luqAKW4EcJa31BHWgc01Oo7zJ47ur6oR3ea3j2h9//nXckqJktY5MEkWjvMefr3BcvnvcJSlLorr7+OePjY2N/t9/tWQo2aUVMkkUhfIeD08I6uTk5Oflm7fvrq52d6+u3r19c/nzVX+DRH8jUYEoSaqQSaJo1GVgiuLkhP7vRhj9H1KUpKqQSaJSlLdLmzKxEat+tWQo8b0rZJIoCnWlg/pDihKnKkTZmm+Hi0UBVdWhUEd6poJRQKqcFKWx6r0QKrwGRQZlTqPe6qD+OZajRF0BGZQ5hZpcik0JauNvRaZEyzIyKPME5U3eSBKVojb+CZdAA9S+HaG0Rw81dyYkdt9ISDSq/+PXMYmqACVoVchg7uH4SSJp4ErURj9ccl6LzgePHzKYezgOpRoeFYUBisw/ZDJ6xaPgaz1kdme6aBTcPzFKn/QiqHKAMrkNXDgKGD+C0nnD8KKoDkYZfdjxAqjyEUYZdKn/AAVWOtJf+Ejs5UPtmaAaJWTSOnFc50F9kpwQmH42MqpzHEd7yiHMDN0nSZ7guwrGKIQclYpFKWoWmn7IZJHJg3qtqFnoQg/l+PjTDKU6Gz98uVCqYmdQh+YoBxm1qTBUfUF75glRRm0qDMcEpTw/0KjyoJDc1GdQypNBqDwhHz8GdZ0DVc6Fko+f7gJTMEo6/5hEKcu8QJQsVQxKo2ILQ8lSZVZRRaLEXZ1O1GudM0GoPC1BpjIcvOL6FAlBW6ATpZ55MArlWWZkKmMTuMzk3yQFqcxNBaOACyuqxrXLgkf1clzkUZHpDGlBaTRNIQpf5JlfDlOxB5v6r3THTnA5XBwqJb1aC4XfOBi+xRKiog9k+v3gJ30Ub8JvsczejIpRbKyDapi+bX8JlGN6g6NwlOAGxzqV/l+ggltBRjfNXgJlfHuRieZiKkJNF4I759kAJp/xjdg0HGcx8ofvYdP7oT9aOBrzGt54ZnjLOiE1F0/Vycy2QdV7255NqiN+k5IGKrplrdxByZNwlsiehHkJVGFTaU62LaizBYyebfwxSEAiWSIfHO3YJLhLhcPg8A75YKm6VGSLNyHjD4xQmiX8kjclUBUcLN2EvyPPluQDI/2P1pCzvRjFu2EnqxBlAya7tJrEe09Gi20RizclH61pL38kS+k+ksnQtnnV++jYMNm8502E2YJHz+DjWqeJxqcWtbXFS1A2b7KH9G9ap2OnycOkH9eqdzCTnd53g0HFpzba7JwlqGQKHiaHznaoX/Urg8Hd7QJlXPDc09oC4DjNxu0pPm2lUrGof347RcWq1GSf0buaLPyn+O9Pb8tMvngTtQVAUuqO0whzFIUPoyKVDaP8+K+DfDVil2KzhKjUcWU/3VUSEZMqFhWoSgKURZ1gULl7iuqeTxSzrQQudQfROYpChMLtivmRRmVOQfKFHPUGHChVzuIuK6JTlUWVDlnUjgclKnbdjR1hoiSbupxbgERXlc+iNs8f6B+HfEWxrFtBP6BQXKqcU9hEpWpIGa675/XzDzRqIklUcJ47TlXKojKpcp4EphQ1mVOm8/N6vX5+kR6ZK1ADyz8VJEq0pbIpGDt6+CarRPBQJyas2kwOrRIUPHyWZflPYEWJNp86C6FpkE6/GzcCXIQkoupeh4fcWTr5oHMNLKLa53sUi2K26Z6KTGlLwNPP3YpKvJ7EeT0o/y2XbuhwonCMKBS4TZfaje4shCZm8XO3tjod94xBXbj42NaWyy59sMmyxikK3tCcvoNoimYeY6pW77EKx7CbmjbPgkPuPfOLnCpG3cUdVLT1O611R2QaMC/lRSj3Oq2pYXRoym7fFZgsn6/yLKqjKvMMahUKttyHSHX+EB9ZsagBbLL8W37w4AcvnFuBiS5zglpuxXHxWxAXbnxgKctUirLCriB78CIeQPHcs5iX2okJ7ofuJo7uhwTFFh/bPylTNP8yTz6BD/OIUez4Te5jw8cQ9TH++Z59vIYZvQGPkj/ME5aVGMVOP28WZWa4GcUwytyMGT128lkcSvHYU1hWEhRTVaR9BoZP3dDU/RQdYB87EJsISv2AWNDYZSi2qsKm4F7EqLDSM12KqSiLQ2k8SkceOpSh2FSFTcHdTMIFGoLEhFFaDx1ilRRF17q3JAh32I1N3aB5ukxDYC7xORT0iDSE6ghXmSCYWg97Z4oKu6eoyjmTNYIerwUf+R1WdFWTqUuVVFRU7nSia7KG0OvDD0fvyUz0AIbj9zFFfcyOHvXPA0xz8OUFj5HLc0XNQH9IrhLSQu+Sn6lUUjOPJ7XP4FcXPds+hN5eAQOI51/SpaJORc89avAAE5wnyVcT2CMtFe6fVEkFRUV1TpnJB2tcjirZwvczFeZK/Z7qUkGnuoeuzjnT15s8X+JQKo11VJPZdZc2da/TdU9i8leSF5Z+Mci9pNyTYm8/sKiH5FnXpMgHnMm6l72u/CtUZG00UX1mUZ85Ez90S7A9aaKkQxgVu/fM1tSzx5qANMmGTgdVmot7QzwFWVRm4vFpGok6gT6qVFoJKytUeb/TLeF3T25SpkkPVRoKm0Oo+kIn6gtt4oZOVU36KDwNRWMYqj6nps9eauKrqT3VejnNrw+zp4IxDFRf0gX5S2Lis9Sean7ZmvYXrdkrOFtE5X2LUd+8yJQ7S0Yokq0Rd1s2Un2PUd9D0xpZMkThmD/xt4sDVZSqb8Q0yJL89o2yC6yBwjMRSJdf9aJUfcejlxV9ba90Ztw6KOJanWby5YdV1d3MmPyv1tJYlA9FXNPZYEDBfO+52/2tjlcYCvTVmk1ziHKjSNj346fTu8ogCL/6b73+b9XHGBxWe7ScmVR2YagANpzPV7ObZdvyn+v1Z59gVtP5fLje97H+HwmxjNGwulIIAAAAAElFTkSuQmCC",
    },
    {
      id: 2,
      name: "Wali Muhammad",
      age: 25,
      profession: "Back End Developer",
      isOnline: false,
      image:
        "data:image/png;base64,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",
    },
    {
      id: 3,
      name: "Aoun Raza",
      age: 21,
      profession: "Full Stack Developer",
      isOnline: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGDqrxCzebkRb9OLpx-76MP1O5ANbS4y-jIFbCPoaqO0vUr4dbsa7MSo&s",
    },
  ];

  /* Day 02 */
  const services = [
    { id: 1, title: "Web Development", info: "We build Websites" },
    { id: 2, title: "App Development", info: "We build Mobile Apps" },
    { id: 3, title: "UX/UI Designing", info: "We designed Interface" },
  ];
  /*  Day 03 */

  /* State Concept */
  const [count, setcount] = useState(0);
  /* Re-rendering Concept */
  console.log("Rendered");
  const [x, setx] = useState(0);

  /* State + Event Concept */
  const [isOn, setisOn] = useState(true);

  /* Handling Input Fields */
  const [name, setname] = useState("");

  /* Day 04 (using If else Condition*/
  let template = "";
  const [pshow, setPshow] = useState(false);

  if (pshow) {
    template = (
      <>
        <p>
          Welcome to If else Condition concept in react. In App.jsx retrun we
          can use only ternary operator not if else. if we want to use if else
          condition the use it above return as we uaes.
        </p>
        <button
          style={{ border: "2px solid" }}
          onClick={() => setPshow(!pshow)}
        >
          Hide
        </button>
      </>
    );
  } else {
    template = (
      <>
        <button
          style={{ border: "2px solid" }}
          onClick={() => setPshow(!pshow)}
        >
          Show
        </button>
      </>
    );
  }

  /* using Ternary Operators */
  const [status, setstatus] = useState(false);

  /* Rendering Lists */
  const fruits = ["Apple", "Banana", "Mango", "Strawberry"];

  return (
    <>
      {/* Day 01 */}
      <div style={{ border: "2px solid", padding: "20px" }}>
        <h2>
          Day 1 What is React?, SPA vs MPA, Virtual DOM, Folder structure, JSX
          basics
        </h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {users.map((user) => (
            <ProfileCard
              name={user.name}
              age={user.age}
              profession={user.profession}
              image={user.image}
              isOnline={user.isOnline}
              onButtonClick={() => alert(`${user.name} button clicked`)}
            />
          ))}
        </div>
      </div>
      {/* Day 02 */}
      <div style={{ border: "2px solid", padding: "20px", marginTop: "10px" }}>
        <h2>
          Day 2 Functional components, props, reuseability, component
          composition
        </h2>
        <Navbar title="My Company" />
        <HeroSection
          heading="Malik Aoun Raza"
          description="I am a Software Engineer graduated from Air University Islamanbad. Currently I am Working in Systems Limited."
        />
        <ServiceSection services={services} />
        <Footer text="I am a footer" />
      </div>
      {/* Day 03 */}
      <div style={{ border: "2px solid", padding: "20px", marginTop: "10px" }}>
        <h2>Day 03 State, useState, Re-rendering, Event Handling</h2>
        {/* State Concept */}
        <h3>Count: {count}</h3>
        <button
          style={{ border: "2px solid" }}
          onClick={() => setcount((prev) => prev + 1)}
        >
          Increase
        </button>
        {/* Re-rendering Concept */}
        <button
          style={{ marginLeft: "5px", border: "2px solid" }}
          onClick={() => setx(x + 1)}
        >
          Click
        </button>
        {/* State + Event Concept */}
        <button
          style={{ marginLeft: "5px", border: "2px solid" }}
          onClick={() => {
            console.log("Old State:", isOn); // How to toggle state
            setisOn(!isOn);
          }}
        >
          {isOn ? "ON" : "OFF"}
        </button>
        {/* Handling Input Fields */}
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <p>Name is {name}</p>
        </div>
        <h3>Task 01: Counter App</h3>
        <CounterDashboard />
        <h3>Task 02: Dark/Light Theme Toggle</h3>
        <DarkAndLightTheme />
        <h3>Task 03: Show/Hide Password</h3>
        <ShowHidePassword />
        <h3>Task 04: Like Button</h3>
        <LikeButton />
      </div>
      <div style={{ border: "2px solid", padding: "20px", marginTop: "10px" }}>
        {/* Day 04 */}
        <h2>Day 04 Rendering lists, map(), Keys, Conditional rendering</h2>
        {template}
        {/* using Ternary Operators */}
        <div>
          {status ? (
            <div
              style={{ background: "red", coloe: "white", marginTop: "10px" }}
            >
              Welcomt to condition rendering using Ternary operators
            </div>
          ) : (
            ""
          )}
          <button
            style={{ border: "2px solid", marginTop: "10px" }}
            onClick={() => setstatus(!status)}
          >
            {status ? "Hide" : "Show"}
          </button>
        </div>
        {/* Rendering Lists */}
        <div>
          <ul>
            {fruits.map((fruit) => {
              <li>{fruit}</li>;
              console.log(fruit);
            })}
          </ul>
        </div>
        {/* Day 04 */}
        <ToDoListPractice />
        <TodoApp />
      </div>
      <div style={{ border: "2px solid", padding: "20px", marginTop: "10px" }}>
        <h2>
          Day 05 - Controlled Components, Form Validation, Handling Multiple
          inputs and Validation
        </h2>
        {/* Day 05*/}
        <ControlledComponents />
        <FormVlidation />
        <Signup />
        <Signup01 />
      </div>
      <div style={{ border: "2px solid", padding: "20px", marginTop: "10px" }}>
        <h2>
          Day 06 - useEffect Hook: Side effects, useEffect lifecycle ,Dependency
          array
        </h2>
        <Counter />
        <ReactUseEffect />
        <Challenge />
        <CleanUp />
        <Task />
        <AutoCounter />
        <AssessmentTask />
      </div>
      <div style={{ border: "2px solid", padding: "20px", marginTop: "10px" }}>
        <h2>Day 07</h2>
        <h3>
          Wrong Way to Fetch Data:{" "}
          <p>
            From this way we can fetch data but there is a problem that is state
            update and component rendered continously. There is no end to not
            render function. you can check it through Network tab through
            inspect thats why this is wrong way to fetch data from an api.
          </p>
        </h3>
        <HowToNotFetchDataInReact />
        <h3>
          Right way to fetch Data:{" "}
          <p>
            From this way we can fetch data. Useeffect run only once because we
            used empty depency array. that why only one time state change and
            component re-render. You can check request in network tab through
            inspect.
          </p>
        </h3>
        <HowToFetchDataInReact />
        <h3>Data Fetch Fronm Another Api</h3>
        <GetDataFromAnotherApi />
        <h3>Loading And Error States</h3>
        <LoadingAndErrorState />
      </div>
    </>
  );
}

export default App;
