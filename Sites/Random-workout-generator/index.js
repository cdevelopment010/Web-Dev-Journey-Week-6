
let exerciseCompound = [
    "Squat", 
    "Deadlift", 
    "Bench Press",
    "Overhead Press",
    "Pull-up"
]; 

let exerciseIsolation = [
    "Bulgarian split squat",
    "Romanian deadlift",
    "Lunge", 
    "Glute Bridge", 
    "Standing Calf Raise", 
    "Lat Pull Down", 
    "Bent Over Row", 
    "Good Mornings", 
    "Superman", 
    "Dumbbell Shrugs", 
    "Dumbbell Chest Fly", 
    "Press Up", 
    "Arnold Press", 
    "Lat Raises", 
    "Upright Row", 
    "Bicep Curl", 
    "Hammer Curl", 
    "Tricep Dips", 
    "Skull Crushers", 
    "Tricep Kickbacks", 
    "Sit Ups", 
    "V-Sits", 
    "Bicycle Kicks", 
    "Russian Twists", 

    // timed exercises
    "Plank", 
    "Side Plank", 
    "Wall Sit"
]; 

let exerciseIsolationTimed = [
    "Plank", 
    "Side Plank", 
    "Wall Sit"
];






function generateExercise() {
    let exerciseTable = document.getElementById("exerciseTable"); 
    let numberExercises = document.getElementById("numberExercises").value; 
    let exerciseList = []; 
    let innerHTMLString = `<table>
                                <th>
                                    <tr>
                                        <td>Exercise</td>
                                        <td>reps</td>
                                        <td>sets</td>
                                        <td>rest</td>
                                    <tr>
                                </th>`; 


    for (let i = 0; i < numberExercises; i++) {

        let rep; 
        let set; 
        let rest; 
        let exerciseType;
        let exercise; 

        // compound or isolation 
        if (i % 5 == 0) {
            exerciseType = "Compound";
        } else {
            exerciseType = "Isolation"
        }

        // Get exercise
        exerciseList =  exerciseFunc(exerciseList,exerciseType); 
        exercise=exerciseList[i];

        // Set Reps for each exercise
        rep = repRange(exerciseType,exercise); 

        // Number of sets per exercise
        set = setRange(exerciseType); 

        
        // rest per exercise
        rest = restRange(exerciseType); 


        

        innerHTMLString += `<tr>
                        <td>${exerciseList[i]}</td>
                        <td>${rep}</td>
                        <td>${set}</td>
                        <td>${rest}</td>
                    </tr>`;

    }

    innerHTMLString += "</table>"
    exerciseTable.innerHTML = innerHTMLString; 

}



function repRange(exerciseType, timed) {

    let workoutType = document.getElementById("workoutType").value; 
    let hiitReps = [20, 25, 30, 40, 60]; 
    let rep;

    if (exerciseType == "Compound") {
        if (workoutType == "Strength") { 
            rep = Math.floor(Math.random() * (5 - 0) + 1);
        } else if (workoutType == "Hypertrophy") { 
            rep = Math.floor(Math.random() * (12 - 5) + 6);
        } else if (workoutType == "Endurance") { 
            rep = Math.floor(Math.random() * (20 - 12) + 13);
        } else if (workoutType == "HIIT") { 
            rep =  hiitReps[Math.floor(Math.random() * hiitReps.length)] + " Seconds";
        }
    } else if (exerciseIsolationTimed.indexOf(timed) != -1) {
        rep =  hiitReps[Math.floor(Math.random() * hiitReps.length)] + " Seconds";
    } else {
        rep = Math.floor(Math.random() * (20 - 7) + 7);
    }
     

    return rep; 
}

function exerciseFunc(arr,type) {
    let exerciseAlreadyUsed = arr;
    let exercise;

    if (type == "Compound") { 
        exercise = exerciseCompound[Math.floor(Math.random() * exerciseCompound.length)]; 
    } else  {
        exercise = exerciseIsolation[Math.floor(Math.random() * exerciseIsolation.length)]; 
    }

    if (exerciseAlreadyUsed.indexOf(exercise) == -1) { 
        exerciseAlreadyUsed.push(exercise); 
    } else {
        exerciseFunc(exerciseAlreadyUsed); 
    }

    return exerciseAlreadyUsed; 
}


function setRange(exerciseType) {

    let workoutType = document.getElementById("workoutType").value; 

    let set;

    
    if (exerciseType == "Compound") {
        if (workoutType == "Strength") { 
            set = Math.floor(Math.random() * (6 - 1) + 2);
        } else if (workoutType == "Hypertrophy") { 
            set = Math.floor(Math.random() * (5 - 2) + 3);
        } else if (workoutType == "Endurance") { 
            set = Math.floor(Math.random() * (3 - 1) + 2);
        } else if (workoutType == "HIIT") { 
            set =  Math.floor(Math.random() * (3 - 1) + 2);
        } 
    } else if (exerciseType == "Isolation-timed") {
        set = Math.floor(Math.random() * (3 - 1) + 2);
    } else {
        set = Math.floor(Math.random() * (3 - 1) + 2);
    }

    

    return set; 
}

function restRange(exerciseType) {

    let workoutType = document.getElementById("workoutType").value; 

    let rest;

    
    if (exerciseType == "Compound") {
        if (workoutType == "Strength") { 
            rest = "2 - 3 minutes";
        } else if (workoutType == "Hypertrophy") { 
            rest = "1 - 3 minutes";
        } 
    } else {
        rest = "30 - 90 seconds";
    }

    

    return rest; 

}