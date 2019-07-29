(function () {
    var setting = {
        "height": 400,
        "width": 2000,
        "zoom": 16,
        "queryString": "ул. Черкасская, 19, Челябинск, Челябинская обл., Россия",
        "place_id": "ChIJ9y4RA5zsxUMR1uWW7eZU-hA",
        "satellite": false,
        "centerCoord": [55.228506875520004, 61.37618885265204],
        "cid": "0x10fa54e6ed96e5d6",
        "cityUrl": "/russia/chelyabinsk-19829",
        "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
        "embed_id": "59043"
    };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=59043';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();