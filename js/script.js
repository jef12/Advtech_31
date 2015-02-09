// JavaScript Document

//make instances of our coin Class
var coin1 = new Coin();
var coin2 = new Coin();
var coin3 = new Coin();
var coin4 = new Coin();
var coin5 = new Coin();
var coin6 = new Coin();
var coin7 = new Coin();

/**
* The Coin class is a blueprint for each coin we generate
* @author James Frye
* @version 1.0, Feb 2015
*/
function Coin(){
	//properties: can have different values for each coin. Start empty:
	this.x;//position on page, left-to-right
	this.y;//position on page, up-to-down
	//property that represents the coin's physical presence on the page
	this.item_on_page;
	/**
	* The create method runs commands that put a graphic on the page
	*/
	this.create = function(){
		//create a tag on the page
		this.item_on_page = document.createElement("img");
		//set up the img tag's characteristics:
		this.item_on_page.src="img/coin.png";
		this.item_on_page.style.position = "absolute";
		//Assume the game area is 800x600. Generate random x,y position 
		this.x = Math.floor(Math.random()*800);
		this.y = Math.floor(Math.random()*600);
		//use that random number to assign the item's "left" CSS property
		this.item_on_page.style.left = this.x + "px";
		
		
		
		
		//use that random number to assign the item's "top" CSS property
		this.item_on_page.style.top = this.y + "px";
		//make the image tag appear on the page
		document.body.appendChild(this.item_on_page);
	}//end method create()
}//end Class Coin

onload=init;

function init(){
	coin1.create();
	coin2.create();
	coin3.create();
	coin4.create();
	coin5.create();
	coin6.create();
	coin7.create();
}