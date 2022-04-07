
function createClicked(){
          $.ajax({
            url: "/create",
            type: "POST",
            data: {name:$("#name").val(),
                  ingredients:$("#ingredients").val(),
                  instructions:$("#instructions").val(),
                  allergies:$("#allergies").prop("checked"),
                  diet:$("#diet").prop("checked")

                  },

            success: function(data){
                if (data.error)
                  alert("bad");
                else
                {
                  let li = document.createElement("li");
                  let ul = document.getElementById("list");
                  li.innerHTML = "Name:" + $("#name").val() + "\nIngredients:" + $("#ingredients").val();
                  li.innerHTML += "Instructions:" + $("#instructions").val();
                  li.innerHTML += "Allergies:" +  $("#allergies").prop("checked");
                  li.innerHTML += "Diet:" + $("#diet").prop("checked");
                  ul.appendChild(li);
                  alert("good");
                }
              } ,
            dataType: "json"
          });
  return false;
}
/*function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {name:$("#name").val()},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  $("#name").val(data.name);
                }
              } ,
            dataType: "json"
          });
  return false;
}

function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {name:$("#name").val(),
                  ingredients:$("#ingredients").val(),
                  instructions:$("#instructions").val(),
                  allergies:$("#allergies").prop("checked"),
                  diet:$("#diet").prop("checked")
            },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,
            dataType: "json"
          });
  return false;
}
/*function deleteClicked(){

    let trimIdentifier = $("#identifier").val().trim();
    if (trimIdentifier == "") {
      alert("bad");
      return false;
    }

    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) {
        if (data.error)
          alert("bad");
        else
          alert("good");
      } ,
      dataType: "json"
    });
    return false;
}
*/

$(document).ready(function(){

  $("#createButton").click(createClicked);
//  $("#readButton").click(readClicked);
//  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

});
