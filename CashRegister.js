// JavaScript Document

function store(storeNum, address, phonNum, email){
	this.storeNum = new Number;
	this.address = "";
	this.phonNum = "000-000-0000";
	this.email = "";
	this.catagory = ""; 
}

function employee(name, lastname, position, empNum, phonNum, discount){
	this.name = "";
	this.lastname = "";
	this.position = "";
	this.empNum = new Number;
	this.phonNum = "000-000-0000";
	this.discount = new Number;
}

function product(name, prodNum, SKU, qte, wholePrice, marketPrice, salePrice){
	this.name = "";
	this.prodNum= new Number;
	this.SKU = "";
	this.qte = new Number;
	this.wholePrice = new Number;
	this.marketPrice = new Number;
	this.salePrice =new Number;
}

function receipt(receiptNum, dateTime, numItems, subTotal, tax, total, payMethod){
	this.receiptNum = new Number;
	this.dateTime = new Date(day,month,year[hour,min]); 
	this.numItems = new Number;
	this.subTotal = new Number;
	this.tax = new Number;
	this.total = new Number;
	this.payMethod = "";
	
}

function promo(name, code, expire, condition){
	this.name = "";
	this.code = new Number;
	this.expire = new Date;
	this.condition = "";
}

function coupon(name, code, expire, condition){
	this.name = "";
	this.code = new Number;
	this.expire = new Date;
	this.condition = "";
}

function cashRegister(){
	
	//Example of storeInfo constructor
	var store0001 = new store(0001, "2367 Sherbrooke O, H9J2W5, Montreal, QC", "514-965-0256", "store0001@gmail.com"); 
	
	//Example of empList constructor
	var Melissa = new employee("Melissa", "Lapointe" ,"Assistant Manager", 59302, "514-965-0256", 50); 
	
	//Example of item constructor
	var redPumps = new product("Dahlia Red Pumps", 53608, 45010564823, 302, 28.56, 89.00, 0);
	
	//Example of receipt constructor
	var receipt001 = new receipt(0236,  "20/06/2014 2:63 pm" , 4, 23.50, 3.52, 27.02, "Credit" );
	
	//Example of promo constructor
	var promo02 = new promo("Two4One", 503820, "20/06/2014 2:63 pm", "Only 2 per person");
	
	//Example of coupon constructor
	var coupon04 = new coupon("50% Off", 5898123, "20/06/2014 2:63 pm", "Must be on items 30$ or over");
		
	var typeCard = [];
	
	var subTotal = new Number;
	var GSTtax = 0.05;;
	var QSTtax = 0.09975;
	var total = new Number;
	
	function init(){ //onLoad of body
		mainLogin(); // call function mainLogin
		// when function mainLogin is done => call function strtDay
	}
	
	function mainLogin(){ 
		// prompt employee login/password | if employee has correct access number then continue, if false = reset
			function resetMainLogin(){ //if main login info is false
			} 
		function prevDay(){ //the closedDay function of the day before
			function verifyPrevDay(){} //to verify if we were not robbed 
		}
		function setCashReg(){} //to set the cash ammount for the register
	}
	/****************************************************************************** STARTING THE DAY ******************************************/
	
	function strtDay(){
		function empTime(){ 
			//stores the hours of the employees by using the functions empIn and empOut
			function empIn(){} //punching in with the employee number to start work
			function empOut(){} //punching out with the employee number to end work
		}
		
		function empLogin(){ 
			//login for employee on the cash register
			displayTrans(); //calls the function displayTrans
			
		}
		
		function empLogout(){
			//for the employees to logout on the cash register 
			//once complete call function empLogin or function closeDay
		}
	}
	
	function displayTrans(){
		
		function scanItem(){	
			//if statement if the item exists in our database. true = addItem, false = unknownItem
			function addItem(){ 
			//adds to function displayTrans
			}
			
			function unknownItem(){ 
				//adds an unknown item to the item database
				function unknownItemAuth(){ 
					//prompts a password needed to authorize the item
					function addUnknownItem(){ 
						//adds the unknown item to transaction
					}
				}
			}
		}
		
		//call function applyCoupon or applyPromo when button is selected
		//call function remove or applyPromo when button is selected
	}
	
	

	function addRewardCard(){
		//when this fonction is complete, then you will click to add an amount and to activate it.
			 function activateRewardCard(){
			 	//add the activate number to our database
			 }
	}
		
	function addGiftCard(){
		//when this function is complete, then you will click to add an amount and to activate it.
		function addGiftAmount(){
		 	//the customer will choose an amount for the gift card and then we will submit it.
		}
		function activateGiftCard(){
			//add the activate number to our database
		}
	}
	
	
	function removeItems(){} //to remove an item from displayTrans function
	
	function cancelTrans(){} //to cancel displayTrans function
	
	function returnItem(){
		function scanReturnItem() {
			// Scan the return item
		}
		function verifyReturnExp(){	
			// verify if the customer exceed the expiration  date. If yes, we don't accept it
			// give the money back to the customer.
		}
		function verifyReturnItem(){  
			// if statement if resalable == true continue, add back to stock (item database)
			// if statement if resalable == false, subtract from stock (item database)
			// enter the reason of the return item.
		}
		function cancelReturnItem(){
			//cancels the return transaction
		}
	}
	
	/******************************************************************************  FOR ALL DISCOUNTS ******************************************/
	
	function applyCoupon(){	
		function verifyCoupon(){}// the function validate the coupon Id = true
		function verifyExpDate (){}// the function verify the expiring date = false
		function cancelCoupon(){} // is called when the coupon is not valid or past the expiry date
	}
	
	function applyPromo(){
		function verifyPromo(){} //  the function validate the promo Id = true
		function verifyExpDate (){} // the function verify the expiring date = false
		function cancelPromo(){} // is called when the coupon is not valid or past the expiry date
	}
	
	// if statement for validation and expiration date = true => call function applyPromo
	function empDiscount(){
		function empDiscountLogin(){}
	}
	
	function payMethod(){
		//select button: credit card, debit card, cash, gift or rewards
		
		//if cash button selected then call function payCash
			function payCash(){
				//add transaction number
				//total - customer money = change
			}
		//if credit button selected then call function payCash
			function payCredit(){
				//add transaction number
				//select typeCard
				function refCredit(){
					//print reference number of the receipt from card machine to our transcation number.
				}
			}
			
		//if debit button selected then call function payDebit
			function payDebit(){
				//add transaction number
				function refDebit(){
					//print reference number of the receipt from card machine to our transcation number.
				}
			}				
			
		//if balance =/= 0 then call function payCash or payCard
		
		//when payment goes through call function printReceipt
	}
	
	/****************************************************************************** FOR ALL TRANSACTIONS ******************************************/
	
	
	function printReceipt(){
		/*
		print greeting
		print information (date/time, address, logo, number, e-mail)
		print scanned items (function scanItem)
		print addDiscount
		print subtotal
		print tax
		print total
		print transactionNum
		print reference number if exists 
		*/
	}
	
	function dayStatus(){
		/*
		display all transactions
			display all function payCash subtract from function setCashReg
		display all function payCard
			display all credit card type
			display all debit card type
		display subtracted items bought from itemList (inventory that is left)
		*/	
	}
	
	function printTransaction(){
		//this function will print a receipt of all function displayTrans and types of paymethod	
	}
	
	/****************************************************************************** END OF DAY ******************************************/
	
	function closeDay(){
		//prompt employee login/password | if employee has correct access number then continue, if false = reset
		//display dayStatus
		//prompt employee if print dayStatus if false leave on screen
		
		function verifyCloseDay(){
			/* 
			prompt employee if
				- all cash transactions are correct, 
				- all credit card transactions are correct
				- all debit card transactions are correct
			
			if false, input difference of
				- cash transaction
				- credit transaction
				- debit transaction
			*/
		}
	}
}