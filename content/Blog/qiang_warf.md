---
title: "A Library of High-Resolution Gravity Wave Simulations"
date: 2023-08-04
author: "Qiang Sun"
featured: true
draft: false
weight: 20
location: "Rice"
featured_image:: '/images/wave.jpeg'

---
{{< rawhtml >}}
<div>
<h3> How we plan to use it to develop data-driven parametierizations for climate models. </h3>     
<p> Climate models, also known as General Circulation Models (GCMs), serve as vital tools for understanding and predicting the complexities of Earth's climate system. These models play a crucial role in assessing the impact of human activities on the environment and informing climate change mitigation and adaptation strategies.
</p>
</div>
{{< /rawhtml >}}
<!--more-->
{{< rawhtml >}}
<div>
Despite their significance, climate models still face uncertainties, especially when it comes to parameterizing sub-grid scale processes [1-3]. These processes occur at scales smaller than what traditional climate models can resolve and include phenomena like cloud formation, radiation, gravity waves, and turbulence (Fig. 1).
</p>

<img src="/Blog/images/qiang_warf/gcm1.png" alt="image" style="display:block;margin-left:auto; margin-right:auto;width:70%;height:70%">
 
<em><small>Figure 1: adapted from Edwards (2011), shows a schematic of a GCM, illustrating the column structure and processes not well resolved by it. The ocean also utilizes a similar structure.</small></em>
<p>
To address this issue, the combination of high-resolution high-fidelity simulations and data-driven approaches has emerged as a promising solution. DataWave, a collaborative gravity wave research initiative, is among the first to focus on improving our modeling capability for small scale gravity waves (GWs) and large-scale circulation, and particularly to lead to novel observationally constrained and data-driven gravity wave parameterization schemes.
</p>
In this short blog, we will delve deeper into the significance of using high-resolution simulation for data-driven parameterization in climate models and explore the challenges involved in its implementation.
</p>
<h4> The Need for High-Resolution Data for Data-Driven Parameterization </h4> 
</p>
The unprecedented observations of atmospheric conditions across thousands of balloon flights by Loon LLC provides a unique chance to look at the properties of GWs. However, these Loons are only available at certain limited height levels in the lower stratosphere. Moreover, these observations alone do not provide accurate estimates of GW drag forces, and these drag forces are precisely what GCMs need.
</p>
High-resolution simulations bridge this gap by providing full 3D detailed GW information at any chosen location and height. These simulations, with spatial resolutions as fine as a few kilometers to resolve GWs, also allow the DataWave team to estimate the GW drag that directly influence the GCMs. 
</p>
While all models are wrong in some way, with the available observations, we can validate these simulations to be sure that we get high-fidelity GW data from these carefully designed high-resolution experiments. Figure 2 shows an example of this. A qualitative comparison of (a) observed and (b) modeled satellite brightness temperature perturbations for a single satellite overpass is presented here. The high-resolution (3-km) weather research and forecast (WRF) model demonstrated high skills at reproducing the observed GWs from the orographic features containing larger-scale topography over the Drake Passage area [4], which boosts our confidence in using similar model setup to produce high fidelity data for developing data-driven GW parameterizations.
</p>

<img src="/Blog/images/qiang_warf/kruse.png" alt="image" style="display:block;margin-left:auto; margin-right:auto;width:75%;height:75%">
 
<em><small>Figure 2: adapted from Kruse et al. (2022), presents a qualitative comparison between satellite-observed brightness temperature (left) and that simulated by the high-resolution WRF model (right).</small></em>
<p>
<h4> Building a Library of High-Resolution Data </h4> 
</p>
For the machine learning algorithm to effectively learn from the high-resolution data, we need to construct a diverse and comprehensive library of atmospheric flows. This library should cover a wide range of large-scale weather patterns, climate regimes, and extreme events. This requires substantial computational resources and expertise in numerical modeling.  However, once established, this data library serves as a valuable asset for data-driven approaches, enabling machine learning algorithms to draw upon various scenarios and conditions for improving the data-driven parameterization and the future climate models.
</p>
The DataWave team has built a library of GW resolving high-resolution simulations for this purpose using WRF model [5]. For now, the library focuses on regions that have been known to have strong GW signals (see the domains in Fig. 3). We have conducted a total of 20 simulations in 6 domains, where the dates of the week-long runs are chosen to sample the seasonal cycle, QBO phases, and precipitation distribution.  As demonstrated in Fig. 2, one advantage of using WRF model is that it has well-vetted physics and has shown high skill for simulating GWs at convection-permitting resolutions. More regions and circulation scenarios will be added in the future to improve the generalizability of the data-driven scheme. 
</p>
<img src="/Blog/images/qiang_warf/warf_library.png" alt="image" style="display:block;margin-left:auto; margin-right:auto;width:100%;height:100%">
<em><small>Figure 3: adapted from Sun et al. (2023), displays a schematic of the WRF library produced by the DataWave team. On the left is a snapshot of the simulation showing the convection and the gravity waves (GWs) it generated. On the right are the domains represented in the library, with the filled box indicating the ones that have been completed and the blank box representing those planned for future inclusion.</small></em>
</p>
<h4> Challenges in Utilizing High-Resolution Data for Machine Learning </h4> 
</p>
While the potential benefits of using high-resolution data for data-driven parameterization are immense, several challenges must be addressed. One key challenge in the most common data-driven approach (the so-called “supervised” or “offline” learning) is the need to extract, from the high-resolution simulations, the true GW force due to the un- and under-resolved GWs. This sub-grid scale forcing is what has to be added to a low-resolution GCM to properly account for the un- and under-resolved GWs.  A number of methods have been used in the past to separate GWs from the large-scale flow and quantify the GW fluxes or GW force. The team has also compared a few methods on the extraction of GW momentum fluxes and found that different estimation methods would lead to different offline “true” GW force that feeds to the machine learning algorithm.  Therefore, finding the right approach for machine learning is not straightforward.
</p>
Another innovation that the library could bring is the 3D propagation of GWs and the resulting 3D sub-grid scale GW force, which is explicitly simulated by the high-resolution WRF model (Fig. 4). The animation in Fig. 4 shows the evolution of the vertical velocity in one of the WRF simulations at 50 km. The GWs there, due to the convection, look just like the ripples you would see if you threw a rock into the water. There is growing evidence that the horizontal propagation of GWs has to be considered in climate models to produce a realistic large-scale atmospheric circulation. Yet, quantifying and implementing it into the climate models is challenging.
</p>
<img src="/Blog/images/qiang_warf/WRF-12h-animation.gif" alt="image" style="display:block;margin-left:auto; margin-right:auto;width:50%;height:50%">
<em><small>Figure 4:  an animation showing the evolution of vertical velocity at 50 km altitude in one of the WRF simulations.</small></em>
</p>
Handling the sheer volume and complexity of high-resolution datasets is another obstacle. High-resolution simulations can generate massive amounts of data (~500 Tb for the current library developed by DataWave), which can strain computational resources and hinder efficient processing. To leverage high-resolution data effectively, we need to develop machine learning algorithms capable of handling vast datasets very efficiently. Additionally, ensuring the physical consistency of climate models when incorporating machine learning-derived parameterizations is also crucial, as these models must align with fundamental physical laws to ensure credible outputs. 
<p>
To overcome all these challenges, we need advancements in computational capabilities, algorithm development, and interdisciplinary collaboration between climate scientists and machine learning experts. As climate science continues to progress, the integration of high-resolution simulations and data-driven approaches will play a pivotal role in achieving more accurate climate projections and effectively addressing pressing environmental challenges. Therefore, investing in cutting-edge research to leverage the potential of high-resolution simulation and data-driven parameterization is essential for advancing climate science and fostering a sustainable future for generations to come.
</p>

<h3>Citations: </h3></p>

[1] Schneider, T., Lan, S., Stuart, A., & Teixeira, J. (2017). Earth system modeling 2.0: A blueprint for models that learn from observations and targeted high-resolution simulations. Geophysical Research Letters, 44(24), 12-396. <a href="https://doi.org/10.1002/2017gl076101">https://doi.org/10.1002/2017gl076101</a></p>
[2] P. N. Edwards (2011). History of climate modeling. WIREs Clim. Chang. 2, 128–139. <a href=https://doi.org/10.1002/wcc.95>https://doi.org/10.1002/wcc.95</a></p>
[3] Balaji, V., Couvreux, F., Deshayes, J., Gautrais, J., Hourdin, F., & Rio, C. (2022). Are general circulation models obsolete? Proceedings of the National Academy of Sciences, 119(47), e2202075119. <a href="https://doi.org/10.1073/pnas.2202075119">https://doi.org/10.1073/pnas.2202075119</a></p>
[4] Kruse, C. G., and Coauthors, 2022: Observed and Modeled Mountain Waves from the Surface to the Mesosphere near the Drake Passage. J. Atmos. Sci., 79, 909–932, <a href="https://doi.org/10.1175/JAS-D-21-0252.1">https://doi.org/10.1175/JAS-D-21-0252.1</a>.</p>
[5] Sun, Y. Q., Hassanzadeh, P., Alexander, M. J., & Kruse, C. G. (2023). Quantifying 3D gravity wave drag in a library of tropical convection-permitting simulations for data-driven parameterizations. Journal of Advances in Modeling Earth Systems, 15, e2022MS003585. <a href="https://doi.org/10.1029/2022MS003585">https://doi.org/10.1029/2022MS003585</a>

{{< /rawhtml >}}