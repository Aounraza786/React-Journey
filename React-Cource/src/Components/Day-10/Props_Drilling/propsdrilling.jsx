function ParentComponent() {
  return (
    <section>
      <h5>Parent Component A</h5>
      <ChildComponent data="Love React.js" />
    </section>
  );
}
export default ParentComponent;

function ChildComponent(props) {
  return (
    <section>
      <h5>Child Component B</h5>
      <GrandChildComponent data={props.data} />
    </section>
  );
}

function GrandChildComponent(props) {
  return (
    <section>
      <h5>Grand Child Component C</h5>
      <GrandGrandChildComponent data={props.data} />
    </section>
  );
}

function GrandGrandChildComponent(props) {
  return (
    <section>
      <h5>Props of parent component is : {props.data}</h5>
    </section>
  );
}
