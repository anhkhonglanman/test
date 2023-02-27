import {ArrayList} from "./ArrayList";

interface Post {
    title: string;
}

let arrayList = new ArrayList();
arrayList.add({title: 'javascript'});
arrayList.add({title: 'PHP'});
arrayList.add({title: 'Java'});

console.log(arrayList)
