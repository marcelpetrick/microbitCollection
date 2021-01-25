# voice activated microbit v2

based on this tutorial: [https://www.youtube.com/watch?v=fNSKWdIxh8o]  
data: [https://cdn.edgeimpulse.com/datasets/microbit-keywords-11khz.zip]  

my repo at edge impulse: [https://studio.edgeimpulse.com/studio/16565]  

used keyword: Auto

sample at 11 KHz (very important!) via phone


-----------------
Creating job... OK (ID: 498321)

Job started
Creating windows from 1994 files...
[2/6] Pre-caching files...
[6/6] Pre-caching files...
Pre-caching files OK

[   1/1994] Creating windows from files...
[ 356/1994] Creating windows from files...
[ 629/1994] Creating windows from files...
[ 897/1994] Creating windows from files...
[1155/1994] Creating windows from files...
[1428/1994] Creating windows from files...
[1647/1994] Creating windows from files...
[1883/1994] Creating windows from files...
[1994/1994] Creating windows from files...
Created 1994 windows: auto_vocal_11khz: 104, noise: 948, unknown: 942

Scheduling job in cluster...
Job started
Creating features
[   1/1994] Creating features...
[ 717/1994] Creating features...
[1431/1994] Creating features...
[1994/1994] Creating features...
Created features

Scheduling job in cluster...
Job started
Reducing dimensions for visualizations...
UMAP(a=None, angular_rp_forest=False, b=None,
     force_approximation_algorithm=False, init='spectral', learning_rate=1.0,
     local_connectivity=1.0, low_memory=False, metric='euclidean',
     metric_kwds=None, min_dist=0.1, n_components=3, n_epochs=None,
     n_neighbors=15, negative_sample_rate=5, output_metric='euclidean',
     output_metric_kwds=None, random_state=None, repulsion_strength=1.0,
     set_op_mix_ratio=1.0, spread=1.0, target_metric='categorical',
     target_metric_kwds=None, target_n_neighbors=-1, target_weight=0.5,
     transform_queue_size=4.0, transform_seed=42, unique=False, verbose=True)
Construct fuzzy simplicial set
Mon Jan 25 22:03:04 2021 Finding Nearest Neighbors
Still running...
Mon Jan 25 22:03:06 2021 Finished Nearest Neighbor Search
Mon Jan 25 22:03:09 2021 Construct embedding
	completed  0  /  500 epochs
Still running...
	completed  50  /  500 epochs
	completed  100  /  500 epochs
	completed  150  /  500 epochs
	completed  200  /  500 epochs
	completed  250  /  500 epochs
	completed  300  /  500 epochs
	completed  350  /  500 epochs
	completed  400  /  500 epochs
Still running...
	completed  450  /  500 epochs
Mon Jan 25 22:03:17 2021 Finished embedding
Reducing dimensions for visualizations OK

Job completed
-----------------