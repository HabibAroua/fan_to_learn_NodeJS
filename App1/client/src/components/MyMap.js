import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MyMap extends  React.Component
{
    render()
    {
        var points = [
            { lat: 36.8690271, lng: 10.1962198 },
            { lat: 36.8690272, lng: 10.1962199 },
            { lat: 36.8690273, lng: 10.1962200 },
            { lat: 36.8690274, lng: 10.1962201 }
        ]
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++)
        {
            bounds.extend(points[i]);
        }
        return(
            <div style={{width: '50px', height: '50px'}}>
                <Map google={this.props.google}

                     className={'map'}
                     zoom={10}>
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{lat: 37.778519, lng: -122.405640}} />
                    <Marker
                        title={'The marker`s title will appear as a '}
                        name={'Dolores park'}
                        position={{lat: 37.759703, lng: -122.428093}} />
                    <Marker />
                    <Marker
                        title={'The marker`s title wvxvxvx'}

                        name={'Your position'}
                        position={{lat: 37.762391, lng: -122.439192}}
                        icon={{
                            url: "/path/to/custom_icon.png",
                            anchor: new window.google.maps.Point(32,32),
                            scaledSize: new window.google.maps.Size(64,64)
                        }} />
                </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBSsKUzYG_Wz7u2qL6unHqfBOmvaZ0H1Mg&callback")
})(MyMap)