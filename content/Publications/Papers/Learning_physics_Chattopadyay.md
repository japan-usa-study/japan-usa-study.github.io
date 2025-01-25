---
date: 2022-11-14
description: " "
featured_image: "/images/Data_Images/Chattopadhyay_learning.png"
title: "Learning physics-constrained subgrid-scale closures in the small-data regime for stable and accurate LES"
title2: " "
---
## Authors:
Yifei Guan, Adam Subel, ***Ashesh Chattopadhyay***, and ***Pedram Hassanzadeh***

[Read the full paper here](https://doi.org/10.1016/j.physd.2022.133568)
## Abstract:
We demonstrate how incorporating physics constraints into convolutional neural networks (CNNs) enables learning subgrid-scale (SGS) closures for stable and accurate large-eddy simulations (LES) in the small-data regime (i.e., when the availability of high-quality training data is limited). Using several setups of forced 2D turbulence as the testbeds, we examine the a priori and a posteriori performance of three methods for incorporating physics: (1) data augmentation (DA), (2) CNN with group convolutions (GCNN), and (3) loss functions that enforce a global enstrophy-transfer conservation (EnsCon). 

<!--more-->
While the data-driven closures from physics-agnostic CNNs trained in the big-data regime are accurate and stable, and outperform dynamic Smagorinsky (DSMAG) closures, their performances substantially deteriorate when these CNNs are trained with 40x fewer samples (the small-data regime). An example based on a vortex dipole demonstrates that the physics-agnostic CNN cannot account for never-seen-before samples’ rotational equivariance (symmetry), an important property of the SGS term. This shows a major shortcoming of the physics-agnostic CNN in the small-data regime. We show that CNN with DA and GCNN address this issue and each produce accurate and stable data-driven closures in the small-data regime. Despite its simplicity, DA, which adds appropriately rotated samples to the training set, performs as well or in some cases even better than GCNN, which uses a sophisticated equivariance-preserving architecture. EnsCon, which combines structural modeling with aspect of functional modeling, also produces accurate and stable closures in the small-data regime. Overall, GCNN+EnsCon, which combines these two physics constraints, shows the best a posteriori performance in this regime. These results illustrate the power of physics-constrained learning in the small-data regime for accurate and stable LES.