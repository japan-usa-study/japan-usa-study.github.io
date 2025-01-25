---
date: 2022-08-04
description: " "
featured_image: "/images/Data_Images/Kruse_nudge_pub.png"
title: "Do Nudging Tendencies Depend on the Nudging Timescale Chosen in Atmospheric Models?"
title2: " "
---
## Authors:
***Christopher Kruse***, Julio Bacmeister, Colin Zarzycki, Vincent Larson and Katherine Thayer-Calder

[Read the full paper here](https://doi.org/10.1029/2022MS003024)
## Abstract:
Nudging is a ubiquitous capability of numerical weather and climate models that is widely used in a variety of applications (e.g. crude data assimilation, “intelligent” interpolation between analysis times, constraining flow in tracer advection/diffusion simulations). Here, the focus is on the momentum nudging tendencies themselves, rather than the atmospheric state that results from application of the method. The initial intent was to interpret these tendencies as a quantitative estimate of model error (net parameterization error in particular). However, it was found that nudging tendencies depend strongly on the nudging time scale chosen, which is the primary result presented here.

<!--more-->

Reducing the nudging time scale reduces the difference between the model state and the target state, but much less so than the reduction in the nudging time scale, resulting in increased nudging tendencies. The dynamical core, in particular, appears to increasingly oppose nudging tendencies as the nudging time scale is reduced. A heuristic analysis suggests such a result should be expected as long as the state the model is trying to achieve differs from the target state, regardless of the type of target state (e.g. a reanalysis, another model). These results suggest nudging tendencies cannot be quantitatively interpreted as model error. Still, two experiments aimed at seeing how nudging can identify a withheld parameterization suggest nudging tendencies do contain some information on model errors and/or missing physical processes and still might be useful in model development and tuning, even if only qualitatively.

## Plain Language Summary:
Nudging is a common feature of weather and climate models used to guide the model's atmospheric state along some evolving target state, often an analysis of the observed atmospheric evolution in the past. Here, an initial attempt was made to interpret the nudging tendencies as model error. However, it was learned that these nudging tendencies change when the nudging time scale is changed, largely due to the model's dynamical core opposing the effect of nudging by trying to achieve its desired state. The overall conclusion is that these nudging tendencies cannot be quantitatively interpreted as model error, but still have some use in identifying model issues, even if only qualitatively.

## Key Points:
1. Nudging tendencies, or nudging forces per unit mass, depend strongly on the nudging time scale chosen (i.e. are ∝ τ−1 )
2. Nudging tendencies cannot be quantitatively interpreted as errors in total (dynamics + physics) model forces on the atmospheric fluid
3. Still, nudging tendencies can be useful for identifying model errors, even if only qualitatively