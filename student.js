let listStudent = [];
// vẽ bảng
function renderListStudent(dataRender) {

    let bodyData = "";
    for (let i = 0; i < dataRender.length; i++) {
        let userName = dataRender[i].userName;
        let userAge = dataRender[i].userAge;
        let userAddress = dataRender[i].userAddress;
        bodyData +=
        `
        <tr>
                <td>${i + 1}</td>
                <td>${userName}</td>
                <td>${userAge}</td>
                <td>${userAddress}</td>
                <td><button id="btnEdit" onclick="editStudent(${i})">Edit</button></td>
                <td><button id="btnDel" onclick="deleteStudent(${i})">Delete</button></td>
            </tr>
        `
    }

    document.getElementById("tbody").innerHTML = bodyData;
}
// tạo mới student
function createStudent() {
    let userName = document.getElementById("Name").value;
    if (userName === "") {
        alert("The name is required! Please try again!");
    }
    let userAge = document.getElementById("Age").value;
    if (userAge === "") {
        alert("The age is required! Please try again!");
    }
    let userAddress = document.getElementById("Address").value;
    if (userAddress === "") {
        alert("The address is required! Please try again!");
    }
    let studentOjb = {
        userName: userName,
        userAge: userAge,
        userAddress: userAddress
    }
    listStudent.push(studentOjb);
    document.getElementById("Name").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Address").value = "";
    renderListStudent(listStudent);
}
// xóa student
function deleteStudent(id) {
    listStudent.splice(id, 1);
    renderListStudent(listStudent);
}
// update student
function editStudent(idStudent) {
    let newName = prompt('Bạn muốn thay đổi tên ' + listStudent[idStudent].userName + ' thành :')
    if(newName === ""){
        alert('The name is required! Please try again!')
    }
    for (let i = 0; i < listStudent.length; i++) {
        if(listStudent[i].userName === newName){
            alert ('The name is existed! Please try again!')
        }
        
    }
    let newAge = prompt('Bạn muốn thay đổi tuổi thành :')
    if(newAge === ""){
        alert('The age is required! Please try again!')
    }
    let newAddress = prompt('Bạn muốn thay đổi địa chỉ thành :')
    if(newAddress === ""){
        alert('The address is required! Please try again!')
    }
    listStudent[idStudent].userName = newName;
    listStudent[idStudent].userAge = newAge;
    listStudent[idStudent].userAddress = newAddress;
    renderListStudent(listStudent);
}
// search Student
function searchStudent() {

    let valueInput = document.getElementById("search").value;

    let listUsersSearch = [];
    for (let i = 0; i < listStudent.length; i++) {
        let studentName = listStudent[i].userName;
        let dataPush = {
            userName: studentName,
            userAge: listStudent[i].userAge,
            userAddress: listStudent[i].userAddress,
        }
        if (studentName.includes(valueInput)) {
            listUsersSearch.push(dataPush)
        }
    }
    renderListStudent(listUsersSearch);
}


