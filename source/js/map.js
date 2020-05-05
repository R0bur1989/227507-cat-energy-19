// ymaps.ready(function () {
// var myMap = new ymaps.Map('map', {
//       center: [59.938635, 30.323118],
//       zoom: 17
//   }, {
//       searchControlProvider: 'yandex#search'
//   }),

//   myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//       hintContent: 'Собственный значок метки',
//       balloonContent: 'Это красивая метка'
//   }, {
//       // тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: 'img/map-pin.png',
//       // Размеры метки.
//       iconImageSize: [55, 53],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-20, -60]
//   });
// myMap.geoObjects
//   .add(myPlacemark)
// });


function mapInit() {
  const screens = {
    sm: 320,
    md: 768,
    xl: 1300,
  };

  const iconSize = {
    sm: [55, 53],
    md: [113, 106],
    xl: [113, 106],
  };

  const iconOffset = {
    sm: [-20, -60],
    md: [-40, -120],
    xl: [-40, -120],
  };

  const mapCenter = {
    sm: [59.938635, 30.323118],
    md: [59.938635, 30.323118],
    xl: [59.938969, 30.319063],
  };

  const mapZoom = {
    sm: 16,
    md: 16,
    xl: 17,
  };

  function getScreenSize() {
    const documentWidth = document.documentElement.clientWidth;

    if (documentWidth < screens.md) {
      return 'sm';
    }

    if (documentWidth < screens.xl) {
      return 'md';
    }

    return 'xl';
  }

  const screenSize = getScreenSize();

  const map = new ymaps.Map(document.querySelector('.map'), {
    center: mapCenter[screenSize],
    zoom: mapZoom[screenSize],
    controls: ['zoomControl'],
  });

  map.container.fitToViewport();
  map.behaviors.disable('scrollZoom');

  function createMarker(screenWidth) {
    return new ymaps.Placemark([59.938635, 30.323118], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: iconSize[screenWidth],
      iconImageOffset: iconOffset[screenWidth],
    })
  }

  let marker = createMarker(screenSize);

  map.geoObjects.add(marker);

  map.events.add('sizechange', (event) => {
    const oldWidth = event.get('oldSize')[0];
    const newWidth = event.get('newSize')[0];

    function updateMarker() {
      map.geoObjects.remove(marker);
      marker = createMarker(getScreenSize());
      map.geoObjects.add(marker);
    }

    if (oldWidth < screens.md && newWidth >= screens.md) {
      updateMarker();
    }

    if (oldWidth >= screens.md && newWidth < screens.md) {
      updateMarker();
    }

    if (oldWidth < screens.xl && newWidth >= screens.xl) {
      map.setCenter(mapCenter.xl, mapZoom.xl);
    }

    if (oldWidth >= screens.xl && newWidth < screens.xl) {
      map.setCenter(mapCenter.md, mapZoom.md);
    }
  });
}

ymaps.ready(mapInit);
