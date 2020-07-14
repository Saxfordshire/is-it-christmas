var date = new Date();

if (date.getMonth() == 11 && date.getDate() == 25){
    document.getElementById("text").innerHTML = "<p>Yes.</p>";
} else {
    document.getElementById("text").innerHTML = "<p>No.</p>";
}