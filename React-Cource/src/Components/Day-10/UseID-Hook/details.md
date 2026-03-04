# 🧠 Step 1: What is `useId`?

`useId` is a React hook that:

- 👉 Generates a **unique, stable ID**
- 👉 Safe for **Server-Side Rendering (SSR)**
- 👉 Mostly used for **accessibility**

---

## ❓ Why Do We Even Need It?

Imagine this:

```jsx
<label htmlFor="email">Email</label>
<input id="email" />
```

This works fine.

But what if:

- You render the component multiple times?
- You build a reusable input component?
- You use SSR (Next.js)?

Now duplicate IDs can break your app.

That's where `useId` helps.

---

## 🔹 Step 2: Basic Syntax

```jsx
import { useId } from "react";

const id = useId();
```

It returns something like:

    :r0:

You don't need to care about the format --- React handles it.

---

## 🎯 Step 3: Basic Example

```jsx
import { useId } from "react";

function App() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </div>
  );
}
```

Now label and input are correctly connected.

---

## 🔥 Step 4: Real Reusable Component (Important)

```jsx
import { useId } from "react";

function InputField({ label, type }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <InputField label="Email" type="email" />
      <InputField label="Password" type="password" />
    </div>
  );
}
```

Each input gets a unique ID.\
No collisions.\
Clean and scalable.

---

## 🧠 Step 5: Why Not Just Use `Math.random()`?

```jsx
const id = Math.random();
```

❌ Wrong for SSR.

Server and client will generate different values → Hydration mismatch.

`useId` ensures IDs match between server and client.

---

## 🚀 Step 6: Multiple IDs from One `useId`

```jsx
const id = useId();

<input id={`${id}-email`} />
<p id={`${id}-error`} />
```

Keeps related IDs grouped and unique.

---

## 🏗 Step 7: Accessibility Use Case

```jsx
import { useId } from "react";

function FormField({ label, error }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-describedby={`${id}-error`} />

      {error && (
        <p id={`${id}-error`} style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}
```

Screen readers correctly link input and error message.

---

## 🧩 When Should You Use `useId`?

### ✅ Use it for:

- Reusable input components
- Accessibility connections
- SSR-safe IDs

### ❌ Do NOT use it for:

- List keys
- Database IDs
- Persistent IDs across sessions

---

## 🧠 Mental Model

- `useRef` → Store value without re-render\
- `useState` → Store UI state\
- `useId` → Generate stable unique ID for accessibility

---

## 🎓 Interview Answer

> `useId` generates a stable unique ID that works correctly with
> Server-Side Rendering and prevents hydration mismatches. It is mainly
> used for accessibility by linking labels, inputs, and ARIA attributes
> in reusable components.
