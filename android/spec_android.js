
describe('Zakup krawata o wybranych parametrach', function() {


		
	it('sprawdzenie tytułu', function() {
    	//ustawienie rozmiaru okna przeglądarki.
	    //browser.manage().window().setSize(data.szer,data.wys);
	    
	    
		browser.ignoreSynchronization = true; //w przypadku gdy web nie ma Angulara
	    browser.get('http://skinnyties.com/');
	   //sprawdzenie tytułu
	   expect(browser.getTitle()).toEqual('Skinny Ties | Nothing but skinny ties.');
	   console.log("Test 1 - weryfikacja tytułu");
	   	});
    
    
//////////////////////////////////////////////////////////////////////////////////////////    
    
    
    it('weryfikacja istnienia kategorii', function() {
    	browser.driver.sleep(2000);
    	//w przypadku androida, strona dostosowuje się w taki sposób, że aby zobaczyć kategorie krawatówm, należy klikać na przewijające strzałki
    	
    	    	
    	switch(browser.params[0].styl_krawata) {
    	
    	case 'Black':
    		expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true); 
    		console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;
    	
    	case 'Blue':
    		expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true); 
    		console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;
    	
    	case 'Collegiate':
    		expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true);
    		console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;
    		
    	case 'Cotton':
    		expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true); 
    		console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;
    	
    	case 'Graphic':
    		element(by.xpath("/html/body/div/div[2]/div/div[1]/div[1]/ul/li[2]/a")).click().click(); 
    		expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true); 
    		console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;
    		
    	case 'Plaid':	
    		element(by.xpath("/html/body/div/div[2]/div/div[1]/div[1]/ul/li[2]/a")).click().click(); 	
    		expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true); 
    		console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;
    		
    		
    	case 'Silk':	
    		element(by.xpath("/html/body/div/div[2]/div/div[1]/div[1]/ul/li[2]/a")).click().click().click(); 
    		expect(element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).isDisplayed()).toBe(true); 
    		console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;
    	
    	case 'Striped':	
    		element(by.xpath("/html/body/div/div[2]/div/div[1]/div[1]/ul/li[2]/a")).click().click().click(); 
    			console.log("Test 2 - weryfikacja istnienia kategorii", browser.params[0].styl_krawata);
    		break;	
    		
    	}
    	  	
    }); 
    	
    	   
    
/////////////////////////////////////////////////////////////////////////////////////////  
      
    
    it(' wybranie kategorii krawatów', function() {
    	browser.driver.sleep(2000);
    	element(by.cssContainingText('.tie', browser.params[0].styl_krawata)).click();
    	console.log("Test 3 - wybranie kategorii krawatów", browser.params[0].styl_krawata)
    });
  
    //////////////////////////////////////////////////////////////////////////////////////////	    
    
    
    
    it(' sprawdzenie czy otworzyła się strona z kategorią', function() {
    	browser.driver.sleep(2000);
    	var tytul = element(by.id('category-landing'));
    	expect(tytul.getText()).toEqual(browser.params[0].styl_krawata + " " + "Skinny Ties");
    	console.log("Test 4 - sprawdzenie czy otworzyła się strona z kategorią", browser.params[0].styl_krawata)
    });
    
//////////////////////////////////////////////////////////////////////////////////////////    
    
   
    it('sprawdzenie czy widoczne sa kategorie filtru', function() {
    	//kliknij filtry
    	browser.driver.sleep(2000);
    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
    	//czy widoczna kategoria
    	expect(element(by.cssContainingText('.filter-title', 'Color')).isPresent()).toBe(true);
     	expect(element(by.cssContainingText('.filter-title', 'Width')).isPresent()).toBe(true);
     	expect(element(by.cssContainingText('.filter-title', 'Fabric')).isPresent()).toBe(true);
     	expect(element(by.cssContainingText('.filter-title', 'Length')).isPresent()).toBe(true);
    	
    	console.log("Test 5 - sprawdzenie czy widoczne sa kategorie filtrów"); 
    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();	    	
    });
///////////////////////////////////////////////////////////////////////////////////////////
    
    it('wybranie filtru - kolor', function() {
    	//sprawdź czy istnieje i kliknij kolor
    	browser.driver.sleep(2000);
    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
    	expect(element(by.cssContainingText('.filter-title', 'Color')).isPresent()).toBe(true);
    	
    	
    	browser.findElement(by.css(browser.params[0].kolor_krawata)).then(function(webElement) {
    		element(by.css(browser.params[0].kolor_krawata)).click();
    		console.log("Test 6 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].kolor_krawata );
    	    		
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log("Test 6 - filtr",browser.params[0].kolor_krawata, "nie jest dostępny");
                element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click(); 	
            } else {
               promise.rejected(err);
            }
        }); 
    	
    	
    	
    	
    	
    	
        });
    	
///////////////////////////////////////////////////////////////////////////////////////////
    
   it('wybranie filtru - szerokosc', function() {
    	//kliknij filtry
	   browser.driver.sleep(2000);
    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
    	//sprawdź czy istnieje i kliknij kolor
    	expect(element(by.cssContainingText('.filter-title', 'Width')).isPresent()).toBe(true);
    	browser.findElement(by.css(browser.params[0].szerokosc_krawata)).then(function(webElement) {
    		element(by.css(browser.params[0].szerokosc_krawata)).click();
    		console.log("Test 7 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].szerokosc_krawata);
    	
    		
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log("Test 7 - filtr ",browser.params[0].szerokosc_krawata,  " nie jest dostępny");
                element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click(); 	
            } else {
               promise.rejected(err);
            }
        }); 
   
        });
    
///////////////////////////////////////////////////////////////////////////////////////////
    
    it('wybranie filtru - tkanina', function() {
    	//kliknij filtry
    	browser.driver.sleep(2000);
    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
    	//sprawdź czy istnieje i kliknij tkaninę
    	expect(element(by.cssContainingText('.filter-title', 'Fabric')).isPresent()).toBe(true);
    	browser.findElement(by.css(browser.params[0].tkanina_krawata)).then(function(webElement) {
    		element(by.css(browser.params[0].tkanina_krawata)).click();
    		console.log("Test 8 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].tkanina_krawata);
    	
    		
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log("Test 8 - filtr ",browser.params[0].tkanina_krawata ," nie jest dostępny");
                element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click(); 	
            } else {
               promise.rejected(err);
            }
        }); 
    	 	
        });
    	
///////////////////////////////////////////////////////////////////////////////////////////

    
    it('wybranie filtru - długość', function() {
    	//kliknij filtry
    	browser.driver.sleep(2000);
    	element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click();
    	//sprawdź czy istnieje i kliknij tkaninę
    	expect(element(by.cssContainingText('.filter-title', 'Length')).isPresent()).toBe(true);
    	browser.findElement(by.css(browser.params[0].dlugosc_krawata)).then(function(webElement) {
    		element(by.css(browser.params[0].dlugosc_krawata)).click();
    		console.log("Test 9 - sprawdzenie czy jest dostępny filtr i wybranie",browser.params[0].dlugosc_krawata);
    	    		
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log("Test 9 - filtr ",browser.params[0].dlugosc_krawata ," nie jest dostępny");
                element(by.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div[1]/h2/a")).click(); 	
            } else {
               promise.rejected(err);
            }
        }); 
    	 	
        });
    
///////////////////////////////////////////////////////////////////////////////////////////
    	    
    it('wybranie szczegółów krawata', function() {
    	browser.driver.sleep(2000);
    	//kliknij wybrany krawat (dla przykładu pierwszy który się wyświetlił
       browser.findElement(By.className('product-grid')).findElements(By.tagName('a')).then(function(links){
	links[0].click();
       });
    
    	console.log("Test 10 - wybranie szczegółów pierwszego wyświetlonego krawata")
        
    	   }); 
    
///////////////////////////////////////////////////////////////////////////////////////////	    
   	
    it('wybranie ilości krawatów do zakupu', function() {
    	//wyczyszczenie pola
    	browser.driver.sleep(2000);
    	element(by.id("qty")).clear();
    	//wpisanie w pole ilości krawatów wybranej liczby
    	element(by.id("qty")).sendKeys(browser.params[0].ilosc_krawatow);

    	console.log("Test 11 - wybranie ilości krawatów do zakupu", browser.params[0].ilosc_krawatow);
    });
///////////////////////////////////////////////////////////////////////////////////////////	 
    
    it('dodanie zakupów do koszyka', function() {
    	browser.driver.sleep(2000);
    	element(by.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div/div/form/div[2]/div/button")).click();
    	console.log("Test 12 - dodanie zakupów do koszyka")
    	//expect(element(by.css('product-name')).getText()).toEqual(tekst);
    });
///////////////////////////////////////////////////////////////////////////////////////////	   
    
    it('przejście do finalizacji transakcji', function() {
    	browser.driver.sleep(2000);
    	element(by.xpath("/html/body/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/button")).click();
    	console.log("Test 13 - przejście do finalizacji transakcji - checkout")
    });
    
///////////////////////////////////////////////////////////////////////////////////////////	       
    
    it('wpisanie danych logowania', function() {
    	browser.driver.sleep(2000);
    	element(by.xpath("//*[@id='login-email']")).sendKeys(browser.params[0].login);
    	element(by.xpath("//*[@id='login-password']")).sendKeys(browser.params[0].haslo);
    	  console.log("Test 14 - wpisanie danych logowania",browser.params[0].login, browser.params[0].haslo )
    	  });
  
///////////////////////////////////////////////////////////////////////////////////////////	  
    
});


/////\
//var waitForElementPresent = function(locator) {
//	browser.driver.wait(function () {
	     //         var deferred = protractor.promise.defer();
	       //       browser.driver.isElementPresent(locator).then(function (data) {
	         //            deferred.fulfill(data);
	           //   });
	             // return deferred.promise;
	       //});
	//}

	//Przykładowe użycie:

//	waitForElementPresent(by.id("layout"));


