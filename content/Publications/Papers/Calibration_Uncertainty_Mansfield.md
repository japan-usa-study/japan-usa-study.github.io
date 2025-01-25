---
date: 2022-10-27
description: " "
featured_image: "/images/Data_Images/Mansfield_pub.png"
title: "Calibration and Uncertainty Quantification of a Gravity Wave Parameterization: A Case Study of the Quasi-Biennial Oscillation in an Intermediate Complexity Climate Model
"
title2: " "
---
## Authors:
***Laura Mansfield*** and ***Aditi Sheshadri***

[Read the full paper here](https://doi.org/10.1029/2022MS003245)
## Abstract:
The drag due to breaking atmospheric gravity waves plays a leading order role in driving the middle atmosphere circulation, but as their horizontal wavelength ranges from tens to thousands of kilometers, part of their spectrum must be parameterized in climate models. Gravity wave parameterizations prescribe a source spectrum of waves in the lower atmosphere and allow these to propagate upwards until they either dissipate or break, where they deposit drag on the large-scale flow. These parameterizations are a source of uncertainty in climate modeling which is generally not quantified. Here, we explore the uncertainty associated with a non-orographic gravity wave parameterization given an assumed parameterization structure within a global climate model of intermediate complexity, using the Calibrate, Emulate and Sample (CES) method.
<!--more-->
We first calibrate the uncertain parameters that define the gravity wave source spectrum in the tropics, to obtain climate model settings that are consistent with properties of the primary mode of tropical stratospheric variability, the Quasi-Biennial Oscillation (QBO). Then we use a Gaussian process emulator to sample the calibrated distribution of parameters and quantify the uncertainty of these parameter choices. We find that the resulting parametric uncertainties on the QBO period and amplitude are of a similar magnitude to the internal variability under a 2xCO2 forcing.

## Plain Language Summary:
Atmospheric gravity waves are excited in the lower atmosphere by disturbances such as mountains, convection and fronts. They travel upwards and break in the upper atmosphere, thus modifying the mean flow. This has large effects on the circulation, including driving a tropical oscillation. Gravity waves have a wide range of spatial scales and a large portion of these are smaller than the grid size of a climate model. This means they cannot be resolved and instead, they are represented through approximations called “parameterizations”, which introduce a source of uncertainty in climate model output. In this study, we tune a parameterization so that the model produces an oscillation in the tropical middle atmosphere, with a defined period and amplitude, which is one of the main features of the climate driven primarily by gravity waves. We also explore uncertainties associated with the parameterization.

## Key Points:
1. We calibrate tropical parameters in a gravity wave parameterization to obtain selected properties of the Quasi-Biennial Oscillation
2. We use a Gaussian process to emulate an intermediate complexity climate model and then learn a distribution of gravity wave parameters
3. We explore the gravity wave parametric uncertainty of the Quasi-Biennial Oscillation period and amplitude in a double CO2 scenario