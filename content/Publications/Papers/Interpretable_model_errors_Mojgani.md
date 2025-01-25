---
date: 2022-03-13
description: " "
featured_image: "/images/Data_Images/Mojgani_pub.png"
title: "Discovery of interpretable structural model errors by combining Bayesian sparse regression and data assimilation: A chaotic Kuramoto-Sivashinsky test case"
title2: " "
---
## Authors:
Rambod Mojgani, ***Ashesh Chattopadhyay***, and ***Pedram Hassanzadeh***

[Read the full paper here](https://doi.org/10.1063/5.0091282)
## Abstract:
Models of many engineering and natural systems are imperfect. The discrepancy between the mathematical representations of a true physical system and its imperfect model is called the model error. These model errors can lead to substantial differences between the numerical solutions of the model and the state of the system, particularly in those involving nonlinear, multi-scale phenomena. Thus, there is increasing interest in reducing model errors, particularly by leveraging the rapidly growing observational data to understand their physics and sources.

<!--more-->
Here, we introduce a framework named MEDIDA: Model Error Discovery with Interpretability and Data Assimilation. MEDIDA only requires a working numerical solver of the model and a small number of noise-free or noisy sporadic observations of the system. In MEDIDA, first, the model error is estimated from differences between the observed states and model-predicted states (the latter are obtained from a number of one-time-step numerical integrations from the previous observed states). If observations are noisy, a data assimilation technique, such as the ensemble Kalman filter, is employed to provide the analysis state of the system, which is then used to estimate the model error. Finally, an equation-discovery technique, here the relevance vector machine, a sparsity-promoting Bayesian method, is used to identify an interpretable, parsimonious, and closed-form representation of the model error. Using the chaotic Kuramoto–Sivashinsky system as the test case, we demonstrate the excellent performance of MEDIDA in discovering different types of structural/parametric model errors, representing different types of missing physics, using noise-free and noisy observations.