import { personList } from '../../data'

export default function getPersonList() {
  return Promise.resolve(personList)
}
