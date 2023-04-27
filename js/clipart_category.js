function isExistSameName(name) {
    let categoryNameArr = document.getElementsByClassName("categoryName");
    for(i = 0; i < categoryNameArr.length; i++){
        if(name == categoryNameArr[i].innerHTML)
            return true;
    }
    return false;
}

function clickCategoryRegister() {
    let categoryName = prompt("분류명을 입력하세요");
    while(isExistSameName(categoryName)) {
        alert("이미 존재하는 분류명입니다.");
        categoryName = prompt("분류명을 다시 입력하세요");
    }
    if(categoryName == null) return;

    let categoryTable = document.getElementById("clipart_category_table");

    let trObj = document.createElement("tr");
    trObj.setAttribute("id", categoryName);


    let tdObj = document.createElement("td");
    tdObj.innerHTML = categoryName;
    tdObj.setAttribute("id", categoryName + "_name");
    tdObj.setAttribute("class", "categoryName");
    trObj.appendChild(tdObj);

    tdObj = document.createElement("td");
    tdObj.innerHTML = 0;
    tdObj.setAttribute("id", categoryName + "_count");
    trObj.appendChild(tdObj);

    tdObj = document.createElement("td");
    inputObj = document.createElement("input");
    inputObj.setAttribute("id", categoryName + "_modify");
    inputObj.setAttribute("type", "button");
    inputObj.setAttribute("value", "수정");
    inputObj.setAttribute("onclick", "clickCategoryChange(id)");
    tdObj.appendChild(inputObj);
    trObj.appendChild(tdObj);

    trObj.appendChild(tdObj);
    tdObj = document.createElement("td");
    inputObj = document.createElement("input");
    inputObj.setAttribute("id", categoryName + "_delete");
    inputObj.setAttribute("type", "button");
    inputObj.setAttribute("value", "삭제");
    inputObj.setAttribute("onclick", "clickCategoryDelete(id)");
    tdObj.appendChild(inputObj);
    trObj.appendChild(tdObj);

    categoryTable.appendChild(trObj);
}

function clickCategoryChange(modifyId){
   let nameId = modifyId.substring(0, modifyId.length-6) + "name";
   let categoryName = document.getElementById(nameId);

   let newName = prompt("새 분류명을 입력하세요", categoryName.innerHTML);
   while(isExistSameName(newName)) {
    alert("이미 존재하는 분류명입니다.");
    newName = prompt("분류명을 다시 입력하세요");
   }
   if(newName == null) return;

   categoryName.innerHTML = newName;
}

function clickCategoryDelete(deleteId){
    let trObjId = deleteId.substring(0, deleteId.length-7);
    let trObj = document.getElementById(trObjId);
    let count = document.getElementById(trObjId + "_count").innerHTML;

    if(count > 0) alert("분류 내에 카테고리가 존재해 삭제할 수 없습니다.");
    else trObj.remove();
}