---
date: 2023-05-19
description: " "
featured_image: "/images/Data_Images/Qiang_drag.png"
title: "Quantifying 3D Gravity Wave Drag in a Library of Tropical Convection-Permitting Simulations for Data-Driven Parameterizations"
title2: " "
---
## Authors:
***Qiang Sun***, ***Pedram Hassanzadeh***, ***M. Joan Alexander***, and ***Christopher Kruse***

[Read the full paper here](https://doi.org/10.1029/2022MS003585)
## Abstract:
Atmospheric gravity waves (GWs) span a broad range of length scales. As a result, the unresolved and under-resolved GWs have to be represented using a sub-grid scale (SGS) parameterization in general circulation models (GCMs). In recent years, machine learning (ML) techniques have emerged as novel methods for SGS modeling of climate processes. In the widely used approach of supervised (offline) learning, the true representation of the SGS terms have to be properly extracted from high-fidelity data (e.g., GW-resolving simulations). However, this is a non-trivial task, and the quality of the ML-based parameterization significantly hinges on the quality of these SGS terms. Here, we compare three methods to extract 3D GW fluxes and the resulting drag (Gravity Wave Drag [GWD]) from high-resolution simulations: Helmholtz decomposition, and spatial filtering to compute the Reynolds stress and the full SGS stress.

<!--more-->
In addition to previous studies that focused only on vertical fluxes by GWs, we also quantify the SGS GWD due to lateral momentum fluxes. We build and utilize a library of tropical high-resolution (Δx = 3 km) simulations using weather research and forecasting model. Results show that the SGS lateral momentum fluxes could have a significant contribution to the total GWD. Moreover, when estimating GWD due to lateral effects, interactions between the SGS and the resolved large-scale flow need to be considered. The sensitivity of the results to different filter type and length scale (dependent on GCM resolution) is also explored to inform the scale-awareness in the development of data-driven parameterizations.

## Plain Language Summary:
Gravity waves (GWs) present a challenge to climate prediction: waves on scales of O(1)–O(100) km can neither be systematically measured with conventional observational systems, nor properly represented (resolved) in operational climate models, which have a typical grid spacing on the order of 100 km. Therefore, in these climate models, small-scale GWs must be parameterized, or estimated, based on the resolved (large-scale) flow. The primary effects of these small-scale waves on the resolved flow is the so-called sub-grid scale drag (Gravity Wave Drag [GWD]), resulting from the propagation and breaking of these waves. Existing GW parameterizations in general circulation models are all highly simplified; for example, they only account for vertical propagation of GWs. With growing computing power, a promising alternative approach is to use machine learning to develop data-driven parameterizations. However, this requires to first generate reliable high-resolution computer simulations and then extract GWD from these simulations. This study follows these steps, compares different extraction methods, and describes some challenges and pathways to make advances. Furthermore, our results suggest that the horizontal propagation of GWs should be included in parameterizations too, however, extra care is needed in order to extract the resulting GWD from high-resolution data.