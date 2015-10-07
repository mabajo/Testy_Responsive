// config.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub', //dla stnadrdowego testu
  
  specs: ['spec_android.js'],

  
  
  
  params: 
 [
          
      {    
	// styl_krawata: 'Black',
	styl_krawata: 'Blue',
	//styl_krawata: 'Collegiate',
	//styl_krawata: 'Cotton',
	//styl_krawata: 'Graphic',
	//styl_krawata: 'Plaid',
	//styl_krawata: 'Silk',
	//styl_krawata: 'Striped',
	 
	//kolor_krawata: '.filter-color-black',
	//kolor_krawata: '.filter-color-blue',
	//kolor_krawata: '.filter-color-brown',
	//kolor_krawata: '.filter-color-gray',
	//kolor_krawata: '.filter-color-green',
	  kolor_krawata: '.filter-color-red',
	//kolor_krawata: '.filter-color-white',
	//kolor_krawata: '.filter-color-yellow'
	
	//szerokosc_krawata: '.filter-width-150inches',
	  szerokosc_krawata: '.filter-width-200inches',
	//szerokosc_krawata: '.filter-width-250inches',
	//szerokosc_krawata: '.filter-width-275inches',
	//szerokosc_krawata: '.filter-width-150inches',
	
	
	tkanina_krawata: '.filter-fabric-cotton',
	//tkanina_krawata: '.filter-fabric-microfiber',
	//tkanina_krawata: '.filter-fabric-silk',
	
	 //dlugosc_krawata: '.filter-length-56inches',
	  dlugosc_krawata: '.filter-length-58inches',
	 //dlugosc_krawata: '.filter-length-59inches',
	
	 ilosc_krawatow: 3,
	 login: 'test@gmail.com',
     haslo: '3987540',
      },
     ],
	}	

 		
   





