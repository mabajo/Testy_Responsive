
describe('Zakup krawata o wybranych parametrach', function() {
var parametry = require('./parametry_testow/parametry.json');


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//***************DATA DRIVEN - DWA ROZWIĄZANIA - ******************************************************//
//***************ROZWIĄZANIE 1  - PARAMETRY ROZDZIELCZOŚCI EKRANU POBIERANE Z PLIKU JSON***************//
//***************ROZWIĄZANIE 2  - PARAMETRY POSZCZEGÓLNYCH TESTÓW POBIERANE Z PLIKU CONFIG*************//
/////////////////////////////////////////////////////////////////////////////////////////////////////////

	
	parametry.forEach( function (data) {
		
	    it('sprawdzenie tytułu', function() {
	    	//ustawienie rozmiaru okna przeglądarki
		    browser.manage().window().setSize(data.szer,data.wys);
		    
		    
			browser.ignoreSynchronization = true; //w przypadku gdy web nie ma Angulara
		    browser.get('http://skinnyties.com/');
		   //sprawdzenie tytułu
		   expect(browser.getTitle()).toEqual('Skinny Ties | Nothing but skinny ties.');
		   console.log("Test 1 - weryfikacja tytułu");
		   	});
	    
	    
//////////////////////////////////////////////////////////////////////////////////////////	    
	    
	    
	    it('weryfikacja istnienia kategorii', function() {
	    	  	
			expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true); 
	    	//expect(element(by.cssContainingText('.tie', 'Graphic')).isDisplayed()).toBe(true); 
			console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
			//console.log("Test 2 - weryfikacja istnienia kategorii", 'Graphic');
	    	
	    });
	    
	    
/////////////////////////////////////////////////////////////////////////////////////////  
	      
	    
	    it(' wybranie kategorii krawatów', function() {
	    	element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).click();
	    	console.log("Test 3 - wybranie kategorii krawatów", browser.params[0].styl_krawata)
	    });
	  
	    //////////////////////////////////////////////////////////////////////////////////////////	    
	    
	    
	    
	    it(' sprawdzenie czy otworzyła się strona z kategorią', function() {
	    	var tytul = element(by.id('category-landing'));
	    	expect(tytul.getText()).toEqual(browser.params[0].styl_krawata + " " + "Skinny Ties");
	    	console.log("Test 4 - sprawdzenie czy otworzyła się strona z kategorią", browser.params[0].styl_krawata)
	    });
	    
//////////////////////////////////////////////////////////////////////////////////////////	    
	    
	   
	    it('sprawdzenie czy widoczne sa kategorie filtru', function() {
	    	//kliknij filtry
	    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
	    	//czy widoczna kategoria
	    	expect(element(by.cssContainingText('.filter-title', 'Color')).isDisplayed()).toBe(true);
	     	expect(element(by.cssContainingText('.filter-title', 'Width')).isDisplayed()).toBe(true);
	     	expect(element(by.cssContainingText('.filter-title', 'Fabric')).isDisplayed()).toBe(true);
	     	expect(element(by.cssContainingText('.filter-title', 'Length')).isDisplayed()).toBe(true);
	    	
	    	console.log("Test 5 - sprawdzenie czy widoczne sa kategorie filtrów"); 
	    		    	
	    });
///////////////////////////////////////////////////////////////////////////////////////////
	    
	    it('wybranie filtru - kolor', function() {
	    	//sprawdź czy istnieje i kliknij kolor
	    	expect(element(by.cssContainingText('.filter-title', 'Color')).isDisplayed()).toBe(true);
	    	browser.findElement(by.css(browser.params[0].kolor_krawata)).then(function(webElement) {
	    		element(by.css(browser.params[0].kolor_krawata)).click();
	    		console.log("Test 6 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].kolor_krawata );
	    	
	    		
	        }, function(err) {
	            if (err.state && err.state === 'no such element') {
	                console.log("Test 6 - filtr",browser.params[0].kolor_krawata, "nie jest dostępny");
	            } else {
	               promise.rejected(err);
	            }
	        }); 
	    	   	
	        });
	    	
///////////////////////////////////////////////////////////////////////////////////////////
	    
	    it('wybranie filtru - szerokosc', function() {
	    	//kliknij filtry
	    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
	    	//sprawdź czy istnieje i kliknij kolor
	    	expect(element(by.cssContainingText('.filter-title', 'Width')).isDisplayed()).toBe(true);
	    	browser.findElement(by.css(browser.params[0].szerokosc_krawata)).then(function(webElement) {
	    		element(by.css(browser.params[0].szerokosc_krawata)).click();
	    		console.log("Test 7 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].szerokosc_krawata);
	    	
	    		
	        }, function(err) {
	            if (err.state && err.state === 'no such element') {
	                console.log("Test 7 - filtr ",browser.params[0].szerokosc_krawata,  " nie jest dostępny");
	            } else {
	               promise.rejected(err);
	            }
	        }); 
	    	   	
	        });
	    
///////////////////////////////////////////////////////////////////////////////////////////
	    
	    it('wybranie filtru - tkanina', function() {
	    	//kliknij filtry
	    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
	    	//sprawdź czy istnieje i kliknij tkaninę
	    	expect(element(by.cssContainingText('.filter-title', 'Fabric')).isDisplayed()).toBe(true);
	    	browser.findElement(by.css(browser.params[0].tkanina_krawata)).then(function(webElement) {
	    		element(by.css(browser.params[0].tkanina_krawata)).click();
	    		console.log("Test 8 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].tkanina_krawata);
	    	
	    		
	        }, function(err) {
	            if (err.state && err.state === 'no such element') {
	                console.log("Test 8 - filtr ",browser.params[0].tkanina_krawata ," nie jest dostępny");
	            } else {
	               promise.rejected(err);
	            }
	        }); 
	    	   	
	        });
	    	
///////////////////////////////////////////////////////////////////////////////////////////

	    
	    it('wybranie filtru - długość', function() {
	    	//kliknij filtry
	    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
	    	//sprawdź czy istnieje i kliknij tkaninę
	    	expect(element(by.cssContainingText('.filter-title', 'Length')).isDisplayed()).toBe(true);
	    	browser.findElement(by.css(browser.params[0].dlugosc_krawata)).then(function(webElement) {
	    		element(by.css(browser.params[0].dlugosc_krawata)).click();
	    		console.log("Test 9 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].dlugosc_krawata);
	    	    		
	        }, function(err) {
	            if (err.state && err.state === 'no such element') {
	                console.log("Test 9 - filtr ",browser.params[0].dlugosc_krawata ," nie jest dostępny");
	            } else {
	               promise.rejected(err);
	            }
	        }); 
	    	   	
	        });
	    
///////////////////////////////////////////////////////////////////////////////////////////
	    	    
	    it('wybranie szczegółów krawata', function() {
	    	
	    	//kliknij wybrany krawat (dla przykładu pierwszy który się wyświetlił
	       browser.findElement(By.className('product-grid')).findElements(By.tagName('a')).then(function(links){
		links[0].click();
	       });
	    
	    	console.log("Test 10 - wybranie szczegółów pierwszego wyświetlonego krawata")
	    	
	    	
	    	//browser.findElement(By.xPath('/html/body/div[1]/div[2]/div/div[1]/div/h1/span')).then(function(Webelement) {
	    		//var tekst = element(By.xPath('/html/body/div[1]/div[2]/div/div[1]/div/h1/span')).getText();
	    		//console.log(tekst);
	    	//});
	    	
	    	//console.log(nazwa_krawata);
	    }); 
	    
///////////////////////////////////////////////////////////////////////////////////////////	    
	   	
	    it('wybranie ilości krawatów do zakupu', function() {
	    	//wyczyszczenie pola
	    	element(by.id("qty")).clear();
	    	//wpisanie w pole ilości krawatów wybranej liczby
	    	element(by.id("qty")).sendKeys(browser.params[0].ilosc_krawatow);

	    	console.log("Test 11 - wybranie ilości krawatów do zakupu", browser.params[0].ilosc_krawatow);
	    });
///////////////////////////////////////////////////////////////////////////////////////////	 
	    
	    it('dodanie zakupów do koszyka', function() {
	    	element(by.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div/div/form/div[2]/div/button")).click();
	    	console.log("Test 12 - dodanie zakupów do koszyka")
	    	//expect(element(by.css('product-name')).getText()).toEqual(tekst);
	    });
///////////////////////////////////////////////////////////////////////////////////////////	   
	    
	    it('przejście do finalizacji transakcji', function() {
	    	element(by.xpath("/html/body/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/button")).click();
	    	console.log("Test 13 - przejście do finalizacji transakcji - checkout")
	    });
	    
///////////////////////////////////////////////////////////////////////////////////////////	       
	    
	    it('wpisanie danych logowania', function() {
	    	element(by.xpath("//*[@id='login-email']")).sendKeys(browser.params[0].login);
	    	element(by.xpath("//*[@id='login-password']")).sendKeys(browser.params[0].haslo);
	    	  console.log("Test 14 - wpisanie danych logowania",browser.params[0].login, browser.params[0].haslo )
	    	  });
	  
///////////////////////////////////////////////////////////////////////////////////////////	  
	    
	});
	

});




