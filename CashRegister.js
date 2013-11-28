function CashRegister(){
//Janet testing testing 123
//melissa testing

	// JavaScript Document
	var storeInfo = { //Database for information on the store
		name: "",
		address: "",
		phonenumber: "",
		email:""
		};
	
	var empList = { 	//Databases of the employees
		name:"",
		lastname: "",
		empNum: 0
		}; 
		
	var itemList = { 	//Database of items
		itemName: "",
		itemSKU: "",
		itemInv: 0
		};
		
	var promoList = { 	//Database of promotions
		promoName:"",
		promoCode:"",
		promoExp:"",
		promoCond:"" //promo condition can be added later
		};
		
	var couponList = { 	//Database of coupons
		couponName:"",
		couponCode:"",
		couponExp:"",
		couponCond: "" //coupon condition can be added later
		};
		
	var transactionNum = { 	//Database of all transactions
		transNum:"",
		numOfItem:0,
		transTotal: 0.00,
		
		};	
		
	var typeCard = { //database of the types of payment cards (credit,debit,gift)	
		typeCard: "",
		Company: "",
		
		}; 
	
	var subTotal;
	var tax;
	var total;
	
	function init(){ //onLoad of body
		//call function mainLogin
		// when function mainLogin is done => call function strtDay
	};
	
	function mainLogin(){ 
		//prompt employee login/password | if employee has correct access number then continue, if false = reset
			function resetMainLogin(){ //if false
			}; 
		function prevDay(){ //the closedDay function of the day before
			function verifyPrevDay(){}; //to verify if we were not robbed 
		};
		function setCashReg(){}; //to set the cash ammount for the register
	};
	/****************************************************************************** STARTING THE DAY ******************************************/
	
	function strtDay(){
		function empTime(){ //object of database
			//stores the hours of the employees by empList by subtraction empOut with empIn
			
			function empIn(){}; //punching in with the employee number to start work
			function empOut(){}; //punching out with the employee number to end work
		}; 
		
		function empLogin(){ 
			//login for employee on the cash register
			//call displayTrans
		};
		
		function empLogout(){
			//for the employees to logout on the cash register 
			//once complete call function empLogin or function closeDay
		};
	};
	
	function displayTrans(){
		//call function scanItem
		//call function coupon/promo
		//variable of subtotal from adding all items and discount
		//add tax
		//display total 
	};
	
	function scanItem(){	
		//if statement if the item exists in our database. true = addItem, false = unknownItem
		function addItem(){}; //adds to function displayTrans
		
		function unknownItem(){ //adds an unknown item to the itemList database
			function itemAuth(){
				//call addItem to add the item to function displayTrans
			};
		};
		
	};
	
	function setGiftCard(){
		//swipe card
		//add ammount
		//activate card
		//call function addItem
		//call function payMethod
	};
	
	function removeItems(){}; //to remove an item from displayTrans function
	
	function cancelTrans(){}; //to cancel displayTrans function
	
	function returnItem(){
		// if statement if resalable == true continue, add back to stock (itemList database)
		// if statement if resalable == false, subtract from stock (itemList database)
		}; 
	
	
	/******************************************************************************  FOR ALL DISCOUNTS ******************************************/
	
	function addDiscount(){}; //add discount (promo/coupon) to the subtotal
	
	function coupon(){
		// if statement for validation and expiration date = true => call function addDiscount
	};
	
	function promo(){
		// if statement for validation and expiration date = true => call function addDiscount	
	};
	
	function empDiscount(){
		function empDiscountLogin(){};
	};
	
	function payMethod(){
		//select button: credit card, debit card, cash or gift card
		
		//if cash button selected then call function payCash
			function payCash(){
				//add transaction number
				//total - customer money = change
			};
		//if credit button selected then call function payCash
			function payCredit(){
				//add transaction number
				//select typeCard
				function refCredit(){
					//print reference number of the receipt from card machine to our transcation number.
				};
			};
			
		//if debit button selected then call function payDebit
			function payDebit(){
				//add transaction number
				function refDebit(){
					//print reference number of the receipt from card machine to our transcation number.
				};
			};		
			
			
			
		//if balance =/= 0 then call function payCash or payCard
		
		//when payment goes through call function printReceipt
	};
	
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
	};
	
	function dayStatus(){
		/*
		display all transactions
			display all function payCash subtract from function setCashReg
		display all function payCard
			display all credit card type
			display all debit card type
		display subtracted items bought from itemList (inventory that is left)
		*/	
	};
	
	function printTransaction(){
		//this function will print a receipt of all function displayTrans and types of paymethod	
	};
	
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
