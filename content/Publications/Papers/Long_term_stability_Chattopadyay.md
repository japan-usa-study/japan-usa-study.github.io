---
date: 2023-01-10
description: " "
featured_image: "/images/Data_Images/Chattopadhyay_stability.png"
title: "Long-term stability and generalization of observationally-constrained stochastic data-driven models for geophysical turbulence"
title2: " "
---
## Authors:
***Ashesh Chattopadhyay***, Jaideep Pathak, Ebrahim Nabizadeh, Wahid Bhimji, and ***Pedram Hassanzadeh***

[Read the full paper here](https://doi.org/10.1017/eds.2022.30)
## Abstract:
Recent years have seen a surge in interest in building deep learning-based fully data-driven models for weather prediction. Such deep learning models, if trained on observations can mitigate certain biases in current state-of-the-art weather models, some of which stem from inaccurate representation of subgrid-scale processes. However, these data-driven models, being over-parameterized, require a lot of training data which may not be available from reanalysis (observational data) products. Moreover, an accurate, noise-free, initial condition to start forecasting with a data-driven weather model is not available in realistic scenarios. Finally, deterministic data-driven forecasting models suffer from issues with long-term stability and unphysical climate drift, which makes these data-driven models unsuitable for computing climate statistics.

<!--more-->
Given these challenges, previous studies have tried to pre-train deep learning-based weather forecasting models on a large amount of imperfect long-term climate model simulations and then re-train them on available observational data. In this article, we propose a convolutional variational autoencoder (VAE)-based stochastic data-driven model that is pre-trained on an imperfect climate model simulation from a two-layer quasi-geostrophic flow and re-trained, using transfer learning, on a small number of noisy observations from a perfect simulation. This re-trained model then performs stochastic forecasting with a noisy initial condition sampled from the perfect simulation. We show that our ensemble-based stochastic data-driven model outperforms a baseline deterministic encoder–decoder-based convolutional model in terms of short-term skills, while remaining stable for long-term climate simulations yielding accurate climatology.