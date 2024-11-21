import ItemPerson from "./ItemPerson"

const ListPerson = ({ lists }) => {
    return (
        <ul>{
            lists.map(
                (person) => (
                    <ItemPerson key={person.id} name={person.name} />
                ))}
        </ul>
    )

}
export default ListPerson