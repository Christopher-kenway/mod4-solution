const names = ['Kenway','Yaakov','Alice', 'Bob', 'John', 'Jane', 'Jack', 'Jill'];

for (const name of names) {
  if (name[0].toLowerCase() === 'j') {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}
