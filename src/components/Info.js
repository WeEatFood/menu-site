import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import '../scss/info.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHlhZGFkYSIsImEiOiJja2hxd2ptYWYwMTE4MnFvNXFkd2NtanlyIn0.6qCzdr06dzoP5Gp5YLPDJQ'

class Info extends Component {
  // var
  // marker = new mapboxgl.Marker()
  //   .setLngLat([-105.26701, 40.02291])
  //   .addTo(map)

  constructor (props) {
    super(props)

    this.state = {
      lng: -105.26701,
      lat: 40.02291,
      zoom: 16
    }
  }

  componentDidMount () {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })

    map.on('load', function () {
      map.loadImage(
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png',
        function (error, image) {
          if (error) throw error
          map.addImage('cat', image)
          map.addSource('point', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [0, 0]
                  }
                }
              ]
            }
          })
          map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point',
            'layout': {
              'icon-image': 'cat',
              'icon-size': 0.25
            }
          })
        }
      )
    })
  }

  render () {
    return (
      <div className="info__container">
        <div className="sidebarStyle">
          <div>Longitude: { this.state.lng } | Latitude: { this.state.lat } |
            Zoom: { this.state.zoom }</div>
        </div>
        <div ref={ el => this.mapContainer = el } className="mapContainer"/>
      </div>
    )
  }
}

export default Info
