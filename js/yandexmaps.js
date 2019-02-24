// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
	
	var myMap,
		PlacemarkIrkut,
		PlacemarkLenina;
		
    function init()
	{ 
        // Создание карты.    
        myMap = new ymaps.Map("map", 
		{
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            center: [56.5, 84.98],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });
		
		PlacemarkIrkut = new ymaps.Placemark([56.503905, 85.010040], 
		{
            hintContent: 'Показать адрес',
            balloonContentHeader: 'Моя пиццерия на Иркутах :)',
			balloonContentBody: 'Иркутский тракт, 42'
        });
		
		PlacemarkLenina = new ymaps.Placemark([56.478028, 84.950344], 
		{
            hintContent: 'Показать адрес',
            balloonContentHeader: 'Моя пиццерия на Ленина :)',
			balloonContentBody: 'проспект Ленина, 85А'
        });
            
        myMap.geoObjects.add(PlacemarkIrkut);
		myMap.geoObjects.add(PlacemarkLenina);
    }