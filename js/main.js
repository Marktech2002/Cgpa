// the menu bar 
const menuToggle = document.querySelector('.toggle') ;
const showCase   = document.querySelector('.showcase');

menuToggle.addEventListener('click' , () => {
   menuToggle.classList.toggle('active')
   showCase.classList.toggle('active')
});

function gradeCalc(grade , unit) {
   if(grade === 'A') {
      return 5 * unit ;
   }
   else if(grade === 'B') {
      return 4 * unit ;
   }
   else if(grade === 'C') {
      return 3 * unit ;
   }
   else if(grade === 'D') {
      return 2 * unit ;
   }
    else if(grade === 'E') {
      return 1 * unit ;
   }
   else if(grade === 'F') {
      return 0 * unit ;
   }
}
 
// adding a new course container

var counter = 1 ;
function addCourse() {
  let createNew = document.createElement("form") ;
  createNew.classList.add("add_new", `key-${counter}`); 
  const course_name = `
  <form class="add_new key-${counter}">
    <input type="text" placeholder="Course title" class="courses key-${counter}" required>
        <input type="number" placeholder="Unit" class="credit-units key-${counter}" required>
        <select class="grade key-${counter}" required>
      <option value="" selected disabled hidden></option>
      <option value="5">A</option>
      <option value="4">B</option>
      <option value="3">C</option>
      <option value="2">D</option>
      <option value="1">E</option>
      <option value="0">F</option>
    </select>  
  </form>
  `;
  createNew.innerHTML = course_name;
  document.getElementById("course-wrapper").appendChild(createNew);
  counter++;
}

// remove the class container
function removeCourse() {
   var remove = document.querySelector("form.add_new") ;
   remove.remove();
}


const reports  = [];

function Calgpa() {
   const GpaFinalAnswer = document.getElementById("final-gpa");
   const SelectedGrades = document.querySelectorAll("select.grade");
   const Units = document.querySelectorAll("input.credit-units");

   const listOfSelectedGrades = [];
   const listOfUnits = [];
   let totalUnits = 0;
  
   SelectedGrades.forEach((e) => {
      let GRADES = e.options ;
      const selectedIndex = e.selectedIndex;
      const SelectedGrade = GRADES[selectedIndex];
      const gradeValue = SelectedGrade.text.toUpperCase();
      listOfSelectedGrades.push(gradeValue);
   });

   console.log(listOfSelectedGrades);

  Units.forEach((e) => {
      const unitValue = parseInt(e.value);
      totalUnits += unitValue
      listOfUnits.push(unitValue);
  });

  console.log(listOfUnits);

  let totalEarnedUnits = 0 ;
  for(let i = 0; i < listOfUnits.length; i++) {
    totalEarnedUnits += gradeCalc(listOfSelectedGrades[i] , listOfUnits[i]);
  }

  const gpa = totalEarnedUnits/ totalUnits;

  if(gpa >= 0) {
   GpaFinalAnswer.textContent = "! Comrade Your CGpa is " + gpa.toFixed(2);
  }

  else {
   GpaFinalAnswer.textContent = "You sha just mad anyhow , enter grade && unit comrade" ;
  }
}
 
