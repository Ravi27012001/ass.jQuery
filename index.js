
// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$("#one").click(function(){
    $("p").hide();
    // $(".my").toggle();
});

$("#two").click(function(){
    $("p").show();
    
});


// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$("#three").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
type:"GET",
success : function(responce){
    console.log(responce);
    document.getElementById("my").innerHTML = responce.title;
}
    })
})  
 
