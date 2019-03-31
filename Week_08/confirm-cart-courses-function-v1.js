
// The following code is intended for use in your web API
// Copy then paste it into your "manager.js" source code file
// Can be placed just below your existing "shopping cart saved" code

// The code has been tested, but not widely tested 
// If it does not work for you, then contact Peter McIntyre,
// and include enough troubleshooting info to enable a search for a fix

/*

studentCartConfirm: function (id, courses) {
  return new Promise(function (resolve, reject) {

    // This function receives a student identifier, 
    // and a collection of course objects to be confirmed/enrolled

    // This function does many things:
    // 1. Fetches the specified student object
    // 2. Looks at the students existing "coursesConfirmed", 
    //    and decreases the "enrolTotal" for each one
    // 3. For each course in the incoming collection, 
    //    increase the "enrolTotal"
    // 4. Saves the incoming collection as "coursesConfirmed", 
    //    and clears/empties the "coursesSaved"

    // Local variable for this function's scope
    let student;

    // Next, we have defined a number of functions
    // Each will do a single specific Mongoose query task

    // Student find function
    // =====================
    let studentFind = (id) => {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Students.findById(id)
          .exec((error, item) => {
            if (error) {
              // Query error
              return reject(error.message);
            }
            // Check for an item
            if (item) {
              // Save it in the locally-scoped variable
              student = item;
              // Found, one object will be returned
              return resolve(item);
            } else {
              return reject('Not found');
            }

          }); // Students.findById
      }); // return new Promise
    }; // let studentFind

    // Courses clear function
    // ======================
    let coursesClear = (student) => {
      return new Promise(function (resolve, reject) {

        // Continue if there is a student object
        if (student) {

          // Continue if the student object has a coursesConfirmed property
          if (student.coursesConfirmed) {

            // Continue if there are courses to clear
            if (student.coursesConfirmed.length > 0) {

              // From the courses collection, create new array of course identifiers
              let courseIds = student.coursesConfirmed.map(c => c._id);

              // Update many has two parameters, and each is an object
              // The first is "conditions", which selects the documents to be updated
              //   Here, we want to match using the just-created courseIds array 
              // The second is the "doc", which is or has the data/properties to be updated
              //   Here, we want to decrement the value of enrolTotal 
              Courses.updateMany(
                { "_id": { $in: courseIds } },
                { $inc: { "enrolTotal": -1 } }
              )
                .exec((error, item) => {
                  if (error) {
                    // Query error
                    return reject(error.message);
                  }
                  // Check for an item
                  if (item) {
                    // Found, one object will be returned
                    return resolve(item);
                  } else {
                    return reject('Not found');
                  }
                }); // Courses.updateMany

              return resolve(student);
            }
            // Continue anyway if there are no coursesConfirmed items 
            return resolve(student);
          }
          else {
            // This block runs if there is no coursesConfirmed property
            // This is NOT an error condition, so resolve
            return resolve(student);
          }
        }
        else {
          // Uh oh, something happened, and the student object went out of scope
          return reject('student is now undefined');

        } // if (student) 
      }); // return new Promise
    }; // let coursesClear

    // Courses add function
    // ====================
    let coursesAdd = (student) => {
      return new Promise(function (resolve, reject) {

        // From the courses collection, create new array of course identifiers
        let courseIds = courses.map(c => c._id);

        // Please note that this version of the code does NOT
        // look at enrolTotal to ensure that it's less than 4 (our max capacity for Assignment 2)
        // We probably want this web API code to work this way (exceeding enrolTotal), 
        // and enforcing this business rule elsewhere (i.e. in the Angular app)

        // Update many has two parameters, and each is an object
        // The first is "conditions", which selects the documents to be updated
        //   Here, we want to match using the just-created courseIds array 
        // The second is the "doc", which is or has the data/properties to be updated
        //   Here, we want to increment the value of enrolTotal 

        Courses.updateMany(
          { "_id": { $in: courseIds } },
          { $inc: { "enrolTotal": 1 } }
        )
          .exec((error, item) => {
            if (error) {
              console.log('coursesAdd - query error');
              // Query error
              return reject(error.message);
            }
            // Check for an item
            if (item) {
              // Found, one object will be returned
              return resolve(item);
            } else {
              return reject('Not found');
            }

          }); // Courses.updateMany
      }); // return new Promise
    }; // let coursesAdd

    // Student update some properties function
    // =======================================
    let studentUpdate = (student) => {
      return new Promise(function (resolve, reject) {

        // Wrap the array values properly
        var wrappedItem = { "coursesSaved": [], "coursesConfirmed": courses };

        Students.findByIdAndUpdate(id, wrappedItem, { new: true }, (error, item) => {
          if (error) {
            // Query error
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            student = item;
            return resolve(student);
            //return resolve(item);
          } else {
            return reject('Not found');
          }

        }); // Students.findByIdAndUpdate
      }); // return new Promise
    }; // let studentUpdate

    // Now that the above functions have been defined, call them
    // They get called in sequence, one after the other
    // The return result of one is used as input data for the next
    studentFind(id)
      .then(coursesClear)
      .then(coursesAdd)
      .then(studentUpdate)
      .then(() => {
        //console.log('studentCartConfirm completed');
        resolve(student);
      });

  }); // return new Promise

}, // studentCartConfirm 

*/
