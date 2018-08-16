// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

export const COORDINATES = {
  GEOGRAPHIC: 'geographic',
  MAP_RELATIVE: 'map_relative',
  VEHICLE_RELATIVE: 'vehicle_relative',
  CUSTOM: 'custom'
};

export const VIEW_MODES = {
  TOP_DOWN: {
    name: 'map',
    initialProps: {
      minZoom: 12,
      maxZoom: 24,
      minPitch: 0,
      maxPitch: 0,
      pitch: 0,
      zoom: 20
    },
    orthographic: true
  },
  PERSPECTIVE: {
    name: 'map',
    initialProps: {
      minZoom: 12,
      maxZoom: 24,
      minPitch: 0,
      maxPitch: 85,
      pitch: 60,
      zoom: 20
    }
  },
  DRIVER: {
    name: 'driver',
    initialProps: {
      minPitch: 0,
      maxPitch: 0,
      pitch: 0
    },
    firstPerson: {
      position: [0, 0, 1.5]
    },
    mapInteraction: {
      dragPan: false,
      scrollZoom: false
    },
    tracked: true
  }
};