const initMap = () => {
  const mapContainer = document.querySelector('.map');

  if (!mapContainer) {
    return;
  }

  const branches = [
    [54.897521, 38.061196]
  ];

  ymaps.ready(function () {
    const map = new ymaps.Map(mapContainer, {
      center: [54.897521, 38.061196],
      zoom: 17,
    });

    map.behaviors.disable('scrollZoom');

    let gCollection = new ymaps.GeoObjectCollection();

    branches.forEach((branch) => {
      gCollection.add(new ymaps.Placemark(branch, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/pin.svg',
        iconImageSize: [76, 76],
        iconImageOffset: [-5, -100],
      }));
    });

    map.geoObjects.add(gCollection);

    if (window.matchMedia('(max-width: 768px)').matches) {
      map.behaviors.disable('drag');
    }
  });
};

export {initMap};
