import Person from "./Person";
const NameList = () => {
  const names = ["Bruce", "Wayne", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Wayne",
      age: 32,
      skill: "Vue",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Angular",
    },
  ];
  // const personList = persons.map((person) => (
  //   <Person key={person.id} person={person} />
  // ));
  // return <div>{personList}</div>;

  const nameList = names.map((name, index) => (
    <h1 key={index}>
      {index}
      {name}
    </h1>
  ));
  return <div>{nameList}</div>;
};
export default NameList;
