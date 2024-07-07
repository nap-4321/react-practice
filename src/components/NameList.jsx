
const NameList = () => {
    const names =['Bruce', 'Wayne', 'Diana', 'Bruce']
//     const persons =[{
//         id: 1,
//         name: 'Bruce',
//         age: 30,
//         skill: 'React' 
//     },
//     {
//         id: 2,
//         name: 'Wayne',
//         age: 32,
//         skill: 'Vue' 
//     },
//     {
//         id: 3,
//         name: 'Diana',
//         age: 28,
//         skill: 'Angular'  
//     }

// ]
const namesList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
return <div>{namesList}</div> 
}
export default NameList