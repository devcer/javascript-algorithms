class Screen {  
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    get diagonal() {
      return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }
    
    set dimensions(definition) {
      var dimensions = definition.split('x')
      this.width = parseInt(dimensions[0]);
      this.height = parseInt(dimensions[1]);
    }
  }
  
  let width = 500;
  let height = 600;
  let screen = new Screen(width, height);
  screen.width = 800;
  console.log(screen.diagonal); // Should print 1000.
  screen.dimensions = '400x300';
  console.log(screen.diagonal); // Should print 500.        



// function PositiveNumbers() {
//     this.current = 0;
//     this.next = function() {
//         return ++this.current;
//     }
// }
// PositiveNumbers();
// console.log(
//     PositiveNumbers.next());
// console.log(
//     PositiveNumbers.next());

// console.log(
//     PositiveNumbers.next());

// console.log(
//     PositiveNumbers.next());


// function generateNewFolderName(existingFolders) {
//     // Write your code here
//     const folderName = "New Folder";
//     let index = 2;
//     if(!existingFolders.includes(folderName)) return  folderName;
//     while(existingFolders.includes(`${folderName} (${index})`)) {
//         index = index + 1;
//     }
//     return `${folderName} (${index})`;
//   }
  
//   console.log(generateNewFolderName(["New Folder"]));

//   class App extends React.Component {
//     state = {
//       subject: '',
//       body: ''
//     }
    
//     onChange = ({name, value}) => {
//       this.setState({
//         [name]: value
//       })
//     }
    
//     render() {
//       return <form> 
//         <FormField onChange={this.onChange}>
//           <Input name="subject"/>
//         </FormField>
//         <FormField onChange={this.onChange}>
//           <Input name="body"/>
//         </FormField>
//       </form>
//     }
//   } 
// // function getP(persons) {
// //     return persons.map(person => {
// //         person.lastname = person.lastname.toUpperCase();
// //         return person;
// //     })
// // }
// // function getCenP(persons) {
// //     return persons.map(person => {
// //         person.address = '-----';
// //         return person;
// //     })
// // }

// // const persons = [{
// //     name: 'Bert',
// //     lastname: 'Simpson' 
// // },
// // {
// //     name: 'Harry',
// //     lastname: 'Potter' 
// // },
// // {
// //     name: 'Sherlock',
// //     lastname: 'Holmes' 
// // }]
// // const cPersons = getP(persons);
// // const cenPersons = getCenP(persons);
// // const harry = cPersons.find(({name}) => name === 'Harry');  
// // console.log(harry);   
// // // const cPersons = 