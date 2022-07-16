import { personList } from '../../data'

export interface CreatePersonProps {
  name: string
  age: number
}

export default function createPerson({ name, age }: CreatePersonProps) {
  const member = {
    id: personList.length + 1,
    name,
    age,
  }
  personList.push(member)
  return personList
}
