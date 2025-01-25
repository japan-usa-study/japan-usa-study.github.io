---
date: 2022-06-01
description: " "
featured_image: "/images/Data_Images/Guan_Pub.png"
title: "Stable a posteriori LES of 2D turbulence using convolutional neural networks: Backscattering analysis and generalization to higher Re via transfer learning"
title2: " "
---
## Authors:
Yifei Guan, ***Ashesh Chattopadhyay***, Adam Subel, and ***Pedram Hassanzadeh***

[Read the full paper here](https://doi.org/10.1016/j.jcp.2022.111090)
## Abstract:
There is a growing interest in developing data-driven subgrid-scale (SGS) models for large-eddy simulation (LES) using machine learning (ML). In a priori (offline) tests, some recent studies have found ML-based data-driven SGS models that are trained on high-fidelity data (e.g., from direct numerical simulation, DNS) to outperform baseline physics-based models and accurately capture the inter-scale transfers, both forward (diffusion) and backscatter. While promising, instabilities in a posteriori (online) tests and inabilities to generalize to a different flow (e.g., with a higher Reynolds number, Re) remain as major obstacles in broadening the applications of such data-driven SGS models. For example, many of the same aforementioned studies have found instabilities that required often ad-hoc remedies to stabilize the LES at the expense of reducing accuracy.

<!--more-->
Here, using 2D decaying turbulence as the testbed, we show that deep convolutional neural networks (CNNs) can accurately predict the SGS forcing terms and the inter-scale transfers in a priori tests, and if trained with enough samples, lead to stable and accurate a posteriori LES-CNN. Further analysis attributes aforementioned instabilities to the disproportionately lower accuracy of the CNNs in capturing backscattering (anti-diffusion) when the training set is small. We also show that transfer learning, which involves re-training the CNN with a small amount of data (e.g., 1%) from the new flow, enables accurate and stable a posteriori LES-CNN for flows with 16× higher Re (as well as higher grid resolution if needed). These results show the promise of CNNs with transfer learning to provide stable, accurate, and generalizable LES for practical use.

## Highlights:
1. Better subgrid-scale (SGS) models for large-eddy simulation (LES) are needed.
2. A deep learning-based, non-local data-driven SGS model is introduced.
3. This SGS model accurately captures the effect of small-scale structures.
4. Transfer learning enables the SGS model to extrapolate to more turbulent flows.
5. Resulting LES model is stable and generalizable with accuracy superior to baseline LES.