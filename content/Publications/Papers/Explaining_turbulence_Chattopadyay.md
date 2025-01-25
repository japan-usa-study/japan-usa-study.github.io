---
date: 2023-01-23
description: " "
featured_image: "/images/Data_Images/Chattopadhyay_turbulence.png"
title: "Explaining the physics of transfer learning in data-driven turbulence modeling"
title2: " "
---
## Authors:
Adam Subel, Yifei Guan, ***Ashesh Chattopadhyay***, and ***Pedram Hassanzadeh***

[Read the full paper here](https://doi.org/10.1093/pnasnexus/pgad015)
## Abstract:
Transfer learning (TL), which enables neural networks (NNs) to generalize out-of-distribution via targeted re-training, is becoming a powerful tool in scientific machine learning (ML) applications such as weather/climate prediction and turbulence modeling. Effective TL requires knowing 1) how to re-train NNs? and 2) what physics are learned during TL? Here, we present novel analyses and a framework addressing (1)-(2) for a broad range of multi-scale, nonlinear, dynamical systems. 

<!--more-->
Our approach combines spectral (e.g., Fourier) analyses of such systems with spectral analyses of convolutional NNs, revealing physical connections between the systems and what the NN learns (a combination of low-, high-, band-pass filters and Gabor filters). Integrating these analyses, we introduce a general framework that identifies the best re-training procedure for a given problem based on physics and NN theory. As test case, we explain the physics of TL in subgrid-scale modeling of several setups of 2D turbulence. Furthermore, these analyses show that in these cases, the shallowest convolution layers are the best to re-train, which is consistent with our physics-guided framework but is against the common wisdom guiding TL in the ML literature. Our work provides a new avenue for optimal and explainable TL, and a step toward fully explainable NNs, for wide-ranging applications in science and engineering, such as climate change modeling.