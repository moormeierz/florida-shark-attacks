# Florida Shark Attacks

The goal of this project was to study Florida shark attacks.  We studied attacks by both county and coast.  We also studied fatal vs. nonfatal attacks.

Our datasets include:

https://public.opendatasoft.com/explore/dataset/us-county-boundaries/table/?disjunctive.statefp&disjunctive.countyfp&disjunctive.name&disjunctive.namelsad&disjunctive.stusab&disjunctive.state_name&refine.stusab=FLhttps://public.opendatasoft.com/explore/dataset/us-county-boundaries/table/?disjunctive.statefp&disjunctive.countyfp&disjunctive.name&disjunctive.namelsad&disjunctive.stusab&disjunctive.state_name&refine.stusab=FL

https://data.world/shruti-prabhu/shark-attacks

We created a flask application that includes 3 interactive visualizations.  These charts include a heatmap by county, bar chart by coast, and pie chart for Fatal vs. Nonfatal.

![alt text](https://github.com/moormeierz/florida-shark-attacks/blob/main/images/heatmap.PNG?raw=true)


![alt text](https://github.com/moormeierz/florida-shark-attacks/blob/main/images/bar.PNG?raw=true)


![alt text](https://github.com/moormeierz/florida-shark-attacks/blob/main/images/pie.PNG?raw=true)

After cleaning our data, we put our data into a MongoDB database
![alt text](https://github.com/moormeierz/florida-shark-attacks/blob/main/images/database.PNG?raw=true)
