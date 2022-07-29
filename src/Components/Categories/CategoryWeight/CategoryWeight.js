import React from "react";
import { 
    Card, 
    CardActions, 
    CardContent,
    Typography,
    Button,
    TextField
 } from "@mui/material";

function CategoryWeight(props) {
  console.log("props", props);
  const categoryName = props.category;

  return (
    <div>
      <Card sx={{ marginBottom: 5}}>
        <CardContent>
          <Typography color="text.primary" gutterBottom>
            Category: {categoryName}
          </Typography>
        </CardContent>
        <CardActions>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}
export default CategoryWeight;
