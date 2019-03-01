//testing readout of supermarket inventory

//Creating a loop for fruits
var invListF = function (){
    for (let i = 0; i < supermarket[0].fruit.length; i++) {
    $('.item_menu').append(`<li class="fruitlist" value="${supermarket[0].fruit[i]}"> ${supermarket[0].fruit[i]}</button>`);
    };
    };

//Creating a loop for veggies
var invListV = function (){
     for (let i = 0; i < supermarket[1].veggies.length; i++){
     $('.item_menu').append('<li class="veggielist">'+`${supermarket[1].veggies[i]}`+'</li>');    
     } 
     };

//Creating a loop to display the filter menu
var filterList = function () {
    $('.category_menu').append('<li> <a id="fruitSelector" href=#> Fruit </a> </li>'); 
    $('.category_menu').append('<li> <a id="veggieSelector" href=#> Vegetable <a> </li>'); 
    };

//Rendering the complete list
const render = function () {
    $('.item_menu').empty();
    console.log ("Rendered!");
    invListF();
    invListV();
    filterList();
};

render();

//setting up a function to show and hide fruit
var fruitHider = function (){
        $('.fruitlist').toggle('display-none');
        console.log('toggling fruit!')
}

$('#fruitSelector').on('click', fruitHider);

//setting up a function to show and hide vegetables
var veggieHider = function (){
    $('.veggielist').toggle('display-none');
    console.log('toggling veggies!')
}

$('#veggieSelector').on('click', veggieHider);


//setting up array for shopping cart
var shoppingCart = [];

//var renderShoppingCart = function (){
 //   for (let i = 0; i < shoppingCart[i]; i++){
 //    $('.cart_load').append('<li class="cartcheck">'+`${itemLoad}`+'</li>'); 
 //       console.log('Fired off a Shopping Cart Render!');   
  //      } 
// }

//function that checks to see if an item that is selected exists in the shopping cart
$('.item_menu li').click(function() {
    
var itemLoad = $(this).text();
var shoppingCartTest = shoppingCart.includes(itemLoad);

//if an item does not exist then it adds the item into the .cart_load shopping cart div

if (shoppingCartTest == false ) {
    event.preventDefault();    
    shoppingCart.push(`${itemLoad}`);
    console.log('Item Loaded!');
    $('.cart_load').append('<li>'+`${itemLoad}`+'</li>');
    } else if (shoppingCartTest == true) {
    alert('Item Exists!');
    };
   
    
});

//function that removes items from shopping cart
$('.cart_load').on("click", "li", function() {

    console.log('just fired function to clear an item from cart');
    
    var itemCheck = $(this).text();
    
    console.log(itemCheck)

    for (let i = 0; i < shoppingCart.length; i++){
        if (itemCheck==shoppingCart[i]){
            console.log(`Just removed ${shoppingCart[i]}`);
            shoppingCart.splice(i,1);
            $(this).remove();

            

        }
    }
});

//

///requirements
///List of items on left side of page when user enters page
        /// Items belong in categories.  When you select category the view changes to only show you items in that category.

///when an item is clicked it is then added to the right
        ///IF Item exists then the app alerts the user that the item has already been added
        ///Items in shopping card can be removed through a click
        /// Once an item has been removed it can be readded


        ///Array of objects, category.item


        ///styling: retro 80s department store