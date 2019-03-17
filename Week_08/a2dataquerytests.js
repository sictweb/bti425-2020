
// Course data

// Before executing this, paste the JSON from the 
// assign-2-data-courses-available-v2.json
// source code file as the value of the 'courseData' constant below

const courseData = [];






// Show the first 15 items
/*
console.log('Show the first 15 items');
console.log('=======================');
for (let i = 0; i < 15; i++) {
  const element = courseData[i];
  console.log(i, element.courseCode, element.professor, element.prerequisite);
}
console.log('\n\n');
*/

// Show the first 10 CPA items in level 5 and above
/*
console.log('Show the first 10 CPA items in level 5 and above');
console.log('================================================');
const cpaData = courseData.filter(c => c.academicProgram == "CPA" && c.level == 5);
cpaData.forEach(element => {
  console.log(element.courseCode, 'section', element.section, 'is taught by', element.professor, 'and the prerequisite(s) are', element.prerequisite);
});
console.log('\n\n');
*/
