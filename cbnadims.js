<style>
table
{
border-collapse:collapse;
width: 500px;
}
table
{
border: 1px solid gray;
}
th, td
{
padding: 5px;
}
th
{
background-color: orange;
color: white;
}
tr
{
background-color: white;
} 
tr:nth-child(odd)
{
background-color: #EEE;
}
.expiry
{
color: red;
} 
</style>

<script src="http://www.parsecdn.com/js/parse-1.2.7.min.js"></script>
<script>
Parse.initialize("7sA2M9r2w2WWCxs2nR3jEOOgOiTqyqK2aTNZZOlB", "KGuRw15YFMgdra1ErWrblkWsETTk4bReyfTE5Tlj");
var currentUser = Parse.User.current();
if (currentUser) {
  var loggedUser = currentUser.get("username");
  $("#results").append("Current User: <strong>"+loggedUser+"</strong>");
} else {
  //alert("Please Log-in to view this page.");
  window.location="http://cbnadims.blogspot.com/2013/09/log-in-advisory.html";
}
</script>
