export function center(positions = []) {
  let center = { latitude: 0, longitude: 0 }

  if (positions.length > 0) {

    positions.map(pos => {
      center.latitude += pos?.Position?.PositionLat || 0
      center.longitude += pos?.Position?.PositionLon || 0
    })
    
    center.latitude /= positions.length
    center.longitude /= positions.length
  }

  return center
}

export const zoomLevel = {
  area: 8,
  spot: 13,
}
