---
title: "Data"
date: 2021-03-01T12:00:00-05:00
description: "DataWave Resources and Links"
featured_image: "/images/button_i.jpg"
---
{{< rawhtml >}}
<div>
<head>
   <style type="text/css">
    td, th {border: 1px solid black;} table { border-collapse: collapse; }
   </style> 
</head>
<body>
 <table>
 <caption>High Resolution Model Inputs</caption>
  <tr>
     <th>Model</th>
     <th>Top</th>
     <th># Vertical Levels</th>
     <th>Time Length</th>
     <th>Vertical/ Horizontal Res.</th>
     <th>Time Res.</th>
     <th>Target GCM Spacing</th>
     <th>Filter Method Notes</th>
  </tr>
  <tr>
     <td>ICON</td>
     <td>75 km</td>
     <td>90</td>
     <td>6 yrs</td>
     <td>5 km (r2b9)</td>
     <td>3 hrs</td>
     <td>100 km</td>
     <td>from Healpix grid, transform to spectral space and then follow same steps as ICON 2.5km simulation</td>
  </tr>
  <tr>
     <td>ICON</td>
     <td>75 km</td>
     <td>90</td>
     <td>1 week</td>
     <td>2.5 km (r2b9)</td>
     <td>3 hrs</td>
     <td>100 km</td>
     <td>Remap to Gaussian (n1024 via first order conservative remapping); In spectral space, taper to zero starting at 950km and completely zeroing out everything under ~550km period waves. </td>
  </tr>
  <tr>
     <td>IFS</td>
     <td>80 km (0.01 hPa)</td>
     <td>137</td>
     <td>4 months</td>
     <td>1.4 km</td>
     <td>3 hrs</td>
     <td>300 km</td>
     <td>Global Helmholtz decomposition with a fixed 2000 km spatial filter.</td>
  </tr>
  <tr>
     <td>WRF</td>
     <td>0.01 hPa</td>
     <td></td>
     <td>100 regional days</td>
     <td>3km, 1km (dx) /(~400m dz</td>
     <td>15 min</td>
     <td>100 km</td>
     <td>Similar to IFS data with Helmholtz decomposition, but using 700 km (selected case only for comparison with Gaussian filter) </td>
  </tr>
 </table>
</body>


{{< /rawhtml >}}