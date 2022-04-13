const student = document.getElementById("studentId").value;

function validateForm(){
    if((student.lenth() < 100000000) || (student.lenth() >= 100000000)){
        alert("Student ID must be eight digits long");
        return false;
    }
}