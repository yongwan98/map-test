let map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 17
})

let marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.3595704, 127.105399),
  map: map
})