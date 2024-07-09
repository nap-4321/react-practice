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
  const personList = persons.map((person) => (
    <h1>
      I am {person.name}. I am {person.age}. I know {person.skill}
    </h1>
  ));
  return <div>{personList}</div>;
};
export default NameList;
