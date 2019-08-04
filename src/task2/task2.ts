import { NamedPerson } from "../task1/task1";

//Zadanie 2
//Stwórz interfejs 'isThisSamePerson' dla funkcji 'isThisSamePersonFunction'

interface isThisSamePerson {
    (firstPerson: NamedPerson, secondPerson: NamedPerson): boolean;
}

const isThisSamePersonFunction: isThisSamePerson = (p1: NamedPerson, p2: NamedPerson): boolean => {
    if (p1.firstName == p2.firstName) {
        return true;
    }
    return false;
}