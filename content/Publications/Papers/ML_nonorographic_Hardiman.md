---
date: 2023-11-23
description: " "
featured_image: "/images/Data_Images/Hardiman_ML.png"
title: "Machine Learning for Nonorographic Gravity Waves in a Climate Model"
title2: " "
---
## Authors:
***Steven Hardiman***, ***Adam Scaife***, Annelize Niekerk, Rachel Prudden, Aled Owen, Samantha Adams, Tom Dunstan, Nick Dunstone, and Sam Madge

[Read the full paper here](https://doi.org/10.1175/AIES-D-22-0081.1)
## Abstract:
There is growing use of machine learning algorithms to replicate subgrid parameterization schemes in global climate models. Parameterizations rely on approximations; thus, there is potential for machine learning to aid improvements. In this study, a neural network is used to mimic the behavior of the nonorographic gravity wave scheme used in the Met Office climate model, important for stratospheric climate and variability.
<!--more-->
The neural network is found to require only two of the six inputs used by the parameterization scheme, suggesting the potential for greater efficiency in this scheme. Use of a one-dimensional mechanistic model is advocated, allowing neural network hyperparameters to be chosen based on emergent features of the coupled system with minimal computational cost, and providing a testbed prior to coupling to a climate model. A climate model simulation, using the neural network in place of the existing parameterization scheme, is found to accurately generate a quasi-biennial oscillation of the tropical stratospheric winds, and correctly simulate the nonorographic gravity wave variability associated with El Niño–Southern Oscillation and stratospheric polar vortex variability. These internal sources of variability are essential for providing seasonal forecast skill, and the gravity wave forcing associated with them is reproduced without explicit training for these patterns.

## Significance Statement:
Climate simulations are required for providing advice to government, industry, and society regarding the expected climate on time scales of months to decades. Machine learning has the potential to improve the representation of some sources of variability in climate models that are too small to be directly simulated by the model. This study demonstrates that a neural network can simulate the variability due to atmospheric gravity waves that is associated with El Niño–Southern Oscillation and with the tropical and polar regions of the stratosphere. These details are important for a model to produce more accurate predictions of regional climate.